// ─────────────────────────────────────────────────────────────────────────────
// LORELEI AVATAR ENUMS
// String values match DiceBear identifiers (e.g. "variant01").
// Keys are human-readable names for intuitive usage.
// ─────────────────────────────────────────────────────────────────────────────

// ── Eyes (24 variants) ────────────────────────────────────────────────────────

/** Eye shape and openness variants. */
export enum Eyes {
  // Open, round, neutral to positive
  Round       = "variant01", // large open round eyes
  Wide        = "variant02", // large expressive eyes
  Soft        = "variant03", // soft half-closed eyes
  Startled    = "variant04", // slightly widened eyes
  Gentle      = "variant05", // calm and gentle eyes
  Calm        = "variant06", // composed, open gaze
  Alert       = "variant07", // vivid and attentive gaze
  Tender      = "variant08", // tender half-closed gaze
  Drowsy      = "variant09", // heavy, sleepy eyes
  Open        = "variant10", // frank and open eyes
  // Narrowed, critical, furrowed
  Squint      = "variant11", // horizontally squinted
  Skeptical   = "variant12", // wary, low-brow gaze
  Glare       = "variant13", // fixed, slightly hostile stare
  Dreamy      = "variant14", // dreamy half-closed eyes
  Bright      = "variant15", // sparkling open eyes
  Halfclosed  = "variant16", // half-closed — tired or sultry
  Curious     = "variant17", // curious wide-open gaze
  Sleepy      = "variant18", // very closed, drowsy eyes
  Narrowed    = "variant19", // intentionally narrowed
  // Sad, drooping
  Teary       = "variant20", // drooping outward eyes
  Wary        = "variant21", // fearful or wary gaze
  Downcast    = "variant22", // downward, dejected gaze
  Melancholic = "variant23", // sad drooping eyes
  // Wide from surprise
  Shocked     = "variant24", // wide open, shocked eyes
}

// ── Eyebrows (13 variants) ────────────────────────────────────────────────────

/** Eyebrow style variants. */
export enum Eyebrows {
  // Raised — positive or surprised expressions
  HighArched    = "variant01", // very high, arched
  HighSoft      = "variant02", // high and slightly curved
  RaisedInner   = "variant03", // raised toward the center
  RaisedFlat    = "variant04", // raised and relatively straight
  // Flat / neutral
  NeutralFlat   = "variant05", // flat, neither furrowed nor raised
  RelaxedLow    = "variant06", // low and relaxed
  StraightMid   = "variant07", // straight, mid height
  // Furrowed — anger, tension
  FurrowedMild  = "variant08", // mildly furrowed
  FurrowedInner = "variant09", // furrowed toward the center
  FurrowedDeep  = "variant10", // deeply furrowed, strong tension
  AngryV        = "variant11", // V-shaped, marked anger
  // Sad / worried — arched downward
  WorriedArch   = "variant12", // arched, expressing worry
  SadArch       = "variant13", // arched downward, expressing sadness
}

// ── Mouth ─────────────────────────────────────────────────────────────────────

/** Mouth shape and expression variants. */
export enum Mouth {
  // Wide open smiles
  BigSmile      = "happy01",
  GrinWide      = "happy02",
  OpenSmile     = "happy03",
  SoftSmile     = "happy04",
  QuietSmile    = "happy05",
  // Asymmetric / mischievous smiles
  SmirkLeft     = "happy06",
  ShowingTeeth  = "happy07",
  WideOpen      = "happy08",
  // Subtle / content smiles
  PlayfulSmirk  = "happy09",
  ContentGrin   = "happy10",
  TenderSmile   = "happy11",
  CuteSmile     = "happy12",
  // Open mouths
  Gasping       = "happy13",
  ExcitedOpen   = "happy14",
  RelaxedSmile  = "happy15",
  // Neutral
  SlightSmile   = "happy16",
  Composed      = "happy17",
  CheekyTongue  = "happy18",
  // Sad
  TinyFrown     = "sad01",
  NeutralFlat   = "sad02",
  Pouty         = "sad03",
  Frown         = "sad04",
  DeepFrown     = "sad05",
  GrimaceLight  = "sad06",
  GrimaceMid    = "sad07",
  GrimaceDeep   = "sad08",
  Scowl         = "sad09",
}

// ── Head shape (4 variants) ───────────────────────────────────────────────────

/** Overall skull shape variants. */
export enum HeadShape {
  Standard = "variant01",
  Round    = "variant02",
  Oval     = "variant03",
  Angular  = "variant04",
}

// ── Nose (6 variants) ─────────────────────────────────────────────────────────

/** Nose shape variants. */
export enum Nose {
  Button   = "variant01",
  Soft     = "variant02",
  Pointed  = "variant03",
  Wide     = "variant04",
  Upturned = "variant05",
  Strong   = "variant06",
}

// ── Hairstyles (48 variants) ──────────────────────────────────────────────────

/** Hairstyle variants, grouped by gender presentation and length. */
export enum Hair {
  // ── Short male (v01–v12) ──────────────────────────────────────────────────
  BoyClassicA    = "variant01", // classic smooth A
  BoyClassicB    = "variant02", // classic smooth B
  BoyClassicC    = "variant03", // classic smooth C
  BoyClassicD    = "variant04", // classic smooth D
  BoyVolumeTop   = "variant05", // volume on top
  BoySidePart    = "variant06", // side part
  BoyTextured    = "variant07", // short textured
  BoyFringe      = "variant08", // front fringe
  BoyShaggy      = "variant09", // long shaggy
  BoyCurlyShort  = "variant10", // short curly
  BoySweepBack   = "variant11", // swept back
  BoyMessy       = "variant12", // messy/tousled
  // ── Short & medium female (v13–v16, v18, v20–v21, v24) ───────────────────
  GirlShortSleek   = "variant13", // short sleek
  GirlTopBun       = "variant14", // top bun
  GirlLongStraight = "variant15", // long straight
  GirlShortVolume  = "variant16", // short with volume
  GirlWavyMid      = "variant18", // wavy mid-length
  GirlPixieCut     = "variant20", // pixie cut
  GirlLongAsym     = "variant21", // long asymmetric
  GirlMidVolume    = "variant24", // mid-length with volume
  // ── Medium male (v17, v19, v23) ───────────────────────────────────────────
  BoyMidFlatFringe = "variant17", // mid-length flat with fringe
  BoyMidDarkSweep  = "variant19", // mid-length dark swept
  BoyWavyMid       = "variant23", // wavy mid-length male
  // ── Unisex (v22, v27) ─────────────────────────────────────────────────────
  CurlyShortUnisex = "variant22", // short curly unisex
  PunkMohawk       = "variant27", // punk mohawk
  // ── Bald / shaved (v25) ───────────────────────────────────────────────────
  BaldShaved       = "variant25", // bald / shaved
  // ── Additional short male (v28, v34, v36, v39, v43, v44, v47, v48) ───────
  BoyNeatShort     = "variant28", // neat short
  BoyBuzzCut       = "variant34", // buzz cut
  BoySlickedPony   = "variant36", // slicked side ponytail
  BoyMidParted     = "variant39", // mid-length parted
  BoySpiky         = "variant43", // spiky
  BoyCleanShort    = "variant44", // clean short
  BoySmoothShort   = "variant47", // smooth short
  BoyFringeShort   = "variant48", // short fringe
  // ── Long & tied female (v26, v29–v33, v35, v37–v38, v40–v42, v45–v46) ───
  GirlDoubleBuns   = "variant26", // double buns
  GirlPonytailLow  = "variant29", // low ponytail
  GirlShortChic    = "variant30", // short chic
  GirlHighPonytail = "variant31", // high ponytail
  GirlMidSidePart  = "variant32", // mid-length side part
  GirlLongFlat     = "variant33", // long flat
  GirlLongWavy     = "variant35", // long wavy
  GirlWavyLoose    = "variant37", // loose wavy
  GirlBunNeat      = "variant38", // neat bun
  GirlShortAsym    = "variant40", // short asymmetric
  GirlMidWavySide  = "variant41", // wavy mid-length side
  GirlHighBun      = "variant42", // high bun
  GirlBunFluffy    = "variant45", // fluffy bun
  GirlBunTight     = "variant46", // tight bun
}

