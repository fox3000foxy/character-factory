import { type Country, type Ethnicity } from "./lorelei-ethnicity";
import { Gender } from "./lorelei-gender";
import { Mood } from "./lorelei-mood";
import { BackgroundColor, Beard, Earrings, Eyebrows, EyeColor, Eyes, Glasses, Hair, HairAccessory, HairColor, HeadShape, Mouth, Nose, SkinColor } from "./lorelei-traits";
/** Recursively makes every property of `T` optional. */
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
/**
 * Returns a uniformly random element from an array.
 *
 * @param arr - Non-empty source array.
 * @returns A randomly selected element.
 * @throws {RangeError} If `arr` is empty.
 */
export declare function pick<T>(arr: readonly T[]): T;
/**
 * Returns a uniformly random value from a TypeScript enum.
 *
 * @param e - The enum object (`Record<string, T>`).
 * @returns A randomly selected enum value.
 */
export declare function pickEnum<T>(e: Record<string, T>): T;
/**
 * Facial traits: bone structure, skin tone, eyes, eyebrows, nose, and mouth.
 * Tightly coupled to mood and gender.
 */
export interface FaceTraits {
    /** Overall skull shape (oval, angular, etc.). */
    headShape: HeadShape;
    /** Skin tone — enum value or raw hex string. */
    skinColor: SkinColor | string;
    /** Eye style (shape, openness). */
    eyes: Eyes;
    /** Iris color — enum value or raw hex string. */
    eyesColor: EyeColor | string;
    /** Eyebrow style. */
    eyebrows: Eyebrows;
    /** Eyebrow color — typically follows hair color. */
    eyebrowsColor: HairColor | string;
    /** Nose shape. */
    nose: Nose;
    /** Nose color (hex without `#`, typically `"000000"`). */
    noseColor: string;
    /** Mouth shape / expression. */
    mouth: Mouth;
    /** Mouth color (hex without `#`). */
    mouthColor: string;
}
/**
 * Hair and skin traits: hairstyle, beard, freckles.
 * These are biological traits, distinct from worn accessories.
 */
export interface HairTraits {
    /** Selected hairstyle. */
    hair: Hair;
    /** Hair color — enum value or raw hex string. */
    hairColor: HairColor | string;
    /** Beard style (`Beard.None` = no beard). */
    beard: Beard;
    /** Whether the character has freckles. */
    freckles: boolean;
    /** Freckle color (hex without `#`). */
    frecklesColor: string;
}
/**
 * Worn accessories: glasses, earrings, hair accessory.
 * These are styled objects, not biological traits.
 */
export interface AccessoryTraits {
    /** Glasses style (`Glasses.None` = none). */
    glasses: Glasses;
    /** Glasses frame color (hex without `#`). */
    glassesColor: string;
    /** Earring style (`Earrings.None` = none). */
    earrings: Earrings;
    /** Earring color (hex without `#`). */
    earringsColor: string;
    /** Hair accessory (`HairAccessory.None` = none). */
    hairAccessory: HairAccessory;
    /** Hair accessory color (hex without `#`). */
    hairAccessoryColor: string;
}
/**
 * Rendering parameters: background color and future extensions (pattern, scale, etc.).
 */
export interface Presentation {
    /** Background color or `"transparent"`. */
    backgroundColor: BackgroundColor | string;
}
/**
 * Full configuration for a Lorelei character.
 * Used as both a data schema and the input for {@link CharacterFactory}.
 */
