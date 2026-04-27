import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { BackgroundColor, Beard, Earrings, Eyebrows, EyeColor, Eyes, Gender, GENDER_POOLS, Glasses, Hair, HairAccessory, HairColor, HairFemale, HairMale, HairUnisex, HeadShape, Mood, MOOD_POOLS, Mouth, Nose, SkinColor } from "./lorelei-enums";
export function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
export function pickEnum(e) {
    return pick(Object.values(e));
}
function deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
        const srcVal = source[key];
        if (srcVal !== undefined) {
            if (typeof srcVal === "object" && !Array.isArray(srcVal) && srcVal !== null) {
                result[key] = deepMerge(result[key], srcVal);
            }
            else {
                result[key] = srcVal;
            }
        }
    }
    return result;
}
/** Tire un allèle depuis un porteur — porteur observé = forcément au moins un D. */
function drawAllele() {
    return Math.random() < 0.5 ? "D" : "R";
}
/** Combine deux allèles → "dominant" si au moins un D, "recessive" si RR. */
function combine(a, b) {
    return a === "D" || b === "D" ? "dominant" : "recessive";
}
/**
 * Résout le trait enfant depuis un ordre de dominance explicite.
 * L'index le plus élevé = le plus dominant.
 * Si la résolution donne "dominant" → on retourne le trait au rang le plus élevé.
 * Si "recessive"                   → on retourne le trait au rang le plus bas.
 */
function resolveByRank(a, b, order) {
    const idxA = order.indexOf(a);
    const idxB = order.indexOf(b);
    // Valeur inconnue (ex: couleur fantaisie hors ordre) → 50/50
    if (idxA === -1 || idxB === -1)
        return Math.random() < 0.5 ? a : b;
    const dominantVal = idxA >= idxB ? a : b;
    const recessiveVal = idxA <= idxB ? a : b;
    const result = combine(drawAllele(), drawAllele());
    return result === "dominant" ? dominantVal : recessiveVal;
}
/** Pour les traits sans ordre biologique clair : héritage 50/50. */
function coin(a, b) {
    return Math.random() < 0.5 ? a : b;
}
// ── Ordres de dominance (du plus récessif au plus dominant) ──────────────────
/**
 * Teinte de peau : foncé dominant sur clair.
 * Valeurs hex réelles de SkinColor, ordonnées du plus clair au plus foncé.
 */
const SKIN_DOMINANCE_ORDER = [
    SkinColor.Porcelain, // ffdbb4 — le plus clair / récessif
    SkinColor.Light, // edb98a
    SkinColor.Warm, // fd9841
    SkinColor.Medium, // d08b5b
    SkinColor.Tan, // ae5d29
    SkinColor.Brown, // 614335
    SkinColor.DarkBrown, // 4a312c
    SkinColor.Deep, // 2c1b18 — le plus foncé / dominant
];
/**
 * Couleur des yeux : noir/brun dominant, bleu récessif.
 * Source : génétique réelle (HERC2/OCA2).
 */
const EYE_DOMINANCE_ORDER = [
    EyeColor.LightBlue, // 6baed6 — récessif
    EyeColor.Blue, // 3b6fa0
    EyeColor.Gray, // 737373
    EyeColor.Green, // 3d6b34
    EyeColor.Hazel, // 8d6e63
    EyeColor.Amber, // b07c4d
    EyeColor.Brown, // 724133
    EyeColor.DarkBrown, // 4a312c
    EyeColor.Black, // 0a0a0a — dominant
];
/**
 * Couleur des cheveux naturels : foncé dominant.
 * Roux (Auburn/Red/Copper) = intermédiaire, mais récessif sur brun.
 * Source : MC1R pour le roux, TYRP1/OCA2 pour l'axe clair/foncé.
 *
 * Les couleurs fantaisie (PastelPink, HotPink, Lilac…) sont hors ordre ;
 * resolveByRank les traitera en 50/50 automatiquement.
 */
const HAIR_DOMINANCE_ORDER = [
    HairColor.LightBlonde, // récessif
    HairColor.GoldenBlonde,
    HairColor.HoneyBlonde,
    HairColor.Auburn, // roux — récessif sur brun mais dominant sur blond
    HairColor.Red,
    HairColor.Copper,
    HairColor.LightBrown,
    HairColor.Brown,
    HairColor.DarkBrown,
    HairColor.SoftBlack,
    HairColor.JetBlack, // dominant
    // White/Silver/Gray = vieillissement, hors ordre génétique de base
];
// ── Règles spécifiques ────────────────────────────────────────────────────────
/**
 * Taches de rousseur : récessif (MC1R).
 * Exprimées seulement si les deux parents sont porteurs (ou les ont).
 * P(enfant a des taches) = 75% si les deux en ont, 25% si un seul.
 */