// ── Utility hair groups ───────────────────────────────────────────────────────

/** All hairstyles associated with male gender presentation. */
export const HairMale: Hair[] = [
  Hair.BoyClassicA,
  Hair.BoyClassicB,
  Hair.BoyClassicC,
  Hair.BoyClassicD,
  Hair.BoyVolumeTop,
  Hair.BoySidePart,
  Hair.BoyTextured,
  Hair.BoyFringe,
  Hair.BoyShaggy,
  Hair.BoyCurlyShort,
  Hair.BoySweepBack,
  Hair.BoyMessy,
  Hair.BoyMidFlatFringe,
  Hair.BoyMidDarkSweep,
  Hair.BoyWavyMid,
  Hair.BoyNeatShort,
  Hair.BoyBuzzCut,
  Hair.BoySlickedPony,
  Hair.BoyMidParted,
  Hair.BoySpiky,
  Hair.BoyCleanShort,
  Hair.BoySmoothShort,
  Hair.BoyFringeShort,
];

/** All hairstyles associated with female gender presentation. */
export const HairFemale: Hair[] = [
  Hair.GirlShortSleek,
  Hair.GirlTopBun,
  Hair.GirlLongStraight,
  Hair.GirlShortVolume,
  Hair.GirlWavyMid,
  Hair.GirlPixieCut,
  Hair.GirlLongAsym,
  Hair.GirlMidVolume,
  Hair.GirlDoubleBuns,
  Hair.GirlPonytailLow,
  Hair.GirlShortChic,
  Hair.GirlHighPonytail,
  Hair.GirlMidSidePart,
  Hair.GirlLongFlat,
  Hair.GirlLongWavy,
  Hair.GirlWavyLoose,
  Hair.GirlBunNeat,
  Hair.GirlShortAsym,
  Hair.GirlMidWavySide,
  Hair.GirlHighBun,
  Hair.GirlBunFluffy,
  Hair.GirlBunTight,
];

/** Hairstyles suitable for any gender presentation. */
export const HairUnisex: Hair[] = [Hair.CurlyShortUnisex, Hair.PunkMohawk];

/** Bald / fully shaved hairstyles. */
export const HairBald: Hair[] = [Hair.BaldShaved];

// ── Glasses (5 variants) ──────────────────────────────────────────────────────

/** Glasses style variants. */
export enum Glasses {
  None    = "none",
  Round   = "variant01",
  Square  = "variant02",
  CatEye  = "variant03",
  Rimless = "variant04",
  Thick   = "variant05",
}

// ── Earrings (3 variants) ─────────────────────────────────────────────────────

/** Earring style variants. */
export enum Earrings {
  None  = "none",
  Studs = "variant01",
  Hoops = "variant02",
  Drops = "variant03",
}

// ── Beard (2 variants) ────────────────────────────────────────────────────────

/** Beard style variants. */
export enum Beard {
  None      = "none",
  Stubble   = "variant01",
  FullBeard = "variant02",
}

// ── Hair accessories ──────────────────────────────────────────────────────────

/** Hair accessory variants. */
export enum HairAccessory {
  None    = "none",
  Flowers = "flowers",
}

// ── Skin colors ───────────────────────────────────────────────────────────────

/** Skin tone variants (hex values without `#`). */
export enum SkinColor {
  Porcelain = "ffdbb4", // very light, rosy
  Light     = "edb98a", // light warm
  Warm      = "fd9841", // warm orange
  Medium    = "d08b5b", // medium beige
  Tan       = "ae5d29", // tanned
  Brown     = "614335", // brown
  DarkBrown = "4a312c", // dark brown
  Deep      = "2c1b18", // very dark
}

// ── Hair colors ───────────────────────────────────────────────────────────────

/** Hair color variants (hex values without `#`). */
export enum HairColor {
  // Natural dark
  JetBlack      = "0a0a0a",
  SoftBlack     = "2c1b18",
  DarkBrown     = "4a312c",
  Brown         = "724133",
  // Natural light / red
  LightBrown    = "a55728",
  Auburn        = "b7310a",
  Red           = "c93305",
  Copper        = "cb6025",
  // Blondes
  HoneyBlonde   = "b58143",
  GoldenBlonde  = "daa520",
  LightBlonde   = "fdff6b",
  // White / grey
  Silver        = "c0c0c0",
  Gray          = "929598",
  White         = "f5f5f5",
  // Fantasy
  PastelPink    = "f48fb1",
  HotPink       = "e91e90",
  Lilac         = "ce93d8",
  DeepPurple    = "7b1fa2",
  SkyBlue       = "64b5f6",
  NavyBlue      = "0d47a1",
  Mint          = "80cbc4",
  ForestGreen   = "388e3c",
}

// ── Eye colors ────────────────────────────────────────────────────────────────

/** Iris color variants (hex values without `#`). */
export enum EyeColor {
  Black     = "0a0a0a",
  DarkBrown = "4a312c",
  Brown     = "724133",
  Hazel     = "8d6e63",
  Amber     = "b07c4d",
  Green     = "3d6b34",
  Blue      = "3b6fa0",
  LightBlue = "6baed6",
  Gray      = "737373",
}

// ── Background colors ─────────────────────────────────────────────────────────

/** Background color variants (hex values without `#`, or `"transparent"`). */
export enum BackgroundColor {
  SkyBlue     = "b6e3f4",
  Lavender    = "c0aede",
  Periwinkle  = "d1d4f9",
  BabyPink    = "ffd5dc",
  Peach       = "ffdfbf",
  BrightBlue  = "65c9ff",
  Mint        = "c3ffd8",
  Cream       = "fff9c4",
  Coral       = "ffccbc",
  White       = "ffffff",
  DarkNavy    = "1a1a2e",
  Transparent = "transparent",
}

// ─────────────────────────────────────────────────────────────────────────────
// MOOD SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

/** Emotional moods that drive the selection of eyes, eyebrows, and mouth. */
export enum Mood {
  Happy     = "HAPPY",
  Excited   = "EXCITED",
  Loving    = "LOVING",
  Playful   = "PLAYFUL",
  Proud     = "PROUD",
  Neutral   = "NEUTRAL",
  Sleepy    = "SLEEPY",
  Bored     = "BORED",
  Confused  = "CONFUSED",
  Sad       = "SAD",
  Angry     = "ANGRY",
  Scared    = "SCARED",
  Surprised = "SURPRISED",
  Silly     = "SILLY",
}

/** Pools of face feature variants associated with a given mood. */
interface MoodPool {
  eyes:     Eyes[];
  eyebrows: Eyebrows[];
  mouth:    Mouth[];
}

/**
 * Maps each {@link Mood} to compatible face feature pools.
 * Used by {@link CharacterFactory.setMood} to randomly pick coherent expressions.
 */
