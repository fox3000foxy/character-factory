/** Eye shape and openness variants. */
export declare enum Eyes {
    Round = "variant01",// large open round eyes
    Wide = "variant02",// large expressive eyes
    Soft = "variant03",// soft half-closed eyes
    Startled = "variant04",// slightly widened eyes
    Gentle = "variant05",// calm and gentle eyes
    Calm = "variant06",// composed, open gaze
    Alert = "variant07",// vivid and attentive gaze
    Tender = "variant08",// tender half-closed gaze
    Drowsy = "variant09",// heavy, sleepy eyes
    Open = "variant10",// frank and open eyes
    Squint = "variant11",// horizontally squinted
    Skeptical = "variant12",// wary, low-brow gaze
    Glare = "variant13",// fixed, slightly hostile stare
    Dreamy = "variant14",// dreamy half-closed eyes
    Bright = "variant15",// sparkling open eyes
    Halfclosed = "variant16",// half-closed — tired or sultry
    Curious = "variant17",// curious wide-open gaze
    Sleepy = "variant18",// very closed, drowsy eyes
    Narrowed = "variant19",// intentionally narrowed
    Teary = "variant20",// drooping outward eyes
    Wary = "variant21",// fearful or wary gaze
    Downcast = "variant22",// downward, dejected gaze
    Melancholic = "variant23",// sad drooping eyes
    Shocked = "variant24"
}
/** Eyebrow style variants. */
export declare enum Eyebrows {
    HighArched = "variant01",// very high, arched
    HighSoft = "variant02",// high and slightly curved
    RaisedInner = "variant03",// raised toward the center
    RaisedFlat = "variant04",// raised and relatively straight
    NeutralFlat = "variant05",// flat, neither furrowed nor raised
    RelaxedLow = "variant06",// low and relaxed
    StraightMid = "variant07",// straight, mid height
    FurrowedMild = "variant08",// mildly furrowed
    FurrowedInner = "variant09",// furrowed toward the center
    FurrowedDeep = "variant10",// deeply furrowed, strong tension
    AngryV = "variant11",// V-shaped, marked anger
    WorriedArch = "variant12",// arched, expressing worry
    SadArch = "variant13"
}
/** Mouth shape and expression variants. */
export declare enum Mouth {
    BigSmile = "happy01",
    GrinWide = "happy02",
    OpenSmile = "happy03",
    SoftSmile = "happy04",
    QuietSmile = "happy05",
    SmirkLeft = "happy06",
    ShowingTeeth = "happy07",
    WideOpen = "happy08",
    PlayfulSmirk = "happy09",
    ContentGrin = "happy10",
    TenderSmile = "happy11",
    CuteSmile = "happy12",
    Gasping = "happy13",
    ExcitedOpen = "happy14",
    RelaxedSmile = "happy15",
    SlightSmile = "happy16",
    Composed = "happy17",
    CheekyTongue = "happy18",
    TinyFrown = "sad01",
    NeutralFlat = "sad02",
    Pouty = "sad03",
    Frown = "sad04",
    DeepFrown = "sad05",
    GrimaceLight = "sad06",
    GrimaceMid = "sad07",
    GrimaceDeep = "sad08",
    Scowl = "sad09"
}
/** Overall skull shape variants. */
export declare enum HeadShape {
    Standard = "variant01",
    Round = "variant02",
    Oval = "variant03",
    Angular = "variant04"
}
/** Nose shape variants. */
export declare enum Nose {
    Button = "variant01",
    Soft = "variant02",
    Pointed = "variant03",
    Wide = "variant04",
    Upturned = "variant05",
    Strong = "variant06"
}
/** Hairstyle variants, grouped by gender presentation and length. */
export declare enum Hair {
    BoyClassicA = "variant01",// classic smooth A
    BoyClassicB = "variant02",// classic smooth B
    BoyClassicC = "variant03",// classic smooth C
    BoyClassicD = "variant04",// classic smooth D
    BoyVolumeTop = "variant05",// volume on top
    BoySidePart = "variant06",// side part
    BoyTextured = "variant07",// short textured
    BoyFringe = "variant08",// front fringe
    BoyShaggy = "variant09",// long shaggy
    BoyCurlyShort = "variant10",// short curly
    BoySweepBack = "variant11",// swept back
    BoyMessy = "variant12",// messy/tousled
    GirlShortSleek = "variant13",// short sleek
    GirlTopBun = "variant14",// top bun
    GirlLongStraight = "variant15",// long straight
    GirlShortVolume = "variant16",// short with volume
    GirlWavyMid = "variant18",// wavy mid-length
    GirlPixieCut = "variant20",// pixie cut
    GirlLongAsym = "variant21",// long asymmetric
    GirlMidVolume = "variant24",// mid-length with volume
    BoyMidFlatFringe = "variant17",// mid-length flat with fringe
    BoyMidDarkSweep = "variant19",// mid-length dark swept
    BoyWavyMid = "variant23",// wavy mid-length male
    CurlyShortUnisex = "variant22",// short curly unisex
    PunkMohawk = "variant27",// punk mohawk
    BaldShaved = "variant25",// bald / shaved
    BoyNeatShort = "variant28",// neat short
    BoyBuzzCut = "variant34",// buzz cut
    BoySlickedPony = "variant36",// slicked side ponytail
    BoyMidParted = "variant39",// mid-length parted
    BoySpiky = "variant43",// spiky
    BoyCleanShort = "variant44",// clean short
    BoySmoothShort = "variant47",// smooth short
    BoyFringeShort = "variant48",// short fringe
    GirlDoubleBuns = "variant26",// double buns
    GirlPonytailLow = "variant29",// low ponytail
    GirlShortChic = "variant30",// short chic
    GirlHighPonytail = "variant31",// high ponytail
    GirlMidSidePart = "variant32",// mid-length side part
    GirlLongFlat = "variant33",// long flat
    GirlLongWavy = "variant35",// long wavy
    GirlWavyLoose = "variant37",// loose wavy
    GirlBunNeat = "variant38",// neat bun
    GirlShortAsym = "variant40",// short asymmetric
    GirlMidWavySide = "variant41",// wavy mid-length side
    GirlHighBun = "variant42",// high bun
    GirlBunFluffy = "variant45",// fluffy bun
    GirlBunTight = "variant46"
}
/** All hairstyles associated with male gender presentation. */
export declare const HairMale: Hair[];
/** All hairstyles associated with female gender presentation. */
export declare const HairFemale: Hair[];
/** Hairstyles suitable for any gender presentation. */
export declare const HairUnisex: Hair[];
/** Bald / fully shaved hairstyles. */
export declare const HairBald: Hair[];
/** Glasses style variants. */
export declare enum Glasses {
    None = "none",
    Round = "variant01",
    Square = "variant02",
    CatEye = "variant03",
    Rimless = "variant04",
    Thick = "variant05"
}
/** Earring style variants. */
export declare enum Earrings {
    None = "none",
    Studs = "variant01",
    Hoops = "variant02",
    Drops = "variant03"
}
/** Beard style variants. */
export declare enum Beard {
    None = "none",
    Stubble = "variant01",
    FullBeard = "variant02"
}
/** Hair accessory variants. */
export declare enum HairAccessory {
    None = "none",
    Flowers = "flowers"
}
/** Skin tone variants (hex values without `#`). */
export declare enum SkinColor {
    Porcelain = "ffdbb4",// very light, rosy
    Light = "edb98a",// light warm
    Warm = "fd9841",// warm orange
    Medium = "d08b5b",// medium beige
    Tan = "ae5d29",// tanned
    Brown = "614335",// brown
    DarkBrown = "4a312c",// dark brown
    Deep = "2c1b18"
}
/** Hair color variants (hex values without `#`). */
export declare enum HairColor {
    JetBlack = "0a0a0a",
    SoftBlack = "2c1b18",
    DarkBrown = "4a312c",
    Brown = "724133",
    LightBrown = "a55728",
    Auburn = "b7310a",
    Red = "c93305",
    Copper = "cb6025",
    HoneyBlonde = "b58143",
    GoldenBlonde = "daa520",
    LightBlonde = "fdff6b",
    Silver = "c0c0c0",
    Gray = "929598",
    White = "f5f5f5",
    PastelPink = "f48fb1",
    HotPink = "e91e90",
    Lilac = "ce93d8",
    DeepPurple = "7b1fa2",
    SkyBlue = "64b5f6",
    NavyBlue = "0d47a1",
    Mint = "80cbc4",
    ForestGreen = "388e3c"
}
/** Iris color variants (hex values without `#`). */
export declare enum EyeColor {
    Black = "0a0a0a",
    DarkBrown = "4a312c",
    Brown = "724133",
    Hazel = "8d6e63",
    Amber = "b07c4d",
    Green = "3d6b34",
    Blue = "3b6fa0",
    LightBlue = "6baed6",
    Gray = "737373"
}
/** Background color variants (hex values without `#`, or `"transparent"`). */
export declare enum BackgroundColor {
    SkyBlue = "b6e3f4",
    Lavender = "c0aede",
    Periwinkle = "d1d4f9",
    BabyPink = "ffd5dc",
    Peach = "ffdfbf",
    BrightBlue = "65c9ff",
    Mint = "c3ffd8",
    Cream = "fff9c4",
    Coral = "ffccbc",
    White = "ffffff",
    DarkNavy = "1a1a2e",
    Transparent = "transparent"
}
//# sourceMappingURL=lorelei-traits.d.ts.map