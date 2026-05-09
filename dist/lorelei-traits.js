// ─────────────────────────────────────────────────────────────────────────────
// LORELEI AVATAR TRAIT ENUMS
// String values match DiceBear identifiers (e.g. "variant01").
// Keys are human-readable names for intuitive usage.
// ─────────────────────────────────────────────────────────────────────────────
// ── Eyes (24 variants) ────────────────────────────────────────────────────────
/** Eye shape and openness variants. */
export var Eyes;
(function (Eyes) {
    /** Large open round eyes. */
    Eyes["Round"] = "variant01";
    /** Large expressive eyes. */
    Eyes["Wide"] = "variant02";
    /** Soft half-closed eyes. */
    Eyes["Soft"] = "variant03";
    /** Slightly widened eyes. */
    Eyes["Startled"] = "variant04";
    /** Calm and gentle eyes. */
    Eyes["Gentle"] = "variant05";
    /** Composed, open gaze. */
    Eyes["Calm"] = "variant06";
    /** Vivid and attentive gaze. */
    Eyes["Alert"] = "variant07";
    /** Tender half-closed gaze. */
    Eyes["Tender"] = "variant08";
    /** Heavy, sleepy eyes. */
    Eyes["Drowsy"] = "variant09";
    /** Frank and open eyes. */
    Eyes["Open"] = "variant10";
    /** Horizontally squinted eyes. */
    Eyes["Squint"] = "variant11";
    /** Wary, low-brow gaze. */
    Eyes["Skeptical"] = "variant12";
    /** Fixed, slightly hostile stare. */
    Eyes["Glare"] = "variant13";
    /** Dreamy half-closed eyes. */
    Eyes["Dreamy"] = "variant14";
    /** Sparkling open eyes. */
    Eyes["Bright"] = "variant15";
    /** Half-closed eyes, tired or sultry. */
    Eyes["Halfclosed"] = "variant16";
    /** Curious wide-open gaze. */
    Eyes["Curious"] = "variant17";
    /** Very closed, drowsy eyes. */
    Eyes["Sleepy"] = "variant18";
    /** Intentionally narrowed eyes. */
    Eyes["Narrowed"] = "variant19";
    /** Drooping outward eyes. */
    Eyes["Teary"] = "variant20";
    /** Fearful or wary gaze. */
    Eyes["Wary"] = "variant21";
    /** Downward, dejected gaze. */
    Eyes["Downcast"] = "variant22";
    /** Sad drooping eyes. */
    Eyes["Melancholic"] = "variant23";
    /** Wide open, shocked eyes. */
    Eyes["Shocked"] = "variant24";
})(Eyes || (Eyes = {}));
// ── Eyebrows (13 variants) ────────────────────────────────────────────────────
/** Eyebrow style variants. */
export var Eyebrows;
(function (Eyebrows) {
    /** Very high, arched eyebrows. */
    Eyebrows["HighArched"] = "variant01";
    /** High and slightly curved eyebrows. */
    Eyebrows["HighSoft"] = "variant02";
    /** Raised toward the center. */
    Eyebrows["RaisedInner"] = "variant03";
    /** Raised and relatively straight. */
    Eyebrows["RaisedFlat"] = "variant04";
    /** Flat, neither furrowed nor raised. */
    Eyebrows["NeutralFlat"] = "variant05";
    /** Low and relaxed eyebrows. */
    Eyebrows["RelaxedLow"] = "variant06";
    /** Straight, mid-height eyebrows. */
    Eyebrows["StraightMid"] = "variant07";
    /** Mildly furrowed eyebrows. */
    Eyebrows["FurrowedMild"] = "variant08";
    /** Furrowed toward the center. */
    Eyebrows["FurrowedInner"] = "variant09";
    /** Deeply furrowed, strong tension. */
    Eyebrows["FurrowedDeep"] = "variant10";
    /** V-shaped, marked anger. */
    Eyebrows["AngryV"] = "variant11";
    /** Arched, expressing worry. */
    Eyebrows["WorriedArch"] = "variant12";
    /** Arched downward, expressing sadness. */
    Eyebrows["SadArch"] = "variant13";
})(Eyebrows || (Eyebrows = {}));
// ── Mouth ─────────────────────────────────────────────────────────────────────
/** Mouth shape and expression variants. */
export var Mouth;
(function (Mouth) {
    /** Big, wide-open smile. */
    Mouth["BigSmile"] = "happy01";
    /** Wide grin with teeth showing. */
    Mouth["GrinWide"] = "happy02";
    /** Open smile expression. */
    Mouth["OpenSmile"] = "happy03";
    /** Soft, gentle smile. */
    Mouth["SoftSmile"] = "happy04";
    /** Quiet, subtle smile. */
    Mouth["QuietSmile"] = "happy05";
    /** Asymmetric smirk to the left. */
    Mouth["SmirkLeft"] = "happy06";
    /** Smile showing teeth prominently. */
    Mouth["ShowingTeeth"] = "happy07";
    /** Wide open mouth expression. */
    Mouth["WideOpen"] = "happy08";
    /** Playful smirk. */
    Mouth["PlayfulSmirk"] = "happy09";
    /** Content, satisfied grin. */
    Mouth["ContentGrin"] = "happy10";
    /** Tender, affectionate smile. */
    Mouth["TenderSmile"] = "happy11";
    /** Cute, innocent smile. */
    Mouth["CuteSmile"] = "happy12";
    /** Gasping open mouth. */
    Mouth["Gasping"] = "happy13";
    /** Excited, wide-open mouth. */
    Mouth["ExcitedOpen"] = "happy14";
    /** Relaxed, comfortable smile. */
    Mouth["RelaxedSmile"] = "happy15";
    /** Slight, minimal smile. */
    Mouth["SlightSmile"] = "happy16";
    /** Composed, neutral mouth. */
    Mouth["Composed"] = "happy17";
    /** Cheeky expression with tongue. */
    Mouth["CheekyTongue"] = "happy18";
    /** Tiny frown. */
    Mouth["TinyFrown"] = "sad01";
    /** Neutral flat mouth. */
    Mouth["NeutralFlat"] = "sad02";
    /** Pouty mouth expression. */
    Mouth["Pouty"] = "sad03";
    /** Frown expression. */
    Mouth["Frown"] = "sad04";
    /** Deep frown, strong sadness. */
    Mouth["DeepFrown"] = "sad05";
    /** Light grimace. */
    Mouth["GrimaceLight"] = "sad06";
    /** Mid-level grimace. */
    Mouth["GrimaceMid"] = "sad07";
    /** Deep grimace expression. */
    Mouth["GrimaceDeep"] = "sad08";
    /** Scowl expression. */
    Mouth["Scowl"] = "sad09";
})(Mouth || (Mouth = {}));
// ── Head shape (4 variants) ───────────────────────────────────────────────────
/** Overall skull shape variants. */
export var HeadShape;
(function (HeadShape) {
    /** Standard head shape. */
    HeadShape["Standard"] = "variant01";
    /** Round head shape. */
    HeadShape["Round"] = "variant02";
    /** Oval head shape. */
    HeadShape["Oval"] = "variant03";
    /** Angular head shape. */
    HeadShape["Angular"] = "variant04";
})(HeadShape || (HeadShape = {}));
// ── Nose (6 variants) ─────────────────────────────────────────────────────────
/** Nose shape variants. */
export var Nose;
(function (Nose) {
    /** Button nose shape. */
    Nose["Button"] = "variant01";
    /** Soft nose shape. */
    Nose["Soft"] = "variant02";
    /** Pointed nose shape. */
    Nose["Pointed"] = "variant03";
    /** Wide nose shape. */
    Nose["Wide"] = "variant04";
    /** Upturned nose shape. */
    Nose["Upturned"] = "variant05";
    /** Strong nose shape. */
    Nose["Strong"] = "variant06";
})(Nose || (Nose = {}));
// ── Hairstyles (48 variants) ──────────────────────────────────────────────────
/** Hairstyle variants, grouped by gender presentation and length. */
export var Hair;
(function (Hair) {
    /** Classic smooth male hairstyle A. */
    Hair["BoyClassicA"] = "variant01";
    /** Classic smooth male hairstyle B. */
    Hair["BoyClassicB"] = "variant02";
    /** Classic smooth male hairstyle C. */
    Hair["BoyClassicC"] = "variant03";
    /** Classic smooth male hairstyle D. */
    Hair["BoyClassicD"] = "variant04";
    /** Short male hair with volume on top. */
    Hair["BoyVolumeTop"] = "variant05";
    /** Short male hair with side part. */
    Hair["BoySidePart"] = "variant06";
    /** Short textured male hairstyle. */
    Hair["BoyTextured"] = "variant07";
    /** Short male hair with front fringe. */
    Hair["BoyFringe"] = "variant08";
    /** Long shaggy male hairstyle. */
    Hair["BoyShaggy"] = "variant09";
    /** Short curly male hairstyle. */
    Hair["BoyCurlyShort"] = "variant10";
    /** Short male hair swept back. */
    Hair["BoySweepBack"] = "variant11";
    /** Messy, tousled male hairstyle. */
    Hair["BoyMessy"] = "variant12";
    /** Short sleek female hairstyle. */
    Hair["GirlShortSleek"] = "variant13";
    /** Female hairstyle with top bun. */
    Hair["GirlTopBun"] = "variant14";
    /** Long straight female hairstyle. */
    Hair["GirlLongStraight"] = "variant15";
    /** Short female hair with volume. */
    Hair["GirlShortVolume"] = "variant16";
    /** Wavy mid-length female hairstyle. */
    Hair["GirlWavyMid"] = "variant18";
    /** Pixie cut female hairstyle. */
    Hair["GirlPixieCut"] = "variant20";
    /** Long asymmetric female hairstyle. */
    Hair["GirlLongAsym"] = "variant21";
    /** Mid-length female hair with volume. */
    Hair["GirlMidVolume"] = "variant24";
    /** Mid-length male hair, flat with fringe. */
    Hair["BoyMidFlatFringe"] = "variant17";
    /** Mid-length male hair, dark swept. */
    Hair["BoyMidDarkSweep"] = "variant19";
    /** Wavy mid-length male hairstyle. */
    Hair["BoyWavyMid"] = "variant23";
    /** Short curly unisex hairstyle. */
    Hair["CurlyShortUnisex"] = "variant22";
    /** Punk mohawk hairstyle. */
    Hair["PunkMohawk"] = "variant27";
    /** Bald or fully shaved hairstyle. */
    Hair["BaldShaved"] = "variant25";
    /** Neat short male hairstyle. */
    Hair["BoyNeatShort"] = "variant28";
    /** Buzz cut male hairstyle. */
    Hair["BoyBuzzCut"] = "variant34";
    /** Slicked side ponytail male hairstyle. */
    Hair["BoySlickedPony"] = "variant36";
    /** Mid-length parted male hairstyle. */
    Hair["BoyMidParted"] = "variant39";
    /** Spiky male hairstyle. */
    Hair["BoySpiky"] = "variant43";
    /** Clean short male hairstyle. */
    Hair["BoyCleanShort"] = "variant44";
    /** Smooth short male hairstyle. */
    Hair["BoySmoothShort"] = "variant47";
    /** Short fringe male hairstyle. */
    Hair["BoyFringeShort"] = "variant48";
    /** Female hairstyle with double buns. */
    Hair["GirlDoubleBuns"] = "variant26";
    /** Low ponytail female hairstyle. */
    Hair["GirlPonytailLow"] = "variant29";
    /** Short chic female hairstyle. */
    Hair["GirlShortChic"] = "variant30";
    /** High ponytail female hairstyle. */
    Hair["GirlHighPonytail"] = "variant31";
    /** Mid-length side-parted female hairstyle. */
    Hair["GirlMidSidePart"] = "variant32";
    /** Long flat female hairstyle. */
    Hair["GirlLongFlat"] = "variant33";
    /** Long wavy female hairstyle. */
    Hair["GirlLongWavy"] = "variant35";
    /** Loose wavy female hairstyle. */
    Hair["GirlWavyLoose"] = "variant37";
    /** Neat bun female hairstyle. */
    Hair["GirlBunNeat"] = "variant38";
    /** Short asymmetric female hairstyle. */
    Hair["GirlShortAsym"] = "variant40";
    /** Wavy mid-length side female hairstyle. */
    Hair["GirlMidWavySide"] = "variant41";
    /** High bun female hairstyle. */
    Hair["GirlHighBun"] = "variant42";
    /** Fluffy bun female hairstyle. */
    Hair["GirlBunFluffy"] = "variant45";
    /** Tight bun female hairstyle. */
    Hair["GirlBunTight"] = "variant46";
})(Hair || (Hair = {}));
// ── Utility hair groups ───────────────────────────────────────────────────────
/** All hairstyles associated with male gender presentation. */
export const HairMale = [
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
export const HairFemale = [
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
export const HairUnisex = [Hair.CurlyShortUnisex, Hair.PunkMohawk];
/** Bald / fully shaved hairstyles. */
export const HairBald = [Hair.BaldShaved];
// ── Glasses (5 variants) ──────────────────────────────────────────────────────
/** Glasses style variants. */
export var Glasses;
(function (Glasses) {
    /** No glasses. */
    Glasses["None"] = "none";
    /** Round frame glasses. */
    Glasses["Round"] = "variant01";
    /** Square frame glasses. */
    Glasses["Square"] = "variant02";
    /** Cat-eye style glasses. */
    Glasses["CatEye"] = "variant03";
    /** Rimless glasses. */
    Glasses["Rimless"] = "variant04";
    /** Thick frame glasses. */
    Glasses["Thick"] = "variant05";
})(Glasses || (Glasses = {}));
// ── Earrings (3 variants) ─────────────────────────────────────────────────────
/** Earring style variants. */
export var Earrings;
(function (Earrings) {
    /** No earrings. */
    Earrings["None"] = "none";
    /** Stud earrings. */
    Earrings["Studs"] = "variant01";
    /** Hoop earrings. */
    Earrings["Hoops"] = "variant02";
    /** Drop earrings. */
    Earrings["Drops"] = "variant03";
})(Earrings || (Earrings = {}));
// ── Beard (2 variants) ────────────────────────────────────────────────────────
/** Beard style variants. */
export var Beard;
(function (Beard) {
    /** No beard. */
    Beard["None"] = "none";
    /** Stubble beard style. */
    Beard["Stubble"] = "variant01";
    /** Full beard style. */
    Beard["FullBeard"] = "variant02";
})(Beard || (Beard = {}));
// ── Hair accessories ──────────────────────────────────────────────────────────
/** Hair accessory variants. */
export var HairAccessory;
(function (HairAccessory) {
    /** No hair accessory. */
    HairAccessory["None"] = "none";
    /** Flowers hair accessory. */
    HairAccessory["Flowers"] = "flowers";
})(HairAccessory || (HairAccessory = {}));
// ── Skin colors ───────────────────────────────────────────────────────────────
/** Skin tone variants (hex values without `#`). */
export var SkinColor;
(function (SkinColor) {
    /** Very light, rosy skin tone. */
    SkinColor["Porcelain"] = "ffdbb4";
    /** Light warm skin tone. */
    SkinColor["Light"] = "edb98a";
    /** Warm orange skin tone. */
    SkinColor["Warm"] = "fd9841";
    /** Medium beige skin tone. */
    SkinColor["Medium"] = "d08b5b";
    /** Tanned skin tone. */
    SkinColor["Tan"] = "ae5d29";
    /** Brown skin tone. */
    SkinColor["Brown"] = "614335";
    /** Dark brown skin tone. */
    SkinColor["DarkBrown"] = "4a312c";
    /** Very dark skin tone. */
    SkinColor["Deep"] = "2c1b18";
})(SkinColor || (SkinColor = {}));
// ── Hair colors ───────────────────────────────────────────────────────────────
/** Hair color variants (hex values without `#`). */
export var HairColor;
(function (HairColor) {
    /** Jet black hair color. */
    HairColor["JetBlack"] = "0a0a0a";
    /** Soft black hair color. */
    HairColor["SoftBlack"] = "2c1b18";
    /** Dark brown hair color. */
    HairColor["DarkBrown"] = "4a312c";
    /** Brown hair color. */
    HairColor["Brown"] = "724133";
    /** Light brown hair color. */
    HairColor["LightBrown"] = "a55728";
    /** Auburn hair color. */
    HairColor["Auburn"] = "b7310a";
    /** Red hair color. */
    HairColor["Red"] = "c93305";
    /** Copper hair color. */
    HairColor["Copper"] = "cb6025";
    /** Honey blonde hair color. */
    HairColor["HoneyBlonde"] = "b58143";
    /** Golden blonde hair color. */
    HairColor["GoldenBlonde"] = "daa520";
    /** Light blonde hair color. */
    HairColor["LightBlonde"] = "fdff6b";
    /** Silver hair color. */
    HairColor["Silver"] = "c0c0c0";
    /** Gray hair color. */
    HairColor["Gray"] = "929598";
    /** White hair color. */
    HairColor["White"] = "f5f5f5";
    /** Pastel pink fantasy hair color. */
    HairColor["PastelPink"] = "f48fb1";
    /** Hot pink fantasy hair color. */
    HairColor["HotPink"] = "e91e90";
    /** Lilac fantasy hair color. */
    HairColor["Lilac"] = "ce93d8";
    /** Deep purple fantasy hair color. */
    HairColor["DeepPurple"] = "7b1fa2";
    /** Sky blue fantasy hair color. */
    HairColor["SkyBlue"] = "64b5f6";
    /** Navy blue fantasy hair color. */
    HairColor["NavyBlue"] = "0d47a1";
    /** Mint fantasy hair color. */
    HairColor["Mint"] = "80cbc4";
    /** Forest green fantasy hair color. */
    HairColor["ForestGreen"] = "388e3c";
})(HairColor || (HairColor = {}));
// ── Eye colors ────────────────────────────────────────────────────────────────
/** Iris color variants (hex values without `#`). */
export var EyeColor;
(function (EyeColor) {
    /** Black iris color. */
    EyeColor["Black"] = "0a0a0a";
    /** Dark brown iris color. */
    EyeColor["DarkBrown"] = "4a312c";
    /** Brown iris color. */
    EyeColor["Brown"] = "724133";
    /** Hazel iris color. */
    EyeColor["Hazel"] = "8d6e63";
    /** Amber iris color. */
    EyeColor["Amber"] = "b07c4d";
    /** Green iris color. */
    EyeColor["Green"] = "3d6b34";
    /** Blue iris color. */
    EyeColor["Blue"] = "3b6fa0";
    /** Light blue iris color. */
    EyeColor["LightBlue"] = "6baed6";
    /** Gray iris color. */
    EyeColor["Gray"] = "737373";
})(EyeColor || (EyeColor = {}));
// ── Background colors ─────────────────────────────────────────────────────────
/** Background color variants (hex values without `#`, or `"transparent"`). */
export var BackgroundColor;
(function (BackgroundColor) {
    /** Sky blue background color. */
    BackgroundColor["SkyBlue"] = "b6e3f4";
    /** Lavender background color. */
    BackgroundColor["Lavender"] = "c0aede";
    /** Periwinkle background color. */
    BackgroundColor["Periwinkle"] = "d1d4f9";
    /** Baby pink background color. */
    BackgroundColor["BabyPink"] = "ffd5dc";
    /** Peach background color. */
    BackgroundColor["Peach"] = "ffdfbf";
    /** Bright blue background color. */
    BackgroundColor["BrightBlue"] = "65c9ff";
    /** Mint background color. */
    BackgroundColor["Mint"] = "c3ffd8";
    /** Cream background color. */
    BackgroundColor["Cream"] = "fff9c4";
    /** Coral background color. */
    BackgroundColor["Coral"] = "ffccbc";
    /** White background color. */
    BackgroundColor["White"] = "ffffff";
    /** Dark navy background color. */
    BackgroundColor["DarkNavy"] = "1a1a2e";
    /** Transparent background. */
    BackgroundColor["Transparent"] = "transparent";
})(BackgroundColor || (BackgroundColor = {}));
