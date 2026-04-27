import { BackgroundColor, Beard, Earrings, Eyebrows, EyeColor, Eyes, Gender, Glasses, Hair, HairAccessory, HairColor, HeadShape, Mood, Mouth, Nose, SkinColor } from "./lorelei-enums";
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export declare function pick<T>(arr: T[]): T;
export declare function pickEnum<T>(e: Record<string, T>): T;
/**
 * Traits du visage : structure osseuse, teint, yeux, sourcils, nez, bouche.
 * Fortement couplé au mood et au genre.
 */
export interface FaceTraits {
    headShape: HeadShape;
    skinColor: SkinColor | string;
    eyes: Eyes;
    eyesColor: EyeColor | string;
    eyebrows: Eyebrows;
    eyebrowsColor: HairColor | string;
    nose: Nose;
    noseColor: string;
    mouth: Mouth;
    mouthColor: string;
}
/**
 * Traits capillaires et épidermiques : cheveux, barbe, taches de rousseur.
 * Distincts des accessoires portés — c'est de la biologie, pas du style.
 */
export interface HairTraits {
    hair: Hair;
    hairColor: HairColor | string;
    beard: Beard;
    freckles: boolean;
    frecklesColor: string;
}
/**
 * Accessoires portés : lunettes, boucles d'oreilles, accessoire capillaire.
 * Ce sont des objets ajoutés, pas des traits biologiques.
 */
export interface AccessoryTraits {
    glasses: Glasses;
    glassesColor: string;
    earrings: Earrings;
    earringsColor: string;
    hairAccessory: HairAccessory;
    hairAccessoryColor: string;
}
/**
 * Paramètres de rendu : fond et extensions futures (pattern, scale…).
 */
export interface Presentation {
    backgroundColor: BackgroundColor | string;
}
export interface CharacterConfig {
    seed: string;
    gender?: Gender;
    mood?: Mood;
    face: FaceTraits;
    hair: HairTraits;
    accessories: AccessoryTraits;
    presentation: Presentation;
}
export declare class CharacterFactory {
    private seed;
    private gender?;
    private mood?;
    private face;
    private hair;
    private accessories;
    private presentation;
    constructor(seed?: string);
    getConfig(): Readonly<CharacterConfig>;
    fromConfig(config: CharacterConfig): this;
    fromPartialConfig(partial: DeepPartial<CharacterConfig>): this;
    /** Fusionne un patch partiel dans la config courante. Seuls les champs fournis sont écrasés. */
    patchConfig(partial: DeepPartial<Omit<CharacterConfig, "seed">>): this;
    /**
     * Retourne un diff minimal entre cette factory et une autre.
     * Utile pour l'animation ou le debug.
     */
    diff(other: CharacterFactory): DeepPartial<CharacterConfig>;
    /** Applique la config d'une autre factory par-dessus la sienne. */
    merge(other: CharacterFactory): this;
    clone(): CharacterFactory;
    setSeed(v: string): this;
    toJSON(): string;
    toBase64(): string;
    static fromBase64(b64: string): CharacterFactory;
    getFace(): Readonly<FaceTraits>;
    setFace(traits: FaceTraits): this;
    patchFace(partial: DeepPartial<FaceTraits>): this;
    randomizeFace(): this;
    setHeadShape(v: HeadShape): this;
    setSkinColor(v: SkinColor | string): this;
    setEyes(v: Eyes): this;
    setEyesColor(v: EyeColor | string): this;
    setEyebrows(v: Eyebrows): this;
    setEyebrowsColor(v: HairColor | string): this;
    setNose(v: Nose): this;
    setNoseColor(v: string): this;
    setMouth(v: Mouth): this;
    setMouthColor(v: string): this;
    getHair(): Readonly<HairTraits>;
    setHair(traits: HairTraits): this;
    patchHair(partial: DeepPartial<HairTraits>): this;
    randomizeHair(): this;
    setHairStyle(v: Hair): this;
    setHairColor(v: HairColor | string): this;
    setBeard(v: Beard): this;
    setFreckles(v: boolean): this;
    setFrecklesColor(v: string): this;
    getAccessories(): Readonly<AccessoryTraits>;
    setAccessories(traits: AccessoryTraits): this;
    patchAccessories(partial: DeepPartial<AccessoryTraits>): this;
    randomizeAccessories(): this;
    clearAccessories(): this;
    setGlasses(v: Glasses): this;
    setGlassesColor(v: string): this;
    setEarrings(v: Earrings): this;
    setEarringsColor(v: string): this;
    setHairAccessory(v: HairAccessory): this;
    setHairAccessoryColor(v: string): this;
    getPresentation(): Readonly<Presentation>;
    setPresentation(p: Presentation): this;
    patchPresentation(partial: DeepPartial<Presentation>): this;
    randomizePresentation(): this;
    setBackgroundColor(v: BackgroundColor | string): this;
    setGender(gender: Gender): this;
    setPreciseGender(head: HeadShape, hair: Hair, gender?: Gender): this;
    setMood(mood: Mood): this;
    setPreciseMood(eyes: Eyes, eyebrows: Eyebrows, mouth: Mouth): this;
    randomize(): this;
    randomizeAppearance(): this;
    randomizeMood(): this;
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
    projectChild(partner: CharacterConfig, options?: {
        gender?: Gender;
        mood?: Mood;
        seed?: string;
    }): CharacterFactory;
    private toDiceBearOptions;
    buildSvg(): string;
    buildPng(size?: number): Promise<Buffer>;
    saveSvg(filePath: string): Promise<void>;
    savePng(filePath: string, size?: number): Promise<void>;
    saveConfig(filePath: string): void;
}
export interface BatchResult {
    index: number;
    filePath: string;
    config: CharacterConfig;
}
export declare function batchFactory(factory: CharacterFactory, options: {
    count: number;
    outputDir: string;
    size?: number;
    prefix?: string;
    randomize?: boolean;
    saveConfigs?: boolean;
}, onProgress?: (current: number, total: number) => void): Promise<BatchResult[]>;
export {};
//# sourceMappingURL=character-factory.d.ts.map