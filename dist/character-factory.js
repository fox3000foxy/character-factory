import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { pickEthnicity, pickHairColor, pickHaircut, pickHasBeard, pickSkinColor, } from "./lorelei-ethnicity";
import { Gender, GENDER_POOLS } from "./lorelei-gender";
import { Mood, MOOD_POOLS } from "./lorelei-mood";
import { BackgroundColor, Beard, Earrings, Eyebrows, EyeColor, Eyes, Glasses, Hair, HairAccessory, HairColor, HairFemale, HairMale, HairUnisex, HeadShape, Mouth, Nose, SkinColor, } from "./lorelei-traits";
/**
 * Returns a uniformly random element from an array.
 *
 * @param arr - Non-empty source array.
 * @returns A randomly selected element.
 * @throws {RangeError} If `arr` is empty.
 */
export function pick(arr) {
    if (arr.length === 0)
        throw new RangeError("pick() called on empty array");
    return arr[Math.floor(Math.random() * arr.length)];
}
/**
 * Returns a uniformly random value from a TypeScript enum.
 *
 * @param e - The enum object (`Record<string, T>`).
 * @returns A randomly selected enum value.
 */
export function pickEnum(e) {
    return pick(Object.values(e));
}
/**
 * Recursively merges `source` into `target`.
 * Only explicitly defined fields in `source` overwrite `target`; `undefined` values are ignored.
 *
 * @param target - Base object (shallow-copied, never mutated).
 * @param source - Partial patch to apply on top.
 * @returns A new merged object.
 */
function deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
        const srcVal = source[key];
        if (srcVal === undefined)
            continue;
        const tgtVal = result[key];
        const isPlainObj = typeof srcVal === "object" &&
            srcVal !== null &&
            !Array.isArray(srcVal) &&
            typeof tgtVal === "object" &&
            tgtVal !== null &&
            !Array.isArray(tgtVal);
        if (isPlainObj) {
            result[key] = deepMerge(tgtVal, srcVal);
        }
        else {
            result[key] = srcVal;
        }
    }
    return result;
}
/** Draws an allele from a carrier — an observed carrier always has at least one D. */
function drawAllele() {
    return Math.random() < 0.5 ? "D" : "R";
}
/** Combines two alleles → `"dominant"` if at least one D, `"recessive"` if RR. */
function combine(a, b) {
    return a === "D" || b === "D" ? "dominant" : "recessive";
}
/**
 * Resolves the child's trait from an explicit dominance order.
 * The highest index = most dominant.
 *
 * - `"dominant"` resolution → highest-ranked trait wins.
 * - `"recessive"` resolution → lowest-ranked trait wins.
 *
 * Values not found in `order` (e.g. fantasy colors) fall back to a 50/50 coin flip.
 *
 * @param a     - Trait value from parent A.
 * @param b     - Trait value from parent B.
 * @param order - Dominance order array, from most recessive (index 0) to most dominant.
 * @returns The resolved child trait.
 */
function resolveByRank(a, b, order) {
    const idxA = order.indexOf(a);
    const idxB = order.indexOf(b);
    // Unknown value (e.g. fantasy color not in order) → 50/50
    if (idxA === -1 || idxB === -1)
        return Math.random() < 0.5 ? a : b;
    const dominantVal = idxA >= idxB ? a : b;
    const recessiveVal = idxA <= idxB ? a : b;
    const result = combine(drawAllele(), drawAllele());
    return result === "dominant" ? dominantVal : recessiveVal;
}
/**
 * For traits without a clear biological order: 50/50 coin flip.
 *
 * @param a - Trait from parent A.
 * @param b - Trait from parent B.
 * @returns One of the two values at random.
 */
function coin(a, b) {
    return Math.random() < 0.5 ? a : b;
}
// ── Dominance orders (from most recessive to most dominant) ──────────────────
/**
 * Skin tone: darker is dominant over lighter.
 * Actual hex values from {@link SkinColor}, ordered from lightest to darkest.
 */
const SKIN_DOMINANCE_ORDER = [
    SkinColor.Porcelain, // ffdbb4 — lightest / most recessive
    SkinColor.Light, // edb98a
    SkinColor.Warm, // fd9841
    SkinColor.Medium, // d08b5b
    SkinColor.Tan, // ae5d29
    SkinColor.Brown, // 614335
    SkinColor.DarkBrown, // 4a312c
    SkinColor.Deep, // 2c1b18 — darkest / most dominant
];
/**
 * Eye color: black/brown dominant, blue recessive.
 * Source: real genetics (HERC2/OCA2).
 */
const EYE_DOMINANCE_ORDER = [
    EyeColor.LightBlue, // 6baed6 — most recessive
    EyeColor.Blue, // 3b6fa0
    EyeColor.Gray, // 737373
    EyeColor.Green, // 3d6b34
    EyeColor.Hazel, // 8d6e63
    EyeColor.Amber, // b07c4d
    EyeColor.Brown, // 724133
    EyeColor.DarkBrown, // 4a312c
    EyeColor.Black, // 0a0a0a — most dominant
];
/**
 * Natural hair color: darker is dominant.
 * Auburn/Red/Copper are intermediate — recessive over brown, dominant over blonde.
 * Source: MC1R for red hair, TYRP1/OCA2 for the light/dark axis.
 *
 * Fantasy colors (PastelPink, HotPink, Lilac…) are outside the order;
 * {@link resolveByRank} automatically falls back to 50/50 for them.
 */