export interface CharacterConfig {
    /** Deterministic seed passed to DiceBear. */
    seed: string;
    /** Character gender (optional — influences shape/hairstyle pools). */
    gender?: Gender;
    /** Current mood (optional — overrides eyes/eyebrows/mouth when set). */
    mood?: Mood;
    /** Facial traits. */
    face: FaceTraits;
    /** Hair traits. */
    hair: HairTraits;
    /** Worn accessories. */
    accessories: AccessoryTraits;
    /** Rendering parameters. */
    presentation: Presentation;
}
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
export declare class CharacterFactory {
    private seed;
    private gender?;
    private mood?;
    private face;
    private hair;
    private accessories;
    private presentation;
    /**
     * @param seed - Optional deterministic seed. Defaults to a random 8-byte hex string.
     */
    constructor(seed?: string);
    /**
     * Returns a read-only snapshot of the current configuration.
     * All sub-objects are shallow-copied so external mutations don't leak back.
     */
    getConfig(): Readonly<CharacterConfig>;
    /**
     * Replaces the entire configuration with the provided one.
     *
     * @param config - Full character configuration to load.
     * @returns `this` for chaining.
     */
    fromConfig(config: CharacterConfig): this;
    /**
     * Deep-merges a partial configuration into the current state.
     * Only explicitly provided fields are overwritten; omitted fields are preserved.
     *
     * @param partial - Partial configuration patch.
     * @returns `this` for chaining.
     */
    fromPartialConfig(partial: DeepPartial<CharacterConfig>): this;
    /**
     * Applies a partial patch to the current config. Only provided fields are overwritten.
     * Alias for {@link fromPartialConfig} that explicitly excludes `seed`.
     *
     * @param partial - Partial config patch (seed excluded).
     * @returns `this` for chaining.
     */
    patchConfig(partial: DeepPartial<Omit<CharacterConfig, "seed">>): this;
    /**
     * Returns a minimal diff between this factory and another.
     * Useful for animation or debugging.
     *
     * @param other - The factory to compare against.
     * @returns A `DeepPartial<CharacterConfig>` containing only the differing fields.
     */
    diff(other: CharacterFactory): DeepPartial<CharacterConfig>;
    /**
     * Applies another factory's configuration on top of this one (partial merge).
     *
     * @param other - Source factory to merge from.
     * @returns `this` for chaining.
     */
    merge(other: CharacterFactory): this;
    /**
     * Creates an independent deep copy of this factory.
     *
     * @returns A new `CharacterFactory` with the same configuration.
     */
    clone(): CharacterFactory;
    /**
     * Overrides the current seed.
     *
     * @param v - New seed string.
     * @returns `this` for chaining.
     */
    setSeed(v: string): this;
    /**
     * Serializes the current configuration to a pretty-printed JSON string.
     *
     * @returns JSON string representation of the config.
     */
    toJSON(): string;
    /**
     * Serializes the current configuration to a Base64-encoded JSON string.
     *
     * @returns Base64 string representation of the config.
     */
    toBase64(): string;
    /**
     * Restores a factory from a Base64-encoded JSON string produced by {@link toBase64}.
     *
     * @param b64 - Base64-encoded configuration string.
     * @returns A new `CharacterFactory` initialized from the decoded config.
     */
    static fromBase64(b64: string): CharacterFactory;
    /**
     * Restores a factory from a JSON string produced by {@link toJSON}.
     *
     * @param json - JSON string representation of the config.
     * @returns A new `CharacterFactory` initialized from the parsed config.
     */
    static fromJSON(json: string): CharacterFactory;
    /**
     * Loads a factory from a JSON file on disk produced by {@link saveConfig}.
     *
     * @param filePath - Path to the JSON file.
     * @returns A new `CharacterFactory` initialized from the file contents.
     */
    static fromFile(filePath: string): CharacterFactory;
    /**
     * Returns a read-only snapshot of the current face traits.
     *
     * @returns Shallow copy of {@link FaceTraits}.
     */
    getFace(): Readonly<FaceTraits>;
    /**
     * Replaces all face traits at once.
     *
     * @param traits - Full face traits object.
     * @returns `this` for chaining.
     */
    setFace(traits: FaceTraits): this;
    /**
     * Partially patches face traits. Only provided fields are overwritten.
     *
     * @param partial - Partial face traits patch.
     * @returns `this` for chaining.
     */
    patchFace(partial: DeepPartial<FaceTraits>): this;
    /**
     * Randomizes all face traits.
     * Respects the current gender pool for head shape, eyes, and mouth if gender is set.
     * If a mood is active, eyes and mouth are left untouched (mood takes priority).
     *
     * @returns `this` for chaining.
     */
    randomizeFace(): this;
    /** @param v - Head shape to apply. @returns `this` for chaining. */
    setHeadShape(v: HeadShape): this;
    /** @param v - Skin color (enum or hex). @returns `this` for chaining. */
    setSkinColor(v: SkinColor | string): this;
    /** @param v - Eye style. @returns `this` for chaining. */
    setEyes(v: Eyes): this;
    /** @param v - Iris color (enum or hex). @returns `this` for chaining. */
    setEyesColor(v: EyeColor | string): this;
    /** @param v - Eyebrow style. @returns `this` for chaining. */
    setEyebrows(v: Eyebrows): this;
    /** @param v - Eyebrow color (enum or hex). @returns `this` for chaining. */
    setEyebrowsColor(v: HairColor | string): this;
    /** @param v - Nose shape. @returns `this` for chaining. */
    setNose(v: Nose): this;
    /** @param v - Nose color (hex without `#`). @returns `this` for chaining. */
    setNoseColor(v: string): this;
    /** @param v - Mouth style. @returns `this` for chaining. */
    setMouth(v: Mouth): this;
    /** @param v - Mouth color (hex without `#`). @returns `this` for chaining. */
    setMouthColor(v: string): this;
    /**
     * Returns a read-only snapshot of the current hair traits.
     *
     * @returns Shallow copy of {@link HairTraits}.
     */
    getHair(): Readonly<HairTraits>;
    /**
     * Replaces all hair traits at once.
     *
     * @param traits - Full hair traits object.
     * @returns `this` for chaining.
     */
    setHair(traits: HairTraits): this;
    /**
     * Partially patches hair traits. Only provided fields are overwritten.
     *
     * @param partial - Partial hair traits patch.
     * @returns `this` for chaining.
     */
    patchHair(partial: DeepPartial<HairTraits>): this;
    /**
     * Randomizes all hair traits.
     * Respects the current gender pool for hairstyle if gender is set.
     * Freckles appear with ~30% probability.
     *
     * @returns `this` for chaining.
     */
    randomizeHair(): this;
    /** @param v - Hairstyle. @returns `this` for chaining. */
    setHairStyle(v: Hair): this;
    /** @param v - Hair color (enum or hex). @returns `this` for chaining. */
    setHairColor(v: HairColor | string): this;
    /** @param v - Beard style. @returns `this` for chaining. */
    setBeard(v: Beard): this;
    /** @param v - Whether the character has freckles. @returns `this` for chaining. */
    setFreckles(v: boolean): this;
    /** @param v - Freckle color (hex without `#`). @returns `this` for chaining. */
    setFrecklesColor(v: string): this;
    /**
     * Returns a read-only snapshot of the current accessory traits.
     *
     * @returns Shallow copy of {@link AccessoryTraits}.
     */
    getAccessories(): Readonly<AccessoryTraits>;
    /**
     * Replaces all accessory traits at once.
     *
     * @param traits - Full accessory traits object.
     * @returns `this` for chaining.
     */
    setAccessories(traits: AccessoryTraits): this;
    /**
     * Partially patches accessory traits. Only provided fields are overwritten.
     *
     * @param partial - Partial accessory traits patch.
     * @returns `this` for chaining.
     */
    patchAccessories(partial: DeepPartial<AccessoryTraits>): this;
    /**
     * Randomizes all accessory traits (glasses, earrings, hair accessory).
     *
     * @returns `this` for chaining.
     */
    randomizeAccessories(): this;
    /**
     * Resets all accessories to their defaults (none).
     *
     * @returns `this` for chaining.
     */
    clearAccessories(): this;
    /** @param v - Glasses style. @returns `this` for chaining. */
    setGlasses(v: Glasses): this;
    /** @param v - Glasses frame color (hex without `#`). @returns `this` for chaining. */
    setGlassesColor(v: string): this;
    /** @param v - Earring style. @returns `this` for chaining. */
    setEarrings(v: Earrings): this;
    /** @param v - Earring color (hex without `#`). @returns `this` for chaining. */
    setEarringsColor(v: string): this;
    /** @param v - Hair accessory. @returns `this` for chaining. */
    setHairAccessory(v: HairAccessory): this;
    /** @param v - Hair accessory color (hex without `#`). @returns `this` for chaining. */
    setHairAccessoryColor(v: string): this;
    /**
     * Returns a read-only snapshot of the current presentation settings.
     *
     * @returns Shallow copy of {@link Presentation}.
     */
    getPresentation(): Readonly<Presentation>;
    /**
     * Replaces all presentation settings at once.
     *
     * @param p - Full presentation object.
     * @returns `this` for chaining.
     */
    setPresentation(p: Presentation): this;
    /**
     * Partially patches presentation settings. Only provided fields are overwritten.
     *
     * @param partial - Partial presentation patch.
     * @returns `this` for chaining.
     */
    patchPresentation(partial: DeepPartial<Presentation>): this;
    /**
     * Randomizes the background color.
     *
     * @returns `this` for chaining.
     */
    randomizePresentation(): this;
    /**
     * Sets the background color.
     *
     * @param v - Background color (enum value, hex string, or `"transparent"`).
     * @returns `this` for chaining.
     */
    setBackgroundColor(v: BackgroundColor | string): this;
    /**
     * Sets the character's gender and updates head shape, hairstyle, eyes, and mouth
     * from the corresponding gender pool.
     * Eyes and mouth are only updated if no mood is currently active.
     *
     * @param gender - Target gender.
     * @returns `this` for chaining.
     */
    setGender(gender: Gender): this;
    /**
     * Sets gender-related visual traits explicitly without randomizing from a pool.
     *
     * @param head   - Explicit head shape.
     * @param hair   - Explicit hairstyle.
     * @param gender - Optional gender tag (does not trigger pool randomization).
     * @returns `this` for chaining.
     */
    setPreciseGender(head: HeadShape, hair: Hair, gender?: Gender): this;
    /**
     * Applies a mood, updating eyes, eyebrows, and mouth from the mood pool.
     *
     * @param mood - Target mood.
     * @returns `this` for chaining.
     */
    setMood(mood: Mood): this;
    /**
     * Sets eyes, eyebrows, and mouth explicitly, clearing any active mood tag.
     *
     * @param eyes     - Explicit eye style.
     * @param eyebrows - Explicit eyebrow style.
     * @param mouth    - Explicit mouth style.
     * @returns `this` for chaining.
     */
    setPreciseMood(eyes: Eyes, eyebrows: Eyebrows, mouth: Mouth): this;
    /**
     * Applies a coherent skin/hair/hairstyle/beard set from the given ethnicity.
     * Requires a gender to be set (used to pick the hairstyle sub-pool); falls back
     * to a coin-flip gender if none is set, and stores it.
     *
     * @param ethnicity - Target ethnicity.
     * @returns `this` for chaining.
     */
    setEthnicity(ethnicity: Ethnicity): this;
    /**
     * Picks a random ethnicity weighted by the given country's demographics,
     * then applies it via {@link setEthnicity}.
     *
     * @param country - Target country.
     * @returns `this` for chaining.
     */
    setCountry(country: Country): this;
    /**
     * Fully randomizes all traits (face, hair, accessories, presentation, mood).
     * Mood is applied last so it correctly overrides eyes/eyebrows/mouth.
     *
     * @returns `this` for chaining.
     */
    randomize(): this;
    /**
     * Randomizes only appearance traits (face, hair, accessories) without touching mood or presentation.
     *
     * @returns `this` for chaining.
     */
    randomizeAppearance(): this;
    /**
     * Picks a new random mood and applies it.
     *
     * @returns `this` for chaining.
     */
    randomizeMood(): this;
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
    randomizeFromCountry(country: Country, gender?: Gender): this;
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
    projectChild(partner: CharacterConfig, options?: {
        gender?: Gender;
        mood?: Mood;
        seed?: string;
    }): CharacterFactory;
    /**
     * Maps the current config to a DiceBear options object.
     * Each trait is wrapped in an array; optional features use 100/0 probability flags.
     */
    private toDiceBearOptions;
    /**
     * Renders the character as an SVG string.
     *
     * @returns SVG markup string.
     */
    buildSvg(): string;
    /**
     * Renders the character as a PNG buffer.
     * Requires `sharp` to be installed (`npm install sharp`).
     *
     * @param size - Output image size in pixels (square). Defaults to `256`.
     * @returns PNG buffer.
     * @throws If `sharp` is not installed.
     */
    buildPng(size?: number): Promise<Buffer>;
    /**
     * Renders and saves the character as an SVG file.
     * Parent directories are created automatically.
     *
     * @param filePath - Absolute or relative path to the output `.svg` file.
     */
    saveSvg(filePath: string): Promise<void>;
    /**
     * Renders and saves the character as a PNG file.
     * Parent directories are created automatically.
     * Requires `sharp` to be installed.
     *
     * @param filePath - Absolute or relative path to the output `.png` file.
     * @param size     - Output image size in pixels (square). Defaults to `256`.
     */
    savePng(filePath: string, size?: number): Promise<void>;
    /**
     * Serializes and saves the current configuration as a JSON file.
     * Parent directories are created automatically.
     *
     * @param filePath - Absolute or relative path to the output `.json` file.
     */
    saveConfig(filePath: string): void;
}
/** Result entry for a single character produced by {@link batchFactory}. */
export interface BatchResult {
    /** 1-based index of this character in the batch. */
    index: number;
    /** Absolute path to the saved PNG file. */
    filePath: string;
    /** Full character configuration snapshot. */
    config: CharacterConfig;
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
export declare function batchFactory(factory: CharacterFactory, options: {
    count: number;
    outputDir: string;
    size?: number;
    prefix?: string;
    randomize?: boolean;
    saveConfigs?: boolean;
    /** Max parallel renders. Defaults to 4. Use 1 for sequential. */
    concurrency?: number;
}, onProgress?: (current: number, total: number) => void): Promise<BatchResult[]>;
export {};
//# sourceMappingURL=character-factory.d.ts.map