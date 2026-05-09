// ─────────────────────────────────────────────────────────────────────────────
// LORELEI AVATAR TRAIT ENUMS
// String values match DiceBear identifiers (e.g. "variant01").
// Keys are human-readable names for intuitive usage.
// ─────────────────────────────────────────────────────────────────────────────
// ── Eyes (24 variants) ────────────────────────────────────────────────────────
/** Eye shape and openness variants. */
export var Eyes;
(function (Eyes) {
    // Open, round, neutral to positive
    Eyes["Round"] = "variant01";
    Eyes["Wide"] = "variant02";
    Eyes["Soft"] = "variant03";
    Eyes["Startled"] = "variant04";
    Eyes["Gentle"] = "variant05";
    Eyes["Calm"] = "variant06";
    Eyes["Alert"] = "variant07";
    Eyes["Tender"] = "variant08";
    Eyes["Drowsy"] = "variant09";
    Eyes["Open"] = "variant10";
    // Narrowed, critical, furrowed
    Eyes["Squint"] = "variant11";
    Eyes["Skeptical"] = "variant12";
    Eyes["Glare"] = "variant13";
    Eyes["Dreamy"] = "variant14";
    Eyes["Bright"] = "variant15";
    Eyes["Halfclosed"] = "variant16";
    Eyes["Curious"] = "variant17";
    Eyes["Sleepy"] = "variant18";
    Eyes["Narrowed"] = "variant19";
    // Sad, drooping
    Eyes["Teary"] = "variant20";
    Eyes["Wary"] = "variant21";
    Eyes["Downcast"] = "variant22";
    Eyes["Melancholic"] = "variant23";
    // Wide from surprise
    Eyes["Shocked"] = "variant24";
})(Eyes || (Eyes = {}));
// ── Eyebrows (13 variants) ────────────────────────────────────────────────────
/** Eyebrow style variants. */
export var Eyebrows;
(function (Eyebrows) {
    // Raised — positive or surprised expressions
    Eyebrows["HighArched"] = "variant01";
    Eyebrows["HighSoft"] = "variant02";
    Eyebrows["RaisedInner"] = "variant03";
    Eyebrows["RaisedFlat"] = "variant04";
    // Flat / neutral
    Eyebrows["NeutralFlat"] = "variant05";
    Eyebrows["RelaxedLow"] = "variant06";
    Eyebrows["StraightMid"] = "variant07";
    // Furrowed — anger, tension
    Eyebrows["FurrowedMild"] = "variant08";
    Eyebrows["FurrowedInner"] = "variant09";
    Eyebrows["FurrowedDeep"] = "variant10";
    Eyebrows["AngryV"] = "variant11";
    // Sad / worried — arched downward
    Eyebrows["WorriedArch"] = "variant12";
    Eyebrows["SadArch"] = "variant13";
})(Eyebrows || (Eyebrows = {}));
// ── Mouth ─────────────────────────────────────────────────────────────────────
/** Mouth shape and expression variants. */
export var Mouth;
(function (Mouth) {
    // Wide open smiles
    Mouth["BigSmile"] = "happy01";
    Mouth["GrinWide"] = "happy02";
    Mouth["OpenSmile"] = "happy03";
    Mouth["SoftSmile"] = "happy04";
    Mouth["QuietSmile"] = "happy05";
    // Asymmetric / mischievous smiles
    Mouth["SmirkLeft"] = "happy06";
    Mouth["ShowingTeeth"] = "happy07";
    Mouth["WideOpen"] = "happy08";
    // Subtle / content smiles
    Mouth["PlayfulSmirk"] = "happy09";
    Mouth["ContentGrin"] = "happy10";
    Mouth["TenderSmile"] = "happy11";
    Mouth["CuteSmile"] = "happy12";
    // Open mouths
    Mouth["Gasping"] = "happy13";
    Mouth["ExcitedOpen"] = "happy14";
    Mouth["RelaxedSmile"] = "happy15";
    // Neutral
    Mouth["SlightSmile"] = "happy16";
    Mouth["Composed"] = "happy17";
    Mouth["CheekyTongue"] = "happy18";
    // Sad
    Mouth["TinyFrown"] = "sad01";
    Mouth["NeutralFlat"] = "sad02";
    Mouth["Pouty"] = "sad03";
    Mouth["Frown"] = "sad04";
    Mouth["DeepFrown"] = "sad05";
    Mouth["GrimaceLight"] = "sad06";
    Mouth["GrimaceMid"] = "sad07";
    Mouth["GrimaceDeep"] = "sad08";
    Mouth["Scowl"] = "sad09";
})(Mouth || (Mouth = {}));
// ── Head shape (4 variants) ───────────────────────────────────────────────────
/** Overall skull shape variants. */
export var HeadShape;
(function (HeadShape) {
    HeadShape["Standard"] = "variant01";
    HeadShape["Round"] = "variant02";
    HeadShape["Oval"] = "variant03";
    HeadShape["Angular"] = "variant04";
})(HeadShape || (HeadShape = {}));
// ── Nose (6 variants) ─────────────────────────────────────────────────────────
/** Nose shape variants. */
export var Nose;
(function (Nose) {
    Nose["Button"] = "variant01";
    Nose["Soft"] = "variant02";
    Nose["Pointed"] = "variant03";
    Nose["Wide"] = "variant04";
    Nose["Upturned"] = "variant05";
    Nose["Strong"] = "variant06";
})(Nose || (Nose = {}));
// ── Hairstyles (48 variants) ──────────────────────────────────────────────────
/** Hairstyle variants, grouped by gender presentation and length. */
export var Hair;
(function (Hair) {
    // ── Short male (v01–v12) ──────────────────────────────────────────────────
    Hair["BoyClassicA"] = "variant01";
    Hair["BoyClassicB"] = "variant02";
    Hair["BoyClassicC"] = "variant03";
    Hair["BoyClassicD"] = "variant04";
    Hair["BoyVolumeTop"] = "variant05";
    Hair["BoySidePart"] = "variant06";
    Hair["BoyTextured"] = "variant07";
    Hair["BoyFringe"] = "variant08";
    Hair["BoyShaggy"] = "variant09";
    Hair["BoyCurlyShort"] = "variant10";
    Hair["BoySweepBack"] = "variant11";
    Hair["BoyMessy"] = "variant12";
    // ── Short & medium female (v13–v16, v18, v20–v21, v24) ───────────────────
    Hair["GirlShortSleek"] = "variant13";
    Hair["GirlTopBun"] = "variant14";
    Hair["GirlLongStraight"] = "variant15";
    Hair["GirlShortVolume"] = "variant16";
    Hair["GirlWavyMid"] = "variant18";
    Hair["GirlPixieCut"] = "variant20";
    Hair["GirlLongAsym"] = "variant21";
    Hair["GirlMidVolume"] = "variant24";
    // ── Medium male (v17, v19, v23) ───────────────────────────────────────────
    Hair["BoyMidFlatFringe"] = "variant17";
    Hair["BoyMidDarkSweep"] = "variant19";
    Hair["BoyWavyMid"] = "variant23";
    // ── Unisex (v22, v27) ─────────────────────────────────────────────────────
    Hair["CurlyShortUnisex"] = "variant22";
    Hair["PunkMohawk"] = "variant27";
    // ── Bald / shaved (v25) ───────────────────────────────────────────────────
    Hair["BaldShaved"] = "variant25";
    // ── Additional short male (v28, v34, v36, v39, v43, v44, v47, v48) ───────
    Hair["BoyNeatShort"] = "variant28";
    Hair["BoyBuzzCut"] = "variant34";
    Hair["BoySlickedPony"] = "variant36";
    Hair["BoyMidParted"] = "variant39";
    Hair["BoySpiky"] = "variant43";
    Hair["BoyCleanShort"] = "variant44";
    Hair["BoySmoothShort"] = "variant47";
    Hair["BoyFringeShort"] = "variant48";
    // ── Long & tied female (v26, v29–v33, v35, v37–v38, v40–v42, v45–v46) ───
    Hair["GirlDoubleBuns"] = "variant26";
    Hair["GirlPonytailLow"] = "variant29";
    Hair["GirlShortChic"] = "variant30";
    Hair["GirlHighPonytail"] = "variant31";
    Hair["GirlMidSidePart"] = "variant32";
    Hair["GirlLongFlat"] = "variant33";
    Hair["GirlLongWavy"] = "variant35";
    Hair["GirlWavyLoose"] = "variant37";
    Hair["GirlBunNeat"] = "variant38";
    Hair["GirlShortAsym"] = "variant40";
    Hair["GirlMidWavySide"] = "variant41";
    Hair["GirlHighBun"] = "variant42";
    Hair["GirlBunFluffy"] = "variant45";
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
    Glasses["None"] = "none";
    Glasses["Round"] = "variant01";
    Glasses["Square"] = "variant02";
    Glasses["CatEye"] = "variant03";
    Glasses["Rimless"] = "variant04";
    Glasses["Thick"] = "variant05";
})(Glasses || (Glasses = {}));
// ── Earrings (3 variants) ─────────────────────────────────────────────────────
/** Earring style variants. */
export var Earrings;
(function (Earrings) {
    Earrings["None"] = "none";
    Earrings["Studs"] = "variant01";
    Earrings["Hoops"] = "variant02";
    Earrings["Drops"] = "variant03";
})(Earrings || (Earrings = {}));
// ── Beard (2 variants) ────────────────────────────────────────────────────────
/** Beard style variants. */
export var Beard;
(function (Beard) {
    Beard["None"] = "none";
    Beard["Stubble"] = "variant01";
    Beard["FullBeard"] = "variant02";
})(Beard || (Beard = {}));
// ── Hair accessories ──────────────────────────────────────────────────────────
/** Hair accessory variants. */
export var HairAccessory;
(function (HairAccessory) {
    HairAccessory["None"] = "none";
    HairAccessory["Flowers"] = "flowers";
})(HairAccessory || (HairAccessory = {}));
// ── Skin colors ───────────────────────────────────────────────────────────────
/** Skin tone variants (hex values without `#`). */
export var SkinColor;
(function (SkinColor) {
    SkinColor["Porcelain"] = "ffdbb4";
    SkinColor["Light"] = "edb98a";
    SkinColor["Warm"] = "fd9841";
    SkinColor["Medium"] = "d08b5b";
    SkinColor["Tan"] = "ae5d29";
    SkinColor["Brown"] = "614335";
    SkinColor["DarkBrown"] = "4a312c";
    SkinColor["Deep"] = "2c1b18";
})(SkinColor || (SkinColor = {}));
// ── Hair colors ───────────────────────────────────────────────────────────────
/** Hair color variants (hex values without `#`). */
export var HairColor;
(function (HairColor) {
    // Natural dark
    HairColor["JetBlack"] = "0a0a0a";
    HairColor["SoftBlack"] = "2c1b18";
    HairColor["DarkBrown"] = "4a312c";
    HairColor["Brown"] = "724133";
    // Natural light / red
    HairColor["LightBrown"] = "a55728";
    HairColor["Auburn"] = "b7310a";
    HairColor["Red"] = "c93305";
    HairColor["Copper"] = "cb6025";
    // Blondes
    HairColor["HoneyBlonde"] = "b58143";
    HairColor["GoldenBlonde"] = "daa520";
    HairColor["LightBlonde"] = "fdff6b";
    // White / grey
    HairColor["Silver"] = "c0c0c0";
    HairColor["Gray"] = "929598";
    HairColor["White"] = "f5f5f5";
    // Fantasy
    HairColor["PastelPink"] = "f48fb1";
    HairColor["HotPink"] = "e91e90";
    HairColor["Lilac"] = "ce93d8";
    HairColor["DeepPurple"] = "7b1fa2";
    HairColor["SkyBlue"] = "64b5f6";
    HairColor["NavyBlue"] = "0d47a1";
    HairColor["Mint"] = "80cbc4";
    HairColor["ForestGreen"] = "388e3c";
})(HairColor || (HairColor = {}));
// ── Eye colors ────────────────────────────────────────────────────────────────
/** Iris color variants (hex values without `#`). */
export var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "0a0a0a";
    EyeColor["DarkBrown"] = "4a312c";
    EyeColor["Brown"] = "724133";
    EyeColor["Hazel"] = "8d6e63";
    EyeColor["Amber"] = "b07c4d";
    EyeColor["Green"] = "3d6b34";
    EyeColor["Blue"] = "3b6fa0";
    EyeColor["LightBlue"] = "6baed6";
    EyeColor["Gray"] = "737373";
})(EyeColor || (EyeColor = {}));
// ── Background colors ─────────────────────────────────────────────────────────
/** Background color variants (hex values without `#`, or `"transparent"`). */
export var BackgroundColor;
(function (BackgroundColor) {
    BackgroundColor["SkyBlue"] = "b6e3f4";
    BackgroundColor["Lavender"] = "c0aede";
    BackgroundColor["Periwinkle"] = "d1d4f9";
    BackgroundColor["BabyPink"] = "ffd5dc";
    BackgroundColor["Peach"] = "ffdfbf";
    BackgroundColor["BrightBlue"] = "65c9ff";
    BackgroundColor["Mint"] = "c3ffd8";
    BackgroundColor["Cream"] = "fff9c4";
    BackgroundColor["Coral"] = "ffccbc";
    BackgroundColor["White"] = "ffffff";
    BackgroundColor["DarkNavy"] = "1a1a2e";
    BackgroundColor["Transparent"] = "transparent";
})(BackgroundColor || (BackgroundColor = {}));