const HAIR_DOMINANCE_ORDER = [
    HairColor.LightBlonde, // most recessive
    HairColor.GoldenBlonde,
    HairColor.HoneyBlonde,
    HairColor.Auburn, // red — recessive over brown, dominant over blonde
    HairColor.Red,
    HairColor.Copper,
    HairColor.LightBrown,
    HairColor.Brown,
    HairColor.DarkBrown,
    HairColor.SoftBlack,
    HairColor.JetBlack, // most dominant
    // White/Silver/Gray = aging, outside the base genetic order
];
// ── Trait-specific inheritance rules ─────────────────────────────────────────
/**
 * Freckles: recessive (MC1R gene).
 * Expressed only when both parents are carriers (or have them).
 *
 * - Both parents have freckles → 75% chance the child does too.
 * - Only one parent has freckles → 25% chance.
 * - Neither → no freckles.
 *
 * @param a - Whether parent A has freckles.
 * @param b - Whether parent B has freckles.
 * @returns Whether the child inherits freckles.
 */
function inheritFreckles(a, b) {
    if (a && b)
        return Math.random() < 0.75;
    if (a || b)
        return Math.random() < 0.25;
    return false;
}
/**
 * Freckle color: inherited from whichever parent has freckles.
 * If both parents have freckles, the colors are blended via a simple perceptual hex average.
 *
 * @param aHas   - Whether parent A has freckles.
 * @param aColor - Parent A's freckle color (hex without `#`).
 * @param bHas   - Whether parent B has freckles.
 * @param bColor - Parent B's freckle color (hex without `#`).
 * @returns Resolved freckle color for the child.
 */
function inheritFrecklesColor(aHas, aColor, bHas, bColor) {
    if (aHas && bHas) {
        // Simple perceptual hex blend
        const blend = (ca, cb) => {
            const ra = parseInt(ca.slice(0, 2), 16), ga = parseInt(ca.slice(2, 4), 16), ba = parseInt(ca.slice(4, 6), 16);
            const rb = parseInt(cb.slice(0, 2), 16), gb = parseInt(cb.slice(2, 4), 16), bb = parseInt(cb.slice(4, 6), 16);
            const r = Math.round((ra + rb) / 2).toString(16).padStart(2, "0");
            const g = Math.round((ga + gb) / 2).toString(16).padStart(2, "0");
            const b = Math.round((ba + bb) / 2).toString(16).padStart(2, "0");
            return r + g + b;
        };
        return blend(aColor, bColor);
    }
    if (aHas)
        return aColor;
    if (bHas)
        return bColor;
    return "c9734a"; // default fallback
}
/**
 * Beard: linked to the SRY gene (Y chromosome) + polygenic factors.
 *
 * - Both parents have a beard → 75% chance.
 * - Only one parent has a beard → 30% chance (potential carrier).
 * - Neither → no beard.
 *
 * The beard style is stripped if the child's gender is Female.
 *
 * @param a - Parent A's beard style.
 * @param b - Parent B's beard style.
 * @returns The child's inherited beard style.
 */
function inheritBeard(a, b) {
    const aHas = a !== Beard.None;
    const bHas = b !== Beard.None;
    let hasBeard;
    if (aHas && bHas)
        hasBeard = Math.random() < 0.75;
    else if (aHas || bHas)
        hasBeard = Math.random() < 0.30;
    else
        hasBeard = false;
    if (!hasBeard)
        return Beard.None;
    // Beard style inherited from the bearded parent(s)
    const candidates = [a, b].filter(v => v !== Beard.None);
    return pick(candidates);
}
/**
 * Hairstyle: not biological (cultural choice), but constrained to the child's gender pool.
 * Attempts to preserve "texture" (wavy, curly…) by finding an equivalent in the target pool.
 *
 * @param a           - Parent A's hairstyle.
 * @param b           - Parent B's hairstyle.
 * @param childGender - The child's gender (used to filter the available pool).
 * @returns The resolved hairstyle for the child.
 */
function inheritHairStyle(a, b, childGender) {
    const base = coin(a, b);
    if (!childGender)
        return base;
    const pool = childGender === Gender.Female ? HairFemale :
        childGender === Gender.Male ? HairMale :
            [...HairFemale, ...HairMale, ...HairUnisex];
    // If the inherited style is already compatible → keep it
    if (pool.includes(base))
        return base;
    // Otherwise pick from the gender pool
    return pick(pool);
}
/**
 * Head shape: neither fully free nor strictly dominant.
 * Modeled with a slight bias — Oval and Round co-express more often than Angular,
 * but the base outcome is mostly 50/50.
 *
 * @param a - Parent A's head shape.
 * @param b - Parent B's head shape.
 * @returns The child's resolved head shape.
 */
function inheritHeadShape(a, b) {
    // Standard and Round are "neutral"; Angular is rare → slight bias when one parent is Angular
    if (a === b)
        return a;
    if (a === HeadShape.Angular || b === HeadShape.Angular) {
        return Math.random() < 0.40 ? HeadShape.Angular : coin(a === HeadShape.Angular ? b : a, HeadShape.Standard);
    }
    return coin(a, b);
}
/**
 * Nose shape dominance order.
 * Wide tends to be dominant over Button and Soft; Strong is dominant over Pointed.
 * Everything else resolves to 50/50.
 */