function inheritFreckles(a, b) {
    if (a && b)
        return Math.random() < 0.75;
    if (a || b)
        return Math.random() < 0.25;
    return false;
}
/**
 * Couleur des taches : héritée du parent qui les a.
 * Si les deux en ont, on mélange via une interpolation hex simple.
 */
function inheritFrecklesColor(aHas, aColor, bHas, bColor) {
    if (aHas && bHas) {
        // Mélange hex perceptuel simple
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
    return "c9734a"; // default
}
/**
 * Barbe : lié au gène SRY (chromosome Y) + polygénique.
 * - Deux parents avec barbe → 75% de chance
 * - Un seul parent avec barbe → 30% de chance (porteur potentiel)
 * - Zéro → aucune
 * La barbe est ensuite retirée si le genre de l'enfant est Female.
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
    // Style de barbe hérité du parent barbu
    const candidates = [a, b].filter(v => v !== Beard.None);
    return pick(candidates);
}
/**
 * Coiffure : non biologique (choix culturel), mais on contraint au pool
 * du genre de l'enfant. On tente de conserver la "texture" (ondulé, bouclé…)
 * en cherchant un équivalent dans le pool cible.
 */
function inheritHairStyle(a, b, childGender) {
    const base = coin(a, b);
    if (!childGender)
        return base;
    const pool = childGender === Gender.Female ? HairFemale :
        childGender === Gender.Male ? HairMale :
            [...HairFemale, ...HairMale, ...HairUnisex];
    // Si le style hérité est déjà compatible → on le garde
    if (pool.includes(base))
        return base;
    // Sinon on pioche dans le pool genre
    return pick(pool);
}
/**
 * Forme de tête : ni totalement libre ni strictement dominante.
 * Ici on modélise via un biais léger : Oval et Round ont tendance à s'exprimer
 * ensemble plus souvent qu'Angular, mais c'est surtout du 50/50.
 */
function inheritHeadShape(a, b) {
    // Standard et Round sont "neutres", Angular est rare → léger biais si l'un est Angular
    if (a === b)
        return a;
    if (a === HeadShape.Angular || b === HeadShape.Angular) {
        return Math.random() < 0.40 ? HeadShape.Angular : coin(a === HeadShape.Angular ? b : a, HeadShape.Standard);
    }
    return coin(a, b);
}
/**
 * Forme du nez : Wide tend à être dominant sur Button et Soft.
 * Strong est dominant sur Pointed. Le reste est 50/50.
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
export class CharacterFactory {
    seed;
    gender;
    mood;
    face;
    hair;
    accessories;
    presentation;
    constructor(seed) {
        this.seed = seed ?? crypto.randomBytes(8).toString("hex");
        this.face = { ...DEFAULT_FACE };
        this.hair = { ...DEFAULT_HAIR };
        this.accessories = { ...DEFAULT_ACCESSORIES };
        this.presentation = { ...DEFAULT_PRESENTATION };
    }
    // ── Config globale ────────────────────────────────────────────────────────
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
    /** Fusionne un patch partiel dans la config courante. Seuls les champs fournis sont écrasés. */
    patchConfig(partial) {
        return this.fromPartialConfig(partial);
    }
    /**
     * Retourne un diff minimal entre cette factory et une autre.
     * Utile pour l'animation ou le debug.
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
    /** Applique la config d'une autre factory par-dessus la sienne. */
    merge(other) {
        return this.fromPartialConfig(other.getConfig());
    }
    clone() {
        return new CharacterFactory().fromConfig(this.getConfig());
    }
    // ── Seed ──────────────────────────────────────────────────────────────────
    setSeed(v) { this.seed = v; return this; }
    // ── Sérialisation ─────────────────────────────────────────────────────────
    toJSON() { return JSON.stringify(this.getConfig(), null, 2); }
    toBase64() {
        return Buffer.from(JSON.stringify(this.getConfig())).toString("base64");
    }
    static fromBase64(b64) {
        return new CharacterFactory().fromConfig(JSON.parse(Buffer.from(b64, "base64").toString("utf8")));
    }
    // ── FaceTraits ────────────────────────────────────────────────────────────
    getFace() { return { ...this.face }; }
    setFace(traits) { this.face = { ...traits }; return this; }
    patchFace(partial) {
        this.face = deepMerge(this.face, partial);
        return this;
    }
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
    // Raccourcis unitaires (compatibilité)
    setHeadShape(v) { this.face.headShape = v; return this; }
    setSkinColor(v) { this.face.skinColor = v; return this; }
    setEyes(v) { this.face.eyes = v; return this; }
    setEyesColor(v) { this.face.eyesColor = v; return this; }
    setEyebrows(v) { this.face.eyebrows = v; return this; }
    setEyebrowsColor(v) { this.face.eyebrowsColor = v; return this; }
    setNose(v) { this.face.nose = v; return this; }
    setNoseColor(v) { this.face.noseColor = v; return this; }
    setMouth(v) { this.face.mouth = v; return this; }
    setMouthColor(v) { this.face.mouthColor = v; return this; }
    // ── HairTraits ────────────────────────────────────────────────────────────
    getHair() { return { ...this.hair }; }
    setHair(traits) { this.hair = { ...traits }; return this; }
    patchHair(partial) {
        this.hair = deepMerge(this.hair, partial);
        return this;
    }
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
    setHairStyle(v) { this.hair.hair = v; return this; }
    setHairColor(v) { this.hair.hairColor = v; return this; }
    setBeard(v) { this.hair.beard = v; return this; }
    setFreckles(v) { this.hair.freckles = v; return this; }
    setFrecklesColor(v) { this.hair.frecklesColor = v; return this; }
    // ── AccessoryTraits ───────────────────────────────────────────────────────
    getAccessories() { return { ...this.accessories }; }
    setAccessories(traits) { this.accessories = { ...traits }; return this; }
    patchAccessories(partial) {
        this.accessories = deepMerge(this.accessories, partial);
        return this;
    }
    randomizeAccessories() {
        this.accessories.glasses = pickEnum(Glasses);
        this.accessories.earrings = pickEnum(Earrings);
        this.accessories.hairAccessory = pickEnum(HairAccessory);
        return this;
    }
    clearAccessories() { this.accessories = { ...DEFAULT_ACCESSORIES }; return this; }
    setGlasses(v) { this.accessories.glasses = v; return this; }
    setGlassesColor(v) { this.accessories.glassesColor = v; return this; }
    setEarrings(v) { this.accessories.earrings = v; return this; }
    setEarringsColor(v) { this.accessories.earringsColor = v; return this; }
    setHairAccessory(v) { this.accessories.hairAccessory = v; return this; }
    setHairAccessoryColor(v) { this.accessories.hairAccessoryColor = v; return this; }
    // ── Presentation ──────────────────────────────────────────────────────────
    getPresentation() { return { ...this.presentation }; }
    setPresentation(p) { this.presentation = { ...p }; return this; }
    patchPresentation(partial) {
        this.presentation = deepMerge(this.presentation, partial);
        return this;
    }
    randomizePresentation() {
        this.presentation.backgroundColor = pickEnum(BackgroundColor);
        return this;
    }
    setBackgroundColor(v) {
        this.presentation.backgroundColor = v;
        return this;
    }
    // ── Genre & Mood ──────────────────────────────────────────────────────────
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
    setPreciseGender(head, hair, gender) {
        this.gender = gender;
        this.face.headShape = head;
        this.hair.hair = hair;
        return this;
    }
    setMood(mood) {
        const pool = MOOD_POOLS[mood];
        this.mood = mood;
        this.face.eyes = pick(pool.eyes);
        this.face.eyebrows = pick(pool.eyebrows);
        this.face.mouth = pick(pool.mouth);
        return this;
    }
    setPreciseMood(eyes, eyebrows, mouth) {
        this.mood = undefined;
        this.face.eyes = eyes;
        this.face.eyebrows = eyebrows;
        this.face.mouth = mouth;
        return this;
    }
    // ── Randomize global ──────────────────────────────────────────────────────
    randomize() {
        this.randomizeFace();
        this.randomizeHair();
        this.randomizeAccessories();
        this.randomizePresentation();
        this.setMood(pickEnum(Mood)); // mood en dernier : écrase eyes/eyebrows/mouth
        return this;
    }
    randomizeAppearance() {
        this.randomizeFace();
        this.randomizeHair();
        this.randomizeAccessories();
        return this;
    }
    randomizeMood() { this.setMood(pickEnum(Mood)); return this; }
    // ─────────────────────────────────────────────────────────────────────────
    // GENETICS — projectChild
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Simule la transmission génétique entre `this` (parent A) et `partner` (parent B).
     *
     * Traits biologiques avec dominance/récessivité réelle :
     *   - Teint           : foncé dominant sur clair (SKIN_DOMINANCE_ORDER)
     *   - Couleur des yeux: noir/brun > vert/noisette > gris/bleu (EYE_DOMINANCE_ORDER)
     *   - Couleur cheveux : noir > brun > roux > blond (HAIR_DOMINANCE_ORDER)
     *     → les couleurs fantaisie (PastelPink, Lilac…) sont hors ordre → 50/50
     *   - Taches de rousseur : récessif MC1R (75 % si les deux, 25 % si un seul)
     *   - Barbe           : lié à SRY, retirée si enfant féminin
     *
     * Traits morphologiques (50/50 avec légère modélisation) :
     *   - Forme de tête   : Angular légèrement récessif
     *   - Nez             : Wide/Strong légèrement dominants
     *   - Yeux/bouche/sourcils : 50/50 (non biologiques au sens couleur)
     *
     * Traits non biologiques :
     *   - Coiffure        : contrainte au pool du genre de l'enfant
     *   - Accessoires     : remis aux defaults (non héritables)
     *   - Mood            : regénéré aléatoirement (ou forcé via options)
     *   - Seed            : nouveau par défaut (ou forcé)
     *
     * @param partner   Config du second parent
     * @param options   Forcer le genre, le mood ou la seed de l'enfant
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
            // Sourcils : couleur suit la dominance capillaire (même gènes pigmentaires)
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
        // ── Accessoires : non biologiques ─────────────────────────────────────
        const childAccessories = { ...DEFAULT_ACCESSORIES };
        // ── Présentation : héritage 50/50 ─────────────────────────────────────
        const childPresentation = {
            backgroundColor: coin(A.presentation.backgroundColor, B.presentation.backgroundColor),
        };
        // ── Assemblage ────────────────────────────────────────────────────────
        const child = new CharacterFactory(childSeed).fromConfig({
            seed: childSeed,
            gender: childGender,
            mood: undefined,
            face: childFace,
            hair: childHair,
            accessories: childAccessories,
            presentation: childPresentation,
        });
        // Ajustement genre sur la tête (pool genre si pas déjà compatible)
        if (childGender) {
            const headPool = GENDER_POOLS[childGender].head;
            if (!headPool.includes(childFace.headShape)) {
                child.patchFace({ headShape: pick(headPool) });
            }
        }
        // Mood (aléatoire ou forcé)
        child.setMood(options.mood ?? pickEnum(Mood));
        return child;
    }
    // ─────────────────────────────────────────────────────────────────────────
    // BUILD DICEBEAR
    // ─────────────────────────────────────────────────────────────────────────
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
    buildSvg() {
        return createAvatar(lorelei, this.toDiceBearOptions()).toString();
    }
    async buildPng(size = 256) {
        try {
            const sharp = (await import("sharp")).default;
            return sharp(Buffer.from(this.buildSvg())).resize(size, size).png().toBuffer();
        }
        catch (_e) {
            throw new Error("Sharp is required to build PNG. Please install it with `npm install sharp` or with your favorite package installer.");
        }
    }
    async saveSvg(filePath) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, this.buildSvg(), "utf8");
    }
    async savePng(filePath, size = 256) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, await this.buildPng(size));
    }
    saveConfig(filePath) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, this.toJSON(), "utf8");
    }
}
export async function batchFactory(factory, options, onProgress) {
    const { count, outputDir, size = 256, prefix = "character", randomize = false, saveConfigs = false, } = options;
    fs.mkdirSync(outputDir, { recursive: true });
    const results = [];
    const baseConfig = factory.getConfig();
    const pad = String(count).length;
    for (let i = 0; i < count; i++) {
        const idx = i + 1;
        const padded = String(idx).padStart(pad, "0");
        const clone = factory.clone().setSeed(`${baseConfig.seed}-${padded}`);
        if (randomize)
            clone.randomize();
        const filePath = path.join(outputDir, `${prefix}-${padded}.png`);
        await clone.savePng(filePath, size);
        if (saveConfigs)
            clone.saveConfig(path.join(outputDir, `${prefix}-${padded}.json`));
        results.push({ index: idx, filePath, config: clone.getConfig() });
        onProgress?.(idx, count);
    }
    fs.writeFileSync(path.join(outputDir, "metadata.json"), JSON.stringify(results.map(r => ({ index: r.index, file: path.basename(r.filePath), ...r.config })), null, 2), "utf8");
    return results;
}