export const MOOD_POOLS: Record<Mood, MoodPool> = {
  [Mood.Happy]: {
    eyes:     [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Bright, Eyes.Open],
    eyebrows: [Eyebrows.HighSoft, Eyebrows.RaisedInner, Eyebrows.HighArched],
    mouth:    [Mouth.BigSmile, Mouth.OpenSmile, Mouth.GrinWide, Mouth.TenderSmile, Mouth.SoftSmile],
  },
  [Mood.Excited]: {
    eyes:     [Eyes.Shocked, Eyes.Startled, Eyes.Alert, Eyes.Wide],
    eyebrows: [Eyebrows.HighArched, Eyebrows.HighSoft],
    mouth:    [Mouth.WideOpen, Mouth.ExcitedOpen, Mouth.Gasping, Mouth.ShowingTeeth],
  },
  [Mood.Loving]: {
    eyes:     [Eyes.Soft, Eyes.Gentle, Eyes.Tender, Eyes.Dreamy],
    eyebrows: [Eyebrows.HighSoft, Eyebrows.RaisedInner, Eyebrows.RelaxedLow],
    mouth:    [Mouth.TenderSmile, Mouth.CuteSmile, Mouth.QuietSmile, Mouth.SoftSmile],
  },
  [Mood.Playful]: {
    eyes:     [Eyes.Curious, Eyes.Alert, Eyes.Wide, Eyes.Startled],
    eyebrows: [Eyebrows.HighArched, Eyebrows.FurrowedInner, Eyebrows.StraightMid],
    mouth:    [Mouth.SmirkLeft, Mouth.PlayfulSmirk, Mouth.CheekyTongue, Mouth.ContentGrin],
  },
  [Mood.Proud]: {
    eyes:     [Eyes.Round, Eyes.Calm, Eyes.Bright, Eyes.Open],
    eyebrows: [Eyebrows.RaisedFlat, Eyebrows.NeutralFlat, Eyebrows.StraightMid],
    mouth:    [Mouth.ContentGrin, Mouth.Composed, Mouth.RelaxedSmile, Mouth.OpenSmile],
  },
  [Mood.Neutral]: {
    eyes:     [Eyes.Calm, Eyes.Open, Eyes.Alert, Eyes.Round],
    eyebrows: [Eyebrows.NeutralFlat, Eyebrows.RelaxedLow, Eyebrows.StraightMid],
    mouth:    [Mouth.SlightSmile, Mouth.Composed, Mouth.TinyFrown, Mouth.NeutralFlat],
  },
  [Mood.Sleepy]: {
    eyes:     [Eyes.Drowsy, Eyes.Halfclosed, Eyes.Sleepy, Eyes.Soft],
    eyebrows: [Eyebrows.RelaxedLow, Eyebrows.StraightMid, Eyebrows.WorriedArch],
    mouth:    [Mouth.SlightSmile, Mouth.Composed, Mouth.TinyFrown],
  },
  [Mood.Bored]: {
    eyes:     [Eyes.Squint, Eyes.Halfclosed, Eyes.Narrowed, Eyes.Drowsy],
    eyebrows: [Eyebrows.NeutralFlat, Eyebrows.RelaxedLow, Eyebrows.WorriedArch],
    mouth:    [Mouth.NeutralFlat, Mouth.TinyFrown, Mouth.Pouty],
  },
  [Mood.Confused]: {
    eyes:     [Eyes.Curious, Eyes.Wary, Eyes.Wide, Eyes.Skeptical],
    eyebrows: [Eyebrows.WorriedArch, Eyebrows.FurrowedInner, Eyebrows.FurrowedMild],
    mouth:    [Mouth.Pouty, Mouth.NeutralFlat, Mouth.TinyFrown],
  },
  [Mood.Sad]: {
    eyes:     [Eyes.Melancholic, Eyes.Downcast, Eyes.Teary, Eyes.Soft],
    eyebrows: [Eyebrows.SadArch, Eyebrows.WorriedArch],
    mouth:    [Mouth.Frown, Mouth.DeepFrown, Mouth.Pouty, Mouth.TinyFrown],
  },
  [Mood.Angry]: {
    eyes:     [Eyes.Glare, Eyes.Squint, Eyes.Narrowed, Eyes.Skeptical],
    eyebrows: [Eyebrows.AngryV, Eyebrows.FurrowedDeep, Eyebrows.FurrowedInner],
    mouth:    [Mouth.GrimaceMid, Mouth.GrimaceDeep, Mouth.Scowl, Mouth.GrimaceLight],
  },
  [Mood.Scared]: {
    eyes:     [Eyes.Shocked, Eyes.Startled, Eyes.Wary, Eyes.Wide],
    eyebrows: [Eyebrows.WorriedArch, Eyebrows.HighArched, Eyebrows.FurrowedMild],
    mouth:    [Mouth.Gasping, Mouth.Pouty, Mouth.Frown, Mouth.NeutralFlat],
  },
  [Mood.Surprised]: {
    eyes:     [Eyes.Shocked, Eyes.Wide, Eyes.Alert, Eyes.Startled],
    eyebrows: [Eyebrows.HighArched, Eyebrows.HighSoft, Eyebrows.RaisedInner],
    mouth:    [Mouth.Gasping, Mouth.WideOpen, Mouth.ExcitedOpen],
  },
  [Mood.Silly]: {
    eyes:     [Eyes.Wary, Eyes.Curious, Eyes.Startled, Eyes.Shocked],
    eyebrows: [Eyebrows.HighArched, Eyebrows.FurrowedInner, Eyebrows.RaisedInner],
    mouth:    [Mouth.CheekyTongue, Mouth.PlayfulSmirk, Mouth.WideOpen, Mouth.ShowingTeeth],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// GENDER SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

/** Character gender, influencing head shape, hairstyle, eye, and mouth pools. */
export enum Gender {
  Female  = "FEMALE",
  Male    = "MALE",
  Neutral = "NEUTRAL",
}

/** Pools of feature variants associated with a given gender. */
interface GenderPool {
  head:  HeadShape[];
  eyes:  Eyes[];
  mouth: Mouth[];
  hair:  Hair[];
}

/**
 * Maps each {@link Gender} to compatible feature pools.
 * Used by {@link CharacterFactory.setGender} to randomize gender-coherent appearances.
 */
export const GENDER_POOLS: Record<Gender, GenderPool> = {
  [Gender.Female]: {
    head:  [HeadShape.Oval, HeadShape.Round],
    eyes:  [Eyes.Soft, Eyes.Gentle, Eyes.Tender, Eyes.Dreamy, Eyes.Halfclosed, Eyes.Bright, Eyes.Downcast, Eyes.Melancholic, Eyes.Teary],
    mouth: [Mouth.TenderSmile, Mouth.CuteSmile, Mouth.QuietSmile, Mouth.SoftSmile, Mouth.SlightSmile, Mouth.RelaxedSmile, Mouth.Composed, Mouth.Pouty, Mouth.OpenSmile],
    hair:  HairFemale,
  },
  [Gender.Male]: {
    head:  [HeadShape.Standard, HeadShape.Angular],
    eyes:  [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Alert, Eyes.Open, Eyes.Curious, Eyes.Squint, Eyes.Narrowed, Eyes.Glare, Eyes.Skeptical],
    mouth: [Mouth.BigSmile, Mouth.GrinWide, Mouth.ShowingTeeth, Mouth.WideOpen, Mouth.SmirkLeft, Mouth.ContentGrin, Mouth.NeutralFlat, Mouth.TinyFrown, Mouth.Scowl, Mouth.GrimaceMid],
    hair:  HairMale,
  },
  [Gender.Neutral]: {
    head:  [HeadShape.Standard, HeadShape.Round, HeadShape.Oval, HeadShape.Angular],
    eyes:  [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Soft, Eyes.Alert, Eyes.Gentle, Eyes.Bright, Eyes.Open, Eyes.Curious, Eyes.Dreamy],
    mouth: [Mouth.OpenSmile, Mouth.SoftSmile, Mouth.TenderSmile, Mouth.ContentGrin, Mouth.SlightSmile, Mouth.Composed, Mouth.PlayfulSmirk, Mouth.CheekyTongue],
    hair:  [...HairFemale, ...HairMale, ...HairUnisex],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ETHNICITY SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
//
// Each ethnicity defines coherent pools of:
//   skinColors      → possible skin tones with weights
//   hairColors      → natural hair colors (+ fantasy where relevant)
//   hairCuts        → typical hairstyles by gender
//   beardProbability→ beard likelihood for males (0–1)
//
// Picking happens in two steps:
//   1. pickEthnicity(country)  → selects an ethnicity according to country weights
//   2. pickFromEthnicity(eth)  → draws coherent skin + hairColor + hairCut

/**
 * Ethnic background categories used to drive coherent physical trait generation.
 * These are probabilistic abstractions, not strict biological classifications.
 */
export enum Ethnicity {
  NorthEuropean = "NORTH_EUROPEAN", // Scandinavia, Netherlands, Northern UK
  WestEuropean  = "WEST_EUROPEAN",  // France, Germany, UK general
  SouthEuropean = "SOUTH_EUROPEAN", // Mediterranean (future extensions)
  EastAsian     = "EAST_ASIAN",     // Japan, China, Korea
  SouthAsian    = "SOUTH_ASIAN",    // India, Pakistan, Bangladesh
  Latino        = "LATINO",         // Brazil, Mexico, Latin America
  BlackAfrican  = "BLACK_AFRICAN",  // Sub-Saharan Africa & diaspora
  Mixed         = "MIXED",          // Catch-all for highly diverse countries
}

// ── Physical profiles per ethnicity ──────────────────────────────────────────

/**
 * Physical trait pools for a given ethnicity.
 * Used internally by the pick functions to generate coherent appearances.
 */
interface EthnicityProfile {
  /** Weighted skin tone options. */
  skinColors: { color: SkinColor; weight: number }[];
  /** Weighted natural hair color options. */
  hairColors: { color: HairColor; weight: number }[];
  /** Weighted hairstyle options split by gender. */
  hairCuts: {
    male:   { hair: Hair; weight: number }[];
    female: { hair: Hair; weight: number }[];
  };
  /** Probability of a beard for male characters (0–1). */
  beardProbability: number;
}

/**
 * Complete physical profile definitions for each {@link Ethnicity}.
 * Weights are relative — only their ratios matter.
 */
export const ETHNICITY_PROFILES: Record<Ethnicity, EthnicityProfile> = {
  // ── North European ────────────────────────────────────────────────────────
  // Very light skin, blonde to brown hair, blue/green/grey eyes possible
  [Ethnicity.NorthEuropean]: {
    skinColors: [
      { color: SkinColor.Porcelain, weight: 40 },
      { color: SkinColor.Light,     weight: 40 },
      { color: SkinColor.Warm,      weight: 18 },
      { color: SkinColor.Medium,    weight: 2  },
    ],
    hairColors: [
      { color: HairColor.LightBlonde,  weight: 20 },
      { color: HairColor.GoldenBlonde, weight: 22 },
      { color: HairColor.HoneyBlonde,  weight: 18 },
      { color: HairColor.LightBrown,   weight: 16 },
      { color: HairColor.Brown,        weight: 10 },
      { color: HairColor.DarkBrown,    weight: 6  },
      { color: HairColor.Auburn,       weight: 4  },
      { color: HairColor.Silver,       weight: 1  },
      { color: HairColor.Gray,         weight: 1  },
      // Fantasy (Nordic-influenced trend colors)
      { color: HairColor.PastelPink,   weight: 3  },
      { color: HairColor.Lilac,        weight: 2  },
      { color: HairColor.SkyBlue,      weight: 2  },
      { color: HairColor.NavyBlue,     weight: 1  },
      { color: HairColor.Mint,         weight: 1  },
      { color: HairColor.ForestGreen,  weight: 1  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 10 },
        { hair: Hair.BoyClassicB,    weight: 9  },
        { hair: Hair.BoyClassicC,    weight: 8  },
        { hair: Hair.BoyClassicD,    weight: 8  },
        { hair: Hair.BoyVolumeTop,   weight: 7  },
        { hair: Hair.BoySidePart,    weight: 8  },
        { hair: Hair.BoyTextured,    weight: 8  },
        { hair: Hair.BoyFringe,      weight: 6  },
        { hair: Hair.BoyShaggy,      weight: 5  },
        { hair: Hair.BoyCurlyShort,  weight: 5  },
        { hair: Hair.BoySweepBack,   weight: 6  },
        { hair: Hair.BoyMessy,       weight: 6  },
        { hair: Hair.BoyMidFlatFringe, weight: 5 },
        { hair: Hair.BoyMidDarkSweep,  weight: 5 },
        { hair: Hair.BoyWavyMid,     weight: 4  },
        { hair: Hair.BoyNeatShort,   weight: 7  },
        { hair: Hair.BoyBuzzCut,     weight: 6  },
        { hair: Hair.BoySlickedPony, weight: 3  },
        { hair: Hair.BoyMidParted,   weight: 5  },
        { hair: Hair.BoySpiky,       weight: 3  },
        { hair: Hair.BoyCleanShort,  weight: 7  },
        { hair: Hair.BoySmoothShort, weight: 6  },
        { hair: Hair.BoyFringeShort, weight: 6  },
        { hair: Hair.CurlyShortUnisex, weight: 4 },
        { hair: Hair.PunkMohawk,     weight: 1  },
        { hair: Hair.BaldShaved,     weight: 2  },
      ],
      female: [
        { hair: Hair.GirlLongStraight, weight: 10 },
        { hair: Hair.GirlLongWavy,     weight: 10 },
        { hair: Hair.GirlWavyMid,      weight: 9  },
        { hair: Hair.GirlWavyLoose,    weight: 8  },
        { hair: Hair.GirlMidSidePart,  weight: 8  },
        { hair: Hair.GirlMidWavySide,  weight: 7  },
        { hair: Hair.GirlMidVolume,    weight: 7  },
        { hair: Hair.GirlLongFlat,     weight: 7  },
        { hair: Hair.GirlTopBun,       weight: 7  },
        { hair: Hair.GirlHighBun,      weight: 7  },
        { hair: Hair.GirlPonytailLow,  weight: 7  },
        { hair: Hair.GirlHighPonytail, weight: 7  },
        { hair: Hair.GirlBunNeat,      weight: 6  },
        { hair: Hair.GirlShortSleek,   weight: 6  },
        { hair: Hair.GirlShortVolume,  weight: 5  },
        { hair: Hair.GirlLongAsym,     weight: 5  },
        { hair: Hair.GirlBunFluffy,    weight: 5  },
        { hair: Hair.GirlBunTight,     weight: 5  },
        { hair: Hair.GirlPixieCut,     weight: 4  },
        { hair: Hair.GirlShortAsym,    weight: 4  },
        { hair: Hair.GirlShortChic,    weight: 4  },
        { hair: Hair.GirlDoubleBuns,   weight: 3  },
        { hair: Hair.CurlyShortUnisex, weight: 4  },
      ],
    },
    beardProbability: 0.48,
  },

  // ── West European ─────────────────────────────────────────────────────────
  // Light to tan skin, brown to dark hair dominant, red present
  [Ethnicity.WestEuropean]: {
    skinColors: [
      { color: SkinColor.Porcelain, weight: 15 },
      { color: SkinColor.Light,     weight: 30 },
      { color: SkinColor.Warm,      weight: 30 },
      { color: SkinColor.Medium,    weight: 20 },
      { color: SkinColor.Tan,       weight: 5  },
    ],
    hairColors: [
      { color: HairColor.JetBlack,     weight: 6  },
      { color: HairColor.SoftBlack,    weight: 6  },
      { color: HairColor.DarkBrown,    weight: 18 },
      { color: HairColor.Brown,        weight: 20 },
      { color: HairColor.LightBrown,   weight: 14 },
      { color: HairColor.Auburn,       weight: 10 },
      { color: HairColor.Red,          weight: 7  },
      { color: HairColor.Copper,       weight: 5  },
      { color: HairColor.HoneyBlonde,  weight: 8  },
      { color: HairColor.GoldenBlonde, weight: 4  },
      { color: HairColor.LightBlonde,  weight: 2  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 10 },
        { hair: Hair.BoyClassicB,    weight: 9  },
        { hair: Hair.BoyClassicC,    weight: 8  },
        { hair: Hair.BoyClassicD,    weight: 8  },
        { hair: Hair.BoySidePart,    weight: 10 },
        { hair: Hair.BoyTextured,    weight: 8  },
        { hair: Hair.BoyFringe,      weight: 7  },
        { hair: Hair.BoyShaggy,      weight: 7  },
        { hair: Hair.BoyCurlyShort,  weight: 5  },
        { hair: Hair.BoySweepBack,   weight: 6  },
        { hair: Hair.BoyMessy,       weight: 7  },
        { hair: Hair.BoyNeatShort,   weight: 7  },
        { hair: Hair.BoyBuzzCut,     weight: 8  },
        { hair: Hair.BoyMidParted,   weight: 5  },
        { hair: Hair.BoyCleanShort,  weight: 7  },
        { hair: Hair.BoySmoothShort, weight: 6  },
        { hair: Hair.BoyFringeShort, weight: 7  },
        { hair: Hair.BoyMidFlatFringe, weight: 4 },
        { hair: Hair.BoyMidDarkSweep,  weight: 4 },
        { hair: Hair.BoyWavyMid,     weight: 4  },
        { hair: Hair.PunkMohawk,     weight: 3  },
        { hair: Hair.BaldShaved,     weight: 3  },
      ],
      female: [
        { hair: Hair.GirlLongStraight, weight: 9  },
        { hair: Hair.GirlLongWavy,     weight: 9  },
        { hair: Hair.GirlWavyMid,      weight: 10 },
        { hair: Hair.GirlWavyLoose,    weight: 8  },
        { hair: Hair.GirlMidSidePart,  weight: 7  },
        { hair: Hair.GirlMidWavySide,  weight: 7  },
        { hair: Hair.GirlMidVolume,    weight: 8  },
        { hair: Hair.GirlTopBun,       weight: 8  },
        { hair: Hair.GirlHighBun,      weight: 6  },
        { hair: Hair.GirlBunNeat,      weight: 6  },
        { hair: Hair.GirlPonytailLow,  weight: 7  },
        { hair: Hair.GirlHighPonytail, weight: 7  },
        { hair: Hair.GirlShortSleek,   weight: 7  },
        { hair: Hair.GirlPixieCut,     weight: 5  },
        { hair: Hair.GirlShortAsym,    weight: 5  },
        { hair: Hair.GirlShortChic,    weight: 6  },
        { hair: Hair.GirlLongFlat,     weight: 6  },
        { hair: Hair.GirlLongAsym,     weight: 5  },
        { hair: Hair.GirlBunFluffy,    weight: 5  },
        { hair: Hair.GirlBunTight,     weight: 5  },
        { hair: Hair.GirlShortVolume,  weight: 5  },
        { hair: Hair.GirlDoubleBuns,   weight: 3  },
        { hair: Hair.CurlyShortUnisex, weight: 3  },
      ],
    },
    beardProbability: 0.45,
  },

  // ── South European ────────────────────────────────────────────────────────
  // Olive to tan skin, dark hair dominant, Mediterranean structure
  [Ethnicity.SouthEuropean]: {
    skinColors: [
      { color: SkinColor.Light,  weight: 10 },
      { color: SkinColor.Warm,   weight: 35 },
      { color: SkinColor.Medium, weight: 35 },
      { color: SkinColor.Tan,    weight: 18 },
      { color: SkinColor.Brown,  weight: 2  },
    ],
    hairColors: [
      { color: HairColor.JetBlack,   weight: 20 },
      { color: HairColor.SoftBlack,  weight: 20 },
      { color: HairColor.DarkBrown,  weight: 28 },
      { color: HairColor.Brown,      weight: 18 },
      { color: HairColor.LightBrown, weight: 8  },
      { color: HairColor.Auburn,     weight: 5  },
      { color: HairColor.Red,        weight: 1  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 10 },
        { hair: Hair.BoyClassicB,    weight: 9  },
        { hair: Hair.BoyClassicC,    weight: 8  },
        { hair: Hair.BoyTextured,    weight: 10 },
        { hair: Hair.BoyCurlyShort,  weight: 8  },
        { hair: Hair.BoyFringe,      weight: 7  },
        { hair: Hair.BoyShaggy,      weight: 7  },
        { hair: Hair.BoySidePart,    weight: 8  },
        { hair: Hair.BoyMessy,       weight: 7  },
        { hair: Hair.BoyBuzzCut,     weight: 6  },
        { hair: Hair.BoyWavyMid,     weight: 6  },
        { hair: Hair.BoyMidParted,   weight: 5  },
        { hair: Hair.BoyNeatShort,   weight: 6  },
        { hair: Hair.BoyCleanShort,  weight: 5  },
        { hair: Hair.BoyMidDarkSweep, weight: 5 },
        { hair: Hair.CurlyShortUnisex, weight: 5 },
        { hair: Hair.BaldShaved,     weight: 4  },
      ],
      female: [
        { hair: Hair.GirlLongWavy,     weight: 14 },
        { hair: Hair.GirlWavyMid,      weight: 13 },
        { hair: Hair.GirlWavyLoose,    weight: 12 },
        { hair: Hair.GirlLongStraight, weight: 8  },
        { hair: Hair.GirlLongFlat,     weight: 6  },
        { hair: Hair.GirlMidVolume,    weight: 9  },
        { hair: Hair.GirlMidWavySide,  weight: 8  },
        { hair: Hair.GirlHighPonytail, weight: 8  },
        { hair: Hair.GirlPonytailLow,  weight: 7  },
        { hair: Hair.GirlTopBun,       weight: 6  },
        { hair: Hair.GirlHighBun,      weight: 6  },
        { hair: Hair.GirlBunFluffy,    weight: 5  },
        { hair: Hair.GirlShortSleek,   weight: 4  },
        { hair: Hair.CurlyShortUnisex, weight: 8  },
      ],
    },
    beardProbability: 0.55,
  },

  // ── East Asian ────────────────────────────────────────────────────────────
  // Light to medium skin, black/dark brown hair almost exclusively, straight hair
  [Ethnicity.EastAsian]: {
    skinColors: [
      { color: SkinColor.Porcelain, weight: 20 },
      { color: SkinColor.Light,     weight: 40 },
      { color: SkinColor.Warm,      weight: 30 },
      { color: SkinColor.Medium,    weight: 10 },
    ],
    hairColors: [
      { color: HairColor.JetBlack,  weight: 60 },
      { color: HairColor.SoftBlack, weight: 25 },
      { color: HairColor.DarkBrown, weight: 12 },
      { color: HairColor.Brown,     weight: 3  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 12 },
        { hair: Hair.BoyClassicB,    weight: 10 },
        { hair: Hair.BoyClassicC,    weight: 8  },
        { hair: Hair.BoyFringe,      weight: 12 }, // very common in East Asia
        { hair: Hair.BoyFringeShort, weight: 10 },
        { hair: Hair.BoyTextured,    weight: 8  },
        { hair: Hair.BoySidePart,    weight: 8  },
        { hair: Hair.BoyVolumeTop,   weight: 8  },
        { hair: Hair.BoySweepBack,   weight: 6  },
        { hair: Hair.BoyNeatShort,   weight: 8  },
        { hair: Hair.BoyCleanShort,  weight: 7  },
        { hair: Hair.BoySmoothShort, weight: 7  },
        { hair: Hair.BoyMidParted,   weight: 5  },
        { hair: Hair.BoyMidFlatFringe, weight: 6 },
        { hair: Hair.BoyMidDarkSweep,  weight: 5 },
        { hair: Hair.BaldShaved,     weight: 1  },
      ],
      female: [
        { hair: Hair.GirlLongStraight, weight: 18 }, // very common long straight
        { hair: Hair.GirlLongFlat,     weight: 16 },
        { hair: Hair.GirlMidSidePart,  weight: 12 },
        { hair: Hair.GirlLongAsym,     weight: 8  },
        { hair: Hair.GirlMidWavySide,  weight: 7  },
        { hair: Hair.GirlTopBun,       weight: 7  },
        { hair: Hair.GirlHighBun,      weight: 7  },
        { hair: Hair.GirlBunNeat,      weight: 6  },
        { hair: Hair.GirlBunTight,     weight: 6  },
        { hair: Hair.GirlShortSleek,   weight: 6  },
        { hair: Hair.GirlPixieCut,     weight: 4  },
        { hair: Hair.GirlPonytailLow,  weight: 6  },
        { hair: Hair.GirlHighPonytail, weight: 6  },
        { hair: Hair.GirlShortChic,    weight: 4  },
        { hair: Hair.GirlShortAsym,    weight: 4  },
      ],
    },
    beardProbability: 0.1,
  },

  // ── South Asian ───────────────────────────────────────────────────────────
  // Medium to dark skin, black hair dominant, beard more common
  [Ethnicity.SouthAsian]: {
    skinColors: [
      { color: SkinColor.Warm,      weight: 8  },
      { color: SkinColor.Medium,    weight: 14 },
      { color: SkinColor.Tan,       weight: 22 },
      { color: SkinColor.Brown,     weight: 28 },
      { color: SkinColor.DarkBrown, weight: 20 },
      { color: SkinColor.Deep,      weight: 8  },
    ],
    hairColors: [
      { color: HairColor.JetBlack,  weight: 75 },
      { color: HairColor.SoftBlack, weight: 20 },
      { color: HairColor.DarkBrown, weight: 5  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 12 },
        { hair: Hair.BoyClassicB,    weight: 10 },
        { hair: Hair.BoyClassicC,    weight: 8  },
        { hair: Hair.BoyClassicD,    weight: 8  },
        { hair: Hair.BoySidePart,    weight: 10 },
        { hair: Hair.BoyFringe,      weight: 7  },
        { hair: Hair.BoyTextured,    weight: 8  },
        { hair: Hair.BoyNeatShort,   weight: 10 },
        { hair: Hair.BoyBuzzCut,     weight: 8  },
        { hair: Hair.BoyCleanShort,  weight: 8  },
        { hair: Hair.BoySmoothShort, weight: 6  },
        { hair: Hair.BoyWavyMid,     weight: 5  },
        { hair: Hair.BoyCurlyShort,  weight: 6  },
        { hair: Hair.BaldShaved,     weight: 4  }, // ritual/practical shaving common
      ],
      female: [
        { hair: Hair.GirlLongStraight, weight: 14 },
        { hair: Hair.GirlLongFlat,     weight: 12 },
        { hair: Hair.GirlLongWavy,     weight: 10 },
        { hair: Hair.GirlHighBun,      weight: 12 }, // high bun typical
        { hair: Hair.GirlBunNeat,      weight: 10 },
        { hair: Hair.GirlBunTight,     weight: 10 },
        { hair: Hair.GirlTopBun,       weight: 8  },
        { hair: Hair.GirlPonytailLow,  weight: 8  },
        { hair: Hair.GirlHighPonytail, weight: 7  },
        { hair: Hair.GirlMidSidePart,  weight: 7  },
        { hair: Hair.GirlLongAsym,     weight: 5  },
      ],
    },
    beardProbability: 0.65,
  },

  // ── Latino ────────────────────────────────────────────────────────────────
  // Wide range of skin tones, dark to brown hair, wavy texture common
  [Ethnicity.Latino]: {
    skinColors: [
      { color: SkinColor.Light,     weight: 8  },
      { color: SkinColor.Warm,      weight: 14 },
      { color: SkinColor.Medium,    weight: 22 },
      { color: SkinColor.Tan,       weight: 26 },
      { color: SkinColor.Brown,     weight: 20 },
      { color: SkinColor.DarkBrown, weight: 8  },
      { color: SkinColor.Deep,      weight: 2  },
    ],
    hairColors: [
      { color: HairColor.JetBlack,     weight: 20 },
      { color: HairColor.SoftBlack,    weight: 18 },
      { color: HairColor.DarkBrown,    weight: 22 },
      { color: HairColor.Brown,        weight: 16 },
      { color: HairColor.LightBrown,   weight: 10 },
      { color: HairColor.HoneyBlonde,  weight: 6  },
      { color: HairColor.Auburn,       weight: 4  },
      { color: HairColor.Copper,       weight: 2  },
      { color: HairColor.GoldenBlonde, weight: 2  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 10 },
        { hair: Hair.BoyClassicB,    weight: 9  },
        { hair: Hair.BoyTextured,    weight: 10 },
        { hair: Hair.BoyCurlyShort,  weight: 8  },
        { hair: Hair.BoyFringe,      weight: 7  },
        { hair: Hair.BoyShaggy,      weight: 8  },
        { hair: Hair.BoyMessy,       weight: 7  },
        { hair: Hair.BoyBuzzCut,     weight: 7  },
        { hair: Hair.BoyNeatShort,   weight: 7  },
        { hair: Hair.BoyCleanShort,  weight: 6  },
        { hair: Hair.BoyWavyMid,     weight: 5  },
        { hair: Hair.BoySlickedPony, weight: 4  },
        { hair: Hair.BoyMidParted,   weight: 5  },
        { hair: Hair.CurlyShortUnisex, weight: 7 },
        { hair: Hair.BaldShaved,     weight: 3  },
      ],
      female: [
        { hair: Hair.GirlLongWavy,     weight: 14 },
        { hair: Hair.GirlWavyMid,      weight: 13 },
        { hair: Hair.GirlWavyLoose,    weight: 12 },
        { hair: Hair.GirlLongStraight, weight: 10 },
        { hair: Hair.GirlLongFlat,     weight: 6  },
        { hair: Hair.GirlMidVolume,    weight: 9  },
        { hair: Hair.GirlMidWavySide,  weight: 8  },
        { hair: Hair.GirlHighPonytail, weight: 8  },
        { hair: Hair.GirlPonytailLow,  weight: 7  },
        { hair: Hair.GirlTopBun,       weight: 6  },
        { hair: Hair.GirlHighBun,      weight: 6  },
        { hair: Hair.GirlBunFluffy,    weight: 5  },
        { hair: Hair.GirlShortSleek,   weight: 4  },
        { hair: Hair.CurlyShortUnisex, weight: 10 },
      ],
    },
    beardProbability: 0.5,
  },

  // ── Black African ─────────────────────────────────────────────────────────
  // Brown to very dark skin, very dark hair, curly/coily textures
  [Ethnicity.BlackAfrican]: {
    skinColors: [
      { color: SkinColor.Tan,       weight: 8  },
      { color: SkinColor.Brown,     weight: 20 },
      { color: SkinColor.DarkBrown, weight: 35 },
      { color: SkinColor.Deep,      weight: 37 },
    ],
    hairColors: [
      { color: HairColor.JetBlack,  weight: 70 },
      { color: HairColor.SoftBlack, weight: 25 },
      { color: HairColor.DarkBrown, weight: 5  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyCurlyShort,  weight: 14 },
        { hair: Hair.CurlyShortUnisex, weight: 14 },
        { hair: Hair.BoyBuzzCut,     weight: 12 },
        { hair: Hair.BoyTextured,    weight: 10 },
        { hair: Hair.BoyShaggy,      weight: 8  },
        { hair: Hair.BoyNeatShort,   weight: 8  },
        { hair: Hair.BoyCleanShort,  weight: 7  },
        { hair: Hair.BoyClassicA,    weight: 6  },
        { hair: Hair.BoyClassicB,    weight: 5  },
        { hair: Hair.BoyFringe,      weight: 4  },
        { hair: Hair.BoyMessy,       weight: 6  },
        { hair: Hair.BaldShaved,     weight: 8  }, // very common
      ],
      female: [
        { hair: Hair.CurlyShortUnisex, weight: 16 },
        { hair: Hair.GirlTopBun,       weight: 10 },
        { hair: Hair.GirlHighBun,      weight: 10 },
        { hair: Hair.GirlBunNeat,      weight: 8  },
        { hair: Hair.GirlBunTight,     weight: 8  },
        { hair: Hair.GirlBunFluffy,    weight: 7  },
        { hair: Hair.GirlDoubleBuns,   weight: 7  },
        { hair: Hair.GirlHighPonytail, weight: 6  },
        { hair: Hair.GirlPonytailLow,  weight: 5  },
        { hair: Hair.GirlShortSleek,   weight: 5  },
        { hair: Hair.GirlMidVolume,    weight: 5  },
        { hair: Hair.GirlWavyMid,      weight: 4  },
        { hair: Hair.GirlPixieCut,     weight: 4  },
      ],
    },
    beardProbability: 0.5,
  },

  // ── Mixed ─────────────────────────────────────────────────────────────────
  // Full palette — for highly multicultural countries
  [Ethnicity.Mixed]: {
    skinColors: [
      { color: SkinColor.Porcelain, weight: 6  },
      { color: SkinColor.Light,     weight: 10 },
      { color: SkinColor.Warm,      weight: 14 },
      { color: SkinColor.Medium,    weight: 18 },
      { color: SkinColor.Tan,       weight: 18 },
      { color: SkinColor.Brown,     weight: 18 },
      { color: SkinColor.DarkBrown, weight: 10 },
      { color: SkinColor.Deep,      weight: 6  },
    ],
    hairColors: [
      { color: HairColor.JetBlack,    weight: 12 },
      { color: HairColor.SoftBlack,   weight: 10 },
      { color: HairColor.DarkBrown,   weight: 14 },
      { color: HairColor.Brown,       weight: 14 },
      { color: HairColor.LightBrown,  weight: 10 },
      { color: HairColor.Auburn,      weight: 5  },
      { color: HairColor.Red,         weight: 4  },
      { color: HairColor.Copper,      weight: 3  },
      { color: HairColor.HoneyBlonde, weight: 8  },
      { color: HairColor.GoldenBlonde, weight: 6 },
      { color: HairColor.LightBlonde, weight: 4  },
      // Moderate fantasy
      { color: HairColor.PastelPink,  weight: 2  },
      { color: HairColor.HotPink,     weight: 2  },
      { color: HairColor.Lilac,       weight: 2  },
      { color: HairColor.SkyBlue,     weight: 2  },
      { color: HairColor.NavyBlue,    weight: 1  },
      { color: HairColor.DeepPurple,  weight: 1  },
    ],
    hairCuts: {
      male: [
        { hair: Hair.BoyClassicA,    weight: 8  },
        { hair: Hair.BoyClassicB,    weight: 8  },
        { hair: Hair.BoyClassicC,    weight: 7  },
        { hair: Hair.BoyClassicD,    weight: 7  },
        { hair: Hair.BoyVolumeTop,   weight: 6  },
        { hair: Hair.BoySidePart,    weight: 6  },
        { hair: Hair.BoyTextured,    weight: 8  },
        { hair: Hair.BoyFringe,      weight: 6  },
        { hair: Hair.BoyShaggy,      weight: 6  },
        { hair: Hair.BoyCurlyShort,  weight: 7  },
        { hair: Hair.BoySweepBack,   weight: 5  },
        { hair: Hair.BoyMessy,       weight: 6  },
        { hair: Hair.BoyNeatShort,   weight: 6  },
        { hair: Hair.BoyBuzzCut,     weight: 7  },
        { hair: Hair.BoyCleanShort,  weight: 6  },
        { hair: Hair.BoySmoothShort, weight: 5  },
        { hair: Hair.BoyFringeShort, weight: 5  },
        { hair: Hair.CurlyShortUnisex, weight: 6 },
        { hair: Hair.BaldShaved,     weight: 3  },
      ],
      female: [
        { hair: Hair.GirlLongStraight, weight: 8  },
        { hair: Hair.GirlLongWavy,     weight: 8  },
        { hair: Hair.GirlWavyMid,      weight: 8  },
        { hair: Hair.GirlWavyLoose,    weight: 7  },
        { hair: Hair.GirlLongFlat,     weight: 6  },
        { hair: Hair.GirlMidVolume,    weight: 7  },
        { hair: Hair.GirlMidWavySide,  weight: 6  },
        { hair: Hair.GirlTopBun,       weight: 6  },
        { hair: Hair.GirlHighBun,      weight: 6  },
        { hair: Hair.GirlBunNeat,      weight: 5  },
        { hair: Hair.GirlHighPonytail, weight: 7  },
        { hair: Hair.GirlPonytailLow,  weight: 6  },
        { hair: Hair.GirlMidSidePart,  weight: 6  },
        { hair: Hair.GirlShortSleek,   weight: 5  },
        { hair: Hair.GirlPixieCut,     weight: 4  },
        { hair: Hair.GirlBunFluffy,    weight: 4  },
        { hair: Hair.GirlBunTight,     weight: 4  },
        { hair: Hair.CurlyShortUnisex, weight: 5  },
      ],
    },
    beardProbability: 0.45,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
//
// Each country defines its ethnicities with associated weights.
// Skin/hair/hairstyle are then drawn from the selected ethnicity's profile.

/** Countries supported for ethnicity-weighted character generation. */
export enum Country {
  USA         = "USA",
  Canada      = "Canada",
  UK          = "UK",
  Australia   = "Australia",
  Germany     = "Germany",
  France      = "France",
  Japan       = "Japan",
  China       = "China",
  India       = "India",
  Brazil      = "Brazil",
  Sweden      = "Sweden",
  Netherlands = "Netherlands",
  Denmark     = "Denmark",
}

/**
 * Maps each {@link Country} to a weighted list of ethnicities reflecting its demographic composition.
 * Weights are relative — only their ratios matter.
 */
export const ethnicitiesByCountry: Record<Country, { ethnicity: Ethnicity; weight: number }[]> = {
  [Country.USA]: [
    { ethnicity: Ethnicity.WestEuropean, weight: 34 },
    { ethnicity: Ethnicity.BlackAfrican, weight: 14 },
    { ethnicity: Ethnicity.Latino,       weight: 18 },
    { ethnicity: Ethnicity.EastAsian,    weight: 6  },
    { ethnicity: Ethnicity.SouthAsian,   weight: 5  },
    { ethnicity: Ethnicity.Mixed,        weight: 23 },
  ],
  [Country.Canada]: [
    { ethnicity: Ethnicity.WestEuropean,  weight: 35 },
    { ethnicity: Ethnicity.NorthEuropean, weight: 10 },
    { ethnicity: Ethnicity.EastAsian,     weight: 12 },
    { ethnicity: Ethnicity.SouthAsian,    weight: 10 },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 5  },
    { ethnicity: Ethnicity.Latino,        weight: 8  },
    { ethnicity: Ethnicity.Mixed,         weight: 20 },
  ],
  [Country.UK]: [
    { ethnicity: Ethnicity.WestEuropean,  weight: 45 },
    { ethnicity: Ethnicity.NorthEuropean, weight: 15 },
    { ethnicity: Ethnicity.SouthAsian,    weight: 10 },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 8  },
    { ethnicity: Ethnicity.EastAsian,     weight: 5  },
    { ethnicity: Ethnicity.Mixed,         weight: 17 },
  ],
  [Country.Australia]: [
    { ethnicity: Ethnicity.WestEuropean,  weight: 40 },
    { ethnicity: Ethnicity.NorthEuropean, weight: 15 },
    { ethnicity: Ethnicity.EastAsian,     weight: 15 },
    { ethnicity: Ethnicity.SouthAsian,    weight: 8  },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 3  },
    { ethnicity: Ethnicity.Mixed,         weight: 19 },
  ],
  [Country.Germany]: [
    { ethnicity: Ethnicity.NorthEuropean, weight: 30 },
    { ethnicity: Ethnicity.WestEuropean,  weight: 40 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 8  }, // Turkish/Balkan diaspora
    { ethnicity: Ethnicity.EastAsian,     weight: 3  },
    { ethnicity: Ethnicity.Mixed,         weight: 19 },
  ],
  [Country.France]: [
    { ethnicity: Ethnicity.WestEuropean,  weight: 48 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 15 },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 12 },
    { ethnicity: Ethnicity.NorthEuropean, weight: 5  },
    { ethnicity: Ethnicity.EastAsian,     weight: 3  },
    { ethnicity: Ethnicity.Mixed,         weight: 17 },
  ],
  [Country.Japan]: [
    { ethnicity: Ethnicity.EastAsian, weight: 98 },
    { ethnicity: Ethnicity.Mixed,     weight: 2  },
  ],
  [Country.China]: [
    { ethnicity: Ethnicity.EastAsian, weight: 99 },
    { ethnicity: Ethnicity.Mixed,     weight: 1  },
  ],
  [Country.India]: [
    { ethnicity: Ethnicity.SouthAsian, weight: 97 },
    { ethnicity: Ethnicity.Mixed,      weight: 3  },
  ],
  [Country.Brazil]: [
    { ethnicity: Ethnicity.WestEuropean,  weight: 30 },
    { ethnicity: Ethnicity.Latino,        weight: 25 },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 15 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 10 },
    { ethnicity: Ethnicity.EastAsian,     weight: 5  }, // significant Japanese/Chinese diaspora
    { ethnicity: Ethnicity.Mixed,         weight: 15 },
  ],
  [Country.Sweden]: [
    { ethnicity: Ethnicity.NorthEuropean, weight: 72 },
    { ethnicity: Ethnicity.WestEuropean,  weight: 10 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 5  },
    { ethnicity: Ethnicity.EastAsian,     weight: 3  },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 3  },
    { ethnicity: Ethnicity.Mixed,         weight: 7  },
  ],
  [Country.Netherlands]: [
    { ethnicity: Ethnicity.NorthEuropean, weight: 55 },
    { ethnicity: Ethnicity.WestEuropean,  weight: 20 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 8  },
    { ethnicity: Ethnicity.EastAsian,     weight: 4  },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 5  },
    { ethnicity: Ethnicity.Mixed,         weight: 8  },
  ],
  [Country.Denmark]: [
    { ethnicity: Ethnicity.NorthEuropean, weight: 70 },
    { ethnicity: Ethnicity.WestEuropean,  weight: 12 },
    { ethnicity: Ethnicity.SouthEuropean, weight: 5  },
    { ethnicity: Ethnicity.EastAsian,     weight: 3  },
    { ethnicity: Ethnicity.BlackAfrican,  weight: 3  },
    { ethnicity: Ethnicity.Mixed,         weight: 7  },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PICK FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Picks a random value from a weighted entry list.
 *
 * @param entries  - Array of entries, each carrying a numeric `weight`.
 * @param getValue - Extracts the result value from an entry.
 * @returns A randomly selected value, proportional to weights.
 */
function weightedPick<E extends { weight: number }, T>(entries: E[], getValue: (e: E) => T): T {
  const total = entries.reduce((sum, e) => sum + e.weight, 0);
  let rand = Math.random() * total;
  for (const entry of entries) {
    rand -= entry.weight;
    if (rand <= 0) return getValue(entry);
  }
  return getValue(entries[entries.length - 1]!);
}

/**
 * Picks a random ethnicity for the given country, weighted by demographic composition.
 *
 * @param country - The target country.
 * @returns A randomly selected {@link Ethnicity}.
 */
export function pickEthnicity(country: Country): Ethnicity {
  return weightedPick(ethnicitiesByCountry[country], (e) => e.ethnicity);
}

/**
 * Picks a random skin color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link SkinColor}.
 */
export function pickSkinColor(ethnicity: Ethnicity): SkinColor {
  return weightedPick(ETHNICITY_PROFILES[ethnicity].skinColors, (e) => e.color);
}

/**
 * Picks a random hair color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link HairColor}.
 */
export function pickHairColor(ethnicity: Ethnicity): HairColor {
  return weightedPick(ETHNICITY_PROFILES[ethnicity].hairColors, (e) => e.color);
}

/**
 * Picks a random hairstyle coherent with the given ethnicity and gender.
 *
 * @param ethnicity - The target ethnicity.
 * @param gender    - The character's gender (selects the male or female sub-pool).
 * @returns A randomly selected {@link Hair} style.
 */
export function pickHaircut(ethnicity: Ethnicity, gender: Gender): Hair {
  const pool    = ETHNICITY_PROFILES[ethnicity].hairCuts;
  const entries = gender === Gender.Female ? pool.female : pool.male;
  return weightedPick(entries, (e) => e.hair);
}

/**
 * Returns whether a male character of the given ethnicity would have a beard.
 *
 * @param ethnicity - The target ethnicity.
 * @returns `true` if the character has a beard, based on the ethnicity's beard probability.
 */
export function pickHasBeard(ethnicity: Ethnicity): boolean {
  return Math.random() < ETHNICITY_PROFILES[ethnicity].beardProbability;
}

/**
 * Generates a complete, coherent physical profile for a given country and gender.
 *
 * @example
 * ```ts
 * const { ethnicity, skinColor, hairColor, hair, hasBeard } =
 *   pickPhysicalProfile(Country.Japan, Gender.Male);
 * ```
 *
 * @param country - The target country (drives ethnicity selection).
 * @param gender  - The character's gender.
 * @returns An object containing `ethnicity`, `skinColor`, `hairColor`, `hair`, and `hasBeard`.
 */
export function pickPhysicalProfile(country: Country, gender: Gender) {
  const ethnicity = pickEthnicity(country);
  const skinColor = pickSkinColor(ethnicity);
  const hairColor = pickHairColor(ethnicity);
  const hair      = pickHaircut(ethnicity, gender);
  const hasBeard  = gender !== Gender.Female && pickHasBeard(ethnicity);

  return { ethnicity, skinColor, hairColor, hair, hasBeard };
}