const NOSE_DOMINANCE_ORDER = [
    Nose.Button,
    Nose.Soft,
    Nose.Upturned,
    Nose.Pointed,
    Nose.Wide,
    Nose.Strong,
];
// ─────────────────────────────────────────────────────────────────────────────
// DEFAULTS
// ─────────────────────────────────────────────────────────────────────────────
const DEFAULT_FACE = {
    headShape: HeadShape.Standard,
    skinColor: SkinColor.Light,
    eyes: Eyes.Round,
    eyesColor: EyeColor.Brown,
    eyebrows: Eyebrows.NeutralFlat,
    eyebrowsColor: HairColor.Brown,
    nose: Nose.Button,
    noseColor: "000000",
    mouth: Mouth.SlightSmile,
    mouthColor: "000000",
};
const DEFAULT_HAIR = {
    hair: Hair.BoyClassicA,
    hairColor: HairColor.Brown,
    beard: Beard.None,
    freckles: false,
    frecklesColor: "c9734a",
};
const DEFAULT_ACCESSORIES = {
    glasses: Glasses.None,
    glassesColor: "000000",
    earrings: Earrings.None,
    earringsColor: "ffd700",
    hairAccessory: HairAccessory.None,
    hairAccessoryColor: "ff6b9d",
};
const DEFAULT_PRESENTATION = {
    backgroundColor: BackgroundColor.Transparent,
};
// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER FACTORY
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Fluent builder for Lorelei avatars.
 *
 * Manages a mutable {@link CharacterConfig} internally and exposes chainable setters,
 * randomizers, a genetics engine ({@link CharacterFactory.projectChild}),
 * and DiceBear render targets (SVG, PNG, file).
 *
 * @example
 * ```ts
 * const svg = new CharacterFactory()
 *   .setGender(Gender.Female)
 *   .setMood(Mood.Happy)
 *   .setSkinColor(SkinColor.Warm)
 *   .buildSvg();
 * ```
 */
export class CharacterFactory {
    seed;
    gender;
    mood;
    face;
    hair;
    accessories;
    presentation;
    /**
     * @param seed - Optional deterministic seed. Defaults to a random 8-byte hex string.
     */
    constructor(seed) {
        this.seed = seed ?? crypto.randomBytes(8).toString("hex");
        this.face = { ...DEFAULT_FACE };
        this.hair = { ...DEFAULT_HAIR };
        this.accessories = { ...DEFAULT_ACCESSORIES };
        this.presentation = { ...DEFAULT_PRESENTATION };
    }
    // ── Global config ─────────────────────────────────────────────────────────
    /**
     * Returns a read-only snapshot of the current configuration.
     * All sub-objects are shallow-copied so external mutations don't leak back.
     */
    getConfig() {
        return {
            seed: this.seed,
            gender: this.gender,
            mood: this.mood,
            face: { ...this.face },
            hair: { ...this.hair },
            accessories: { ...this.accessories },
            presentation: { ...this.presentation },
        };
    }
    /**
     * Replaces the entire configuration with the provided one.
     *
     * @param config - Full character configuration to load.
     * @returns `this` for chaining.
     */
    fromConfig(config) {
        this.seed = config.seed;
        this.gender = config.gender;
        this.mood = config.mood;
        this.face = { ...config.face };
        this.hair = { ...config.hair };
        this.accessories = { ...config.accessories };
        this.presentation = { ...config.presentation };
        return this;
    }
    /**
     * Deep-merges a partial configuration into the current state.
     * Only explicitly provided fields are overwritten; omitted fields are preserved.
     *
     * @param partial - Partial configuration patch.
     * @returns `this` for chaining.
     */
    fromPartialConfig(partial) {
        if (partial.seed !== undefined)
            this.seed = partial.seed;
        if (partial.gender !== undefined)
            this.gender = partial.gender;
        if (partial.mood !== undefined)
            this.mood = partial.mood;
        if (partial.face)
            this.face = deepMerge(this.face, partial.face);
        if (partial.hair)
            this.hair = deepMerge(this.hair, partial.hair);
        if (partial.accessories)
            this.accessories = deepMerge(this.accessories, partial.accessories);
        if (partial.presentation)
            this.presentation = deepMerge(this.presentation, partial.presentation);
        return this;
    }
    /**
     * Applies a partial patch to the current config. Only provided fields are overwritten.
     * Alias for {@link fromPartialConfig} that explicitly excludes `seed`.
     *
     * @param partial - Partial config patch (seed excluded).
     * @returns `this` for chaining.
     */
    patchConfig(partial) {
        return this.fromPartialConfig(partial);
    }
    /**
     * Returns a minimal diff between this factory and another.
     * Useful for animation or debugging.
     *
     * @param other - The factory to compare against.
     * @returns A `DeepPartial<CharacterConfig>` containing only the differing fields.
     */
    diff(other) {
        const a = this.getConfig();
        const b = other.getConfig();
        const result = {};
        function diffObj(src, tgt) {
            const d = {};
            let changed = false;
            for (const k of Object.keys(src)) {
                if (JSON.stringify(src[k]) !== JSON.stringify(tgt[k])) {
                    d[k] = tgt[k];
                    changed = true;
                }
            }
            return changed ? d : undefined;
        }
        if (a.seed !== b.seed)
            result.seed = b.seed;
        if (a.gender !== b.gender)
            result.gender = b.gender;
        if (a.mood !== b.mood)
            result.mood = b.mood;
        const fd = diffObj(a.face, b.face);
        if (fd)
            result.face = fd;
        const hd = diffObj(a.hair, b.hair);
        if (hd)
            result.hair = hd;
        const ad = diffObj(a.accessories, b.accessories);
        if (ad)
            result.accessories = ad;
        const pd = diffObj(a.presentation, b.presentation);
        if (pd)
            result.presentation = pd;
        return result;
    }
    /**
     * Applies another factory's configuration on top of this one (partial merge).
     *
     * @param other - Source factory to merge from.
     * @returns `this` for chaining.
     */
    merge(other) {
        return this.fromPartialConfig(other.getConfig());
    }
    /**
     * Creates an independent deep copy of this factory.
     *
     * @returns A new `CharacterFactory` with the same configuration.
     */
    clone() {
        return new CharacterFactory().fromConfig(this.getConfig());
    }
    // ── Seed ──────────────────────────────────────────────────────────────────
    /**
     * Overrides the current seed.
     *
     * @param v - New seed string.
     * @returns `this` for chaining.
     */
    setSeed(v) { this.seed = v; return this; }
    // ── Serialization ─────────────────────────────────────────────────────────
    /**
     * Serializes the current configuration to a pretty-printed JSON string.
     *
     * @returns JSON string representation of the config.
     */
    toJSON() { return JSON.stringify(this.getConfig(), null, 2); }
    /**
     * Serializes the current configuration to a Base64-encoded JSON string.
     *
     * @returns Base64 string representation of the config.
     */
    toBase64() {
        return Buffer.from(JSON.stringify(this.getConfig())).toString("base64");
    }
    /**
     * Restores a factory from a Base64-encoded JSON string produced by {@link toBase64}.
     *
     * @param b64 - Base64-encoded configuration string.
     * @returns A new `CharacterFactory` initialized from the decoded config.
     */
    static fromBase64(b64) {
        return new CharacterFactory().fromConfig(JSON.parse(Buffer.from(b64, "base64").toString("utf8")));
    }
    /**
     * Restores a factory from a JSON string produced by {@link toJSON}.
     *
     * @param json - JSON string representation of the config.
     * @returns A new `CharacterFactory` initialized from the parsed config.
     */
    static fromJSON(json) {
        return new CharacterFactory().fromConfig(JSON.parse(json));
    }
    /**
     * Loads a factory from a JSON file on disk produced by {@link saveConfig}.
     *
     * @param filePath - Path to the JSON file.
     * @returns A new `CharacterFactory` initialized from the file contents.
     */
    static fromFile(filePath) {
        return CharacterFactory.fromJSON(fs.readFileSync(filePath, "utf8"));
    }
    // ── FaceTraits ────────────────────────────────────────────────────────────
    /**
     * Returns a read-only snapshot of the current face traits.
     *
     * @returns Shallow copy of {@link FaceTraits}.
     */
    getFace() { return { ...this.face }; }
    /**
     * Replaces all face traits at once.
     *
     * @param traits - Full face traits object.
     * @returns `this` for chaining.
     */
    setFace(traits) { this.face = { ...traits }; return this; }
    /**
     * Partially patches face traits. Only provided fields are overwritten.
     *
     * @param partial - Partial face traits patch.
     * @returns `this` for chaining.
     */
    patchFace(partial) {
        this.face = deepMerge(this.face, partial);
        return this;
    }
    /**
     * Randomizes all face traits.
     * Respects the current gender pool for head shape, eyes, and mouth if gender is set.
     * If a mood is active, eyes and mouth are left untouched (mood takes priority).
     *
     * @returns `this` for chaining.
     */
    randomizeFace() {
        const gender = this.gender;
        if (gender) {
            const gPool = GENDER_POOLS[gender];
            this.face.headShape = pick(gPool.head);
            if (!this.mood) {
                this.face.eyes = pick(gPool.eyes);
                this.face.mouth = pick(gPool.mouth);
            }
        }
        else {
            this.face.headShape = pickEnum(HeadShape);
            if (!this.mood) {
                this.face.eyes = pickEnum(Eyes);
                this.face.mouth = pickEnum(Mouth);
            }
        }
        this.face.skinColor = pickEnum(SkinColor);
        this.face.eyesColor = pickEnum(EyeColor);
        this.face.eyebrows = pickEnum(Eyebrows);
        this.face.eyebrowsColor = pickEnum(HairColor);
        this.face.nose = pickEnum(Nose);
        return this;
    }
    // Individual face setters (compatibility shortcuts)
    /** @param v - Head shape to apply. @returns `this` for chaining. */
    setHeadShape(v) { this.face.headShape = v; return this; }
    /** @param v - Skin color (enum or hex). @returns `this` for chaining. */
    setSkinColor(v) { this.face.skinColor = v; return this; }
    /** @param v - Eye style. @returns `this` for chaining. */
    setEyes(v) { this.face.eyes = v; return this; }
    /** @param v - Iris color (enum or hex). @returns `this` for chaining. */
    setEyesColor(v) { this.face.eyesColor = v; return this; }
    /** @param v - Eyebrow style. @returns `this` for chaining. */
    setEyebrows(v) { this.face.eyebrows = v; return this; }
    /** @param v - Eyebrow color (enum or hex). @returns `this` for chaining. */
    setEyebrowsColor(v) { this.face.eyebrowsColor = v; return this; }
    /** @param v - Nose shape. @returns `this` for chaining. */
    setNose(v) { this.face.nose = v; return this; }
    /** @param v - Nose color (hex without `#`). @returns `this` for chaining. */
    setNoseColor(v) { this.face.noseColor = v; return this; }
    /** @param v - Mouth style. @returns `this` for chaining. */
    setMouth(v) { this.face.mouth = v; return this; }
    /** @param v - Mouth color (hex without `#`). @returns `this` for chaining. */
    setMouthColor(v) { this.face.mouthColor = v; return this; }
    // ── HairTraits ────────────────────────────────────────────────────────────
    /**
     * Returns a read-only snapshot of the current hair traits.
     *
     * @returns Shallow copy of {@link HairTraits}.
     */
    getHair() { return { ...this.hair }; }
    /**
     * Replaces all hair traits at once.
     *
     * @param traits - Full hair traits object.
     * @returns `this` for chaining.
     */
    setHair(traits) { this.hair = { ...traits }; return this; }
    /**
     * Partially patches hair traits. Only provided fields are overwritten.
     *
     * @param partial - Partial hair traits patch.
     * @returns `this` for chaining.
     */
    patchHair(partial) {
        this.hair = deepMerge(this.hair, partial);
        return this;
    }
    /**
     * Randomizes all hair traits.
     * Respects the current gender pool for hairstyle if gender is set.
     * Freckles appear with ~30% probability.
     *
     * @returns `this` for chaining.
     */
    randomizeHair() {
        if (this.gender) {
            this.hair.hair = pick(GENDER_POOLS[this.gender].hair);
        }
        else {
            this.hair.hair = pickEnum(Hair);
        }
        this.hair.hairColor = pickEnum(HairColor);
        this.hair.beard = pickEnum(Beard);
        this.hair.freckles = Math.random() > 0.7;
        return this;
    }
    /** @param v - Hairstyle. @returns `this` for chaining. */
    setHairStyle(v) { this.hair.hair = v; return this; }
    /** @param v - Hair color (enum or hex). @returns `this` for chaining. */
    setHairColor(v) { this.hair.hairColor = v; return this; }
    /** @param v - Beard style. @returns `this` for chaining. */
    setBeard(v) { this.hair.beard = v; return this; }
    /** @param v - Whether the character has freckles. @returns `this` for chaining. */
    setFreckles(v) { this.hair.freckles = v; return this; }
    /** @param v - Freckle color (hex without `#`). @returns `this` for chaining. */
    setFrecklesColor(v) { this.hair.frecklesColor = v; return this; }
    // ── AccessoryTraits ───────────────────────────────────────────────────────
    /**
     * Returns a read-only snapshot of the current accessory traits.
     *
     * @returns Shallow copy of {@link AccessoryTraits}.
     */
    getAccessories() { return { ...this.accessories }; }
    /**
     * Replaces all accessory traits at once.
     *
     * @param traits - Full accessory traits object.
     * @returns `this` for chaining.
     */
    setAccessories(traits) { this.accessories = { ...traits }; return this; }
    /**
     * Partially patches accessory traits. Only provided fields are overwritten.
     *
     * @param partial - Partial accessory traits patch.
     * @returns `this` for chaining.
     */
    patchAccessories(partial) {
        this.accessories = deepMerge(this.accessories, partial);
        return this;
    }
    /**
     * Randomizes all accessory traits (glasses, earrings, hair accessory).
     *
     * @returns `this` for chaining.
     */
    randomizeAccessories() {
        this.accessories.glasses = pickEnum(Glasses);
        this.accessories.earrings = pickEnum(Earrings);
        this.accessories.hairAccessory = pickEnum(HairAccessory);
        return this;
    }
    /**
     * Resets all accessories to their defaults (none).
     *
     * @returns `this` for chaining.
     */
    clearAccessories() { this.accessories = { ...DEFAULT_ACCESSORIES }; return this; }
    /** @param v - Glasses style. @returns `this` for chaining. */
    setGlasses(v) { this.accessories.glasses = v; return this; }
    /** @param v - Glasses frame color (hex without `#`). @returns `this` for chaining. */
    setGlassesColor(v) { this.accessories.glassesColor = v; return this; }
    /** @param v - Earring style. @returns `this` for chaining. */
    setEarrings(v) { this.accessories.earrings = v; return this; }
    /** @param v - Earring color (hex without `#`). @returns `this` for chaining. */
    setEarringsColor(v) { this.accessories.earringsColor = v; return this; }
    /** @param v - Hair accessory. @returns `this` for chaining. */
    setHairAccessory(v) { this.accessories.hairAccessory = v; return this; }
    /** @param v - Hair accessory color (hex without `#`). @returns `this` for chaining. */
    setHairAccessoryColor(v) { this.accessories.hairAccessoryColor = v; return this; }
    // ── Presentation ──────────────────────────────────────────────────────────
    /**
     * Returns a read-only snapshot of the current presentation settings.
     *
     * @returns Shallow copy of {@link Presentation}.
     */
    getPresentation() { return { ...this.presentation }; }
    /**
     * Replaces all presentation settings at once.
     *
     * @param p - Full presentation object.
     * @returns `this` for chaining.
     */
    setPresentation(p) { this.presentation = { ...p }; return this; }
    /**
     * Partially patches presentation settings. Only provided fields are overwritten.
     *
     * @param partial - Partial presentation patch.
     * @returns `this` for chaining.
     */
    patchPresentation(partial) {
        this.presentation = deepMerge(this.presentation, partial);
        return this;
    }
    /**
     * Randomizes the background color.
     *
     * @returns `this` for chaining.
     */
    randomizePresentation() {
        this.presentation.backgroundColor = pickEnum(BackgroundColor);
        return this;
    }
    /**
     * Sets the background color.
     *
     * @param v - Background color (enum value, hex string, or `"transparent"`).
     * @returns `this` for chaining.
     */
    setBackgroundColor(v) {
        this.presentation.backgroundColor = v;
        return this;
    }
    // ── Gender & Mood ─────────────────────────────────────────────────────────
    /**
     * Sets the character's gender and updates head shape, hairstyle, eyes, and mouth
     * from the corresponding gender pool.
     * Eyes and mouth are only updated if no mood is currently active.
     *
     * @param gender - Target gender.
     * @returns `this` for chaining.
     */
    setGender(gender) {
        const pool = GENDER_POOLS[gender];
        this.gender = gender;
        this.face.headShape = pick(pool.head);
        this.hair.hair = pick(pool.hair);
        if (!this.mood) {
            this.face.eyes = pick(pool.eyes);
            this.face.mouth = pick(pool.mouth);
        }
        return this;
    }
    /**
     * Sets gender-related visual traits explicitly without randomizing from a pool.
     *
     * @param head   - Explicit head shape.
     * @param hair   - Explicit hairstyle.
     * @param gender - Optional gender tag (does not trigger pool randomization).
     * @returns `this` for chaining.
     */
    setPreciseGender(head, hair, gender) {
        this.gender = gender;
        this.face.headShape = head;
        this.hair.hair = hair;
        return this;
    }
    /**
     * Applies a mood, updating eyes, eyebrows, and mouth from the mood pool.
     *
     * @param mood - Target mood.
     * @returns `this` for chaining.
     */
    setMood(mood) {
        const pool = MOOD_POOLS[mood];
        this.mood = mood;
        this.face.eyes = pick(pool.eyes);
        this.face.eyebrows = pick(pool.eyebrows);
        this.face.mouth = pick(pool.mouth);
        return this;
    }
    /**
     * Sets eyes, eyebrows, and mouth explicitly, clearing any active mood tag.
     *
     * @param eyes     - Explicit eye style.
     * @param eyebrows - Explicit eyebrow style.
     * @param mouth    - Explicit mouth style.
     * @returns `this` for chaining.
     */
    setPreciseMood(eyes, eyebrows, mouth) {
        this.mood = undefined;
        this.face.eyes = eyes;
        this.face.eyebrows = eyebrows;
        this.face.mouth = mouth;
        return this;
    }
    // ── Ethnicity / Country ───────────────────────────────────────────────────
    /**
     * Applies a coherent skin/hair/hairstyle/beard set from the given ethnicity.
     * Requires a gender to be set (used to pick the hairstyle sub-pool); falls back
     * to a coin-flip gender if none is set, and stores it.
     *
     * @param ethnicity - Target ethnicity.
     * @returns `this` for chaining.
     */
    setEthnicity(ethnicity) {
        const gender = this.gender ?? (Math.random() < 0.5 ? Gender.Male : Gender.Female);
        this.gender = gender;
        this.face.skinColor = pickSkinColor(ethnicity);
        this.hair.hairColor = pickHairColor(ethnicity);
        this.face.eyebrowsColor = this.hair.hairColor;
        this.hair.hair = pickHaircut(ethnicity, gender);
        this.hair.beard = gender === Gender.Female || !pickHasBeard(ethnicity)
            ? Beard.None
            : pickEnum(Beard);
        return this;
    }
    /**
     * Picks a random ethnicity weighted by the given country's demographics,
     * then applies it via {@link setEthnicity}.
     *
     * @param country - Target country.
     * @returns `this` for chaining.
     */
    setCountry(country) {
        return this.setEthnicity(pickEthnicity(country));
    }
    // ── Global randomize ──────────────────────────────────────────────────────
    /**
     * Fully randomizes all traits (face, hair, accessories, presentation, mood).
     * Mood is applied last so it correctly overrides eyes/eyebrows/mouth.
     *
     * @returns `this` for chaining.
     */
    randomize() {
        this.randomizeFace();
        this.randomizeHair();
        this.randomizeAccessories();
        this.randomizePresentation();
        this.setMood(pickEnum(Mood)); // mood last: overwrites eyes/eyebrows/mouth
        return this;
    }
    /**
     * Randomizes only appearance traits (face, hair, accessories) without touching mood or presentation.
     *
     * @returns `this` for chaining.
     */
    randomizeAppearance() {
        this.randomizeFace();
        this.randomizeHair();
        this.randomizeAccessories();
        return this;
    }
    /**
     * Picks a new random mood and applies it.
     *
     * @returns `this` for chaining.
     */
    randomizeMood() { this.setMood(pickEnum(Mood)); return this; }
    /**
     * Fully randomizes the character with traits coherent to the given country.
     * Picks a weighted ethnicity, applies coherent skin/hair/hairstyle/beard,
     * then randomizes the remaining traits (eyes, eyebrows, nose, mouth,
     * accessories, presentation, mood).
     *
     * @param country - Target country.
     * @param gender  - Optional forced gender (otherwise 50/50).
     * @returns `this` for chaining.
     */
    randomizeFromCountry(country, gender) {
        this.gender = gender ?? (Math.random() < 0.5 ? Gender.Male : Gender.Female);
        const ethnicity = pickEthnicity(country);
        this.setEthnicity(ethnicity);
        // Face — eyes/eyebrows/nose randomized; skin already set by setEthnicity.
        const gPool = GENDER_POOLS[this.gender];
        this.face.headShape = pick(gPool.head);
        this.face.eyes = pickEnum(Eyes);
        this.face.eyesColor = pickEnum(EyeColor);
        this.face.eyebrows = pickEnum(Eyebrows);
        this.face.nose = pickEnum(Nose);
        // Accessories + presentation
        this.randomizeAccessories();
        this.randomizePresentation();
        // Mood last (overrides eyes/eyebrows/mouth)
        this.setMood(pickEnum(Mood));
        return this;
    }
    // ─────────────────────────────────────────────────────────────────────────
    // GENETICS — projectChild
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Simulates genetic inheritance between `this` (parent A) and `partner` (parent B),
     * returning a new factory representing their child.
     *
     * **Biological traits with real dominance/recessiveness:**
     * - Skin tone        : darker dominant over lighter (`SKIN_DOMINANCE_ORDER`)
     * - Eye color        : black/brown > green/hazel > gray/blue (`EYE_DOMINANCE_ORDER`)
     * - Hair color       : black > brown > red/auburn > blonde (`HAIR_DOMINANCE_ORDER`)
     *   → fantasy colors (PastelPink, Lilac…) are outside the order → 50/50
     * - Freckles         : recessive MC1R (75% if both parents have them, 25% if one)
     * - Beard            : SRY-linked, removed if child is Female
     *
     * **Morphological traits (50/50 with light modeling):**
     * - Head shape       : Angular slightly recessive
     * - Nose             : Wide/Strong slightly dominant
     * - Eyes/mouth/eyebrows: 50/50 (not pigmentation-genetic)
     *
     * **Non-biological traits:**
     * - Hairstyle        : constrained to the child's gender pool
     * - Accessories      : reset to defaults (not inheritable)
     * - Mood             : re-randomized (or forced via options)
     * - Seed             : new by default (or forced)
     *
     * @param partner - The second parent's configuration.
     * @param options - Optionally force the child's gender, mood, or seed.
     * @returns A new `CharacterFactory` representing the child.
     */
    projectChild(partner, options = {}) {
        const A = this.getConfig();
        const B = partner;
        const childSeed = options.seed ?? crypto.randomBytes(8).toString("hex");
        const childGender = options.gender ?? (Math.random() < 0.5 ? Gender.Male : Gender.Female);
        // ── FaceTraits ────────────────────────────────────────────────────────
        const childFrecklePigment = inheritFrecklesColor(A.hair.freckles, A.hair.frecklesColor, B.hair.freckles, B.hair.frecklesColor);
        const childFace = {
            headShape: inheritHeadShape(A.face.headShape, B.face.headShape),
            skinColor: resolveByRank(A.face.skinColor, B.face.skinColor, SKIN_DOMINANCE_ORDER),
            eyes: coin(A.face.eyes, B.face.eyes),
            eyesColor: resolveByRank(A.face.eyesColor, B.face.eyesColor, EYE_DOMINANCE_ORDER),
            eyebrows: coin(A.face.eyebrows, B.face.eyebrows),
            // Eyebrows: color follows hair dominance (same pigmentation genes)
            eyebrowsColor: resolveByRank(A.face.eyebrowsColor, B.face.eyebrowsColor, HAIR_DOMINANCE_ORDER),
            nose: resolveByRank(A.face.nose, B.face.nose, NOSE_DOMINANCE_ORDER),
            noseColor: coin(A.face.noseColor, B.face.noseColor),
            mouth: coin(A.face.mouth, B.face.mouth),
            mouthColor: coin(A.face.mouthColor, B.face.mouthColor),
        };
        // ── HairTraits ────────────────────────────────────────────────────────
        const childFreckles = inheritFreckles(A.hair.freckles, B.hair.freckles);
        const childBeard = inheritBeard(A.hair.beard, B.hair.beard);
        const childHair = {
            hair: inheritHairStyle(A.hair.hair, B.hair.hair, childGender),
            hairColor: resolveByRank(A.hair.hairColor, B.hair.hairColor, HAIR_DOMINANCE_ORDER),
            beard: childGender === Gender.Female ? Beard.None : childBeard,
            freckles: childFreckles,
            frecklesColor: childFrecklePigment,
        };
        // ── Accessories: non-biological, reset to defaults ────────────────────
        const childAccessories = { ...DEFAULT_ACCESSORIES };
        // ── Presentation: 50/50 inheritance ───────────────────────────────────
        const childPresentation = {
            backgroundColor: coin(A.presentation.backgroundColor, B.presentation.backgroundColor),
        };
        // ── Assembly ──────────────────────────────────────────────────────────
        const child = new CharacterFactory(childSeed).fromConfig({
            seed: childSeed,
            gender: childGender,
            mood: undefined,
            face: childFace,
            hair: childHair,
            accessories: childAccessories,
            presentation: childPresentation,
        });
        // Gender head adjustment (re-pick from gender pool if inherited shape is incompatible)
        if (childGender) {
            const headPool = GENDER_POOLS[childGender].head;
            if (!headPool.includes(childFace.headShape)) {
                child.patchFace({ headShape: pick(headPool) });
            }
        }
        // Mood (random or forced)
        child.setMood(options.mood ?? pickEnum(Mood));
        return child;
    }
    // ─────────────────────────────────────────────────────────────────────────
    // BUILD DICEBEAR
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Maps the current config to a DiceBear options object.
     * Each trait is wrapped in an array; optional features use 100/0 probability flags.
     */
    toDiceBearOptions() {
        const f = this.face;
        const h = this.hair;
        const a = this.accessories;
        const p = this.presentation;
        return {
            seed: this.seed,
            head: [f.headShape],
            skinColor: [f.skinColor],
            eyes: [f.eyes],
            eyesColor: [f.eyesColor],
            eyebrows: [f.eyebrows],
            eyebrowsColor: [f.eyebrowsColor],
            nose: [f.nose],
            noseColor: [f.noseColor],
            mouth: [f.mouth],
            mouthColor: [f.mouthColor],
            hair: [h.hair],
            hairColor: [h.hairColor],
            hairAccessories: a.hairAccessory !== HairAccessory.None ? ["flowers"] : [],
            hairAccessoriesColor: [a.hairAccessoryColor],
            hairAccessoriesProbability: a.hairAccessory !== HairAccessory.None ? 100 : 0,
            beard: h.beard !== Beard.None ? [h.beard] : [],
            beardProbability: h.beard !== Beard.None ? 100 : 0,
            freckles: h.freckles ? ["variant01"] : [],
            frecklesColor: [h.frecklesColor],
            frecklesProbability: h.freckles ? 100 : 0,
            glasses: a.glasses !== Glasses.None ? [a.glasses] : [],
            glassesColor: [a.glassesColor],
            glassesProbability: a.glasses !== Glasses.None ? 100 : 0,
            earrings: a.earrings !== Earrings.None ? [a.earrings] : [],
            earringsColor: [a.earringsColor],
            earringsProbability: a.earrings !== Earrings.None ? 100 : 0,
            backgroundColor: [p.backgroundColor],
        };
    }
    /**
     * Renders the character as an SVG string.
     *
     * @returns SVG markup string.
     */
    buildSvg() {
        return createAvatar(lorelei, this.toDiceBearOptions()).toString();
    }
    /**
     * Renders the character as a PNG buffer.
     * Requires `sharp` to be installed (`npm install sharp`).
     *
     * @param size - Output image size in pixels (square). Defaults to `256`.
     * @returns PNG buffer.
     * @throws If `sharp` is not installed.
     */
    async buildPng(size = 256) {
        let sharp;
        try {
            sharp = (await import("sharp")).default;
        }
        catch (e) {
            throw new Error("Sharp is required to build PNG. Install it with `npm install sharp`. " +
                `Underlying error: ${e?.message ?? String(e)}`);
        }
        return sharp(Buffer.from(this.buildSvg())).resize(size, size).png().toBuffer();
    }
    /**
     * Renders and saves the character as an SVG file.
     * Parent directories are created automatically.
     *
     * @param filePath - Absolute or relative path to the output `.svg` file.
     */
    async saveSvg(filePath) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, this.buildSvg(), "utf8");
    }
    /**
     * Renders and saves the character as a PNG file.
     * Parent directories are created automatically.
     * Requires `sharp` to be installed.
     *
     * @param filePath - Absolute or relative path to the output `.png` file.
     * @param size     - Output image size in pixels (square). Defaults to `256`.
     */
    async savePng(filePath, size = 256) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, await this.buildPng(size));
    }
    /**
     * Serializes and saves the current configuration as a JSON file.
     * Parent directories are created automatically.
     *
     * @param filePath - Absolute or relative path to the output `.json` file.
     */
    saveConfig(filePath) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, this.toJSON(), "utf8");
    }
}
/**
 * Generates a batch of character PNG files from a base factory.
 *
 * Each character receives a unique seed derived from the base seed and its padded index.
 * A `metadata.json` file listing all generated entries is written to `outputDir`.
 *
 * @param factory    - Base factory used as the starting point for each character.
 * @param options    - Batch configuration:
 *   - `count`        : Number of characters to generate.
 *   - `outputDir`    : Directory where files are saved (created if missing).
 *   - `size`         : PNG size in pixels. Defaults to `256`.
 *   - `prefix`       : Filename prefix. Defaults to `"character"`.
 *   - `randomize`    : If `true`, each clone is fully randomized. Defaults to `false`.
 *   - `saveConfigs`  : If `true`, also saves a `.json` config file per character. Defaults to `false`.
 * @param onProgress - Optional callback invoked after each character is saved `(current, total)`.
 * @returns Array of {@link BatchResult} entries, one per generated character.
 */
export async function batchFactory(factory, options, onProgress) {
    const { count, outputDir, size = 256, prefix = "character", randomize = false, saveConfigs = false, concurrency = 4, } = options;
    fs.mkdirSync(outputDir, { recursive: true });
    const baseConfig = factory.getConfig();
    const pad = String(count).length;
    const results = new Array(count);
    let done = 0;
    let nextIndex = 0;
    const worker = async () => {
        while (true) {
            const i = nextIndex++;
            if (i >= count)
                return;
            const idx = i + 1;
            const padded = String(idx).padStart(pad, "0");
            const clone = factory.clone().setSeed(`${baseConfig.seed}-${padded}`);
            if (randomize)
                clone.randomize();
            const filePath = path.join(outputDir, `${prefix}-${padded}.png`);
            await clone.savePng(filePath, size);
            if (saveConfigs)
                clone.saveConfig(path.join(outputDir, `${prefix}-${padded}.json`));
            results[i] = { index: idx, filePath, config: clone.getConfig() };
            done++;
            onProgress?.(done, count);
        }
    };
    const workers = Array.from({ length: Math.max(1, Math.min(concurrency, count)) }, () => worker());
    await Promise.all(workers);
    fs.writeFileSync(path.join(outputDir, "metadata.json"), JSON.stringify(results.map(r => ({ index: r.index, file: path.basename(r.filePath), ...r.config })), null, 2), "utf8");
    return results;
}
