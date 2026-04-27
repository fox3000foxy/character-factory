// ─────────────────────────────────────────────────────────────────────────────
// LORELEI AVATAR ENUMS
// Les valeurs string correspondent aux identifiants DiceBear (ex: "variant01").
// Les clés sont des noms humains lisibles pour un usage intuitif.
// ─────────────────────────────────────────────────────────────────────────────
// ── Yeux (24 variants) ────────────────────────────────────────────────────────
export var Eyes;
(function (Eyes) {
    // Ouverts, ronds, neutres à positifs
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
    // Plissés, critiques, froncés
    Eyes["Squint"] = "variant11";
    Eyes["Skeptical"] = "variant12";
    Eyes["Glare"] = "variant13";
    Eyes["Dreamy"] = "variant14";
    Eyes["Bright"] = "variant15";
    Eyes["Halfclosed"] = "variant16";
    Eyes["Curious"] = "variant17";
    Eyes["Sleepy"] = "variant18";
    Eyes["Narrowed"] = "variant19";
    // Tristes, tombants
    Eyes["Teary"] = "variant20";
    Eyes["Wary"] = "variant21";
    Eyes["Downcast"] = "variant22";
    Eyes["Melancholic"] = "variant23";
    // Écarquillés de surprise
    Eyes["Shocked"] = "variant24";
})(Eyes || (Eyes = {}));
// ── Sourcils (13 variants) ────────────────────────────────────────────────────
export var Eyebrows;
(function (Eyebrows) {
    // Relevés – expressions positives ou surprises
    Eyebrows["HighArched"] = "variant01";
    Eyebrows["HighSoft"] = "variant02";
    Eyebrows["RaisedInner"] = "variant03";
    Eyebrows["RaisedFlat"] = "variant04";
    // Plats / neutres
    Eyebrows["NeutralFlat"] = "variant05";
    Eyebrows["RelaxedLow"] = "variant06";
    Eyebrows["StraightMid"] = "variant07";
    // Froncés – colère, tension
    Eyebrows["FurrowedMild"] = "variant08";
    Eyebrows["FurrowedInner"] = "variant09";
    Eyebrows["FurrowedDeep"] = "variant10";
    Eyebrows["AngryV"] = "variant11";
    // Tristes / inquiets – arqués vers le bas
    Eyebrows["WorriedArch"] = "variant12";
    Eyebrows["SadArch"] = "variant13";
})(Eyebrows || (Eyebrows = {}));
// ── Bouche ────────────────────────────────────────────────────────────────────
export var Mouth;
(function (Mouth) {
    // Sourires larges et ouverts
    Mouth["BigSmile"] = "happy01";
    Mouth["GrinWide"] = "happy02";
    Mouth["OpenSmile"] = "happy03";
    Mouth["SoftSmile"] = "happy04";
    Mouth["QuietSmile"] = "happy05";
    // Sourires asymétriques / malicieux
    Mouth["SmirkLeft"] = "happy06";
    Mouth["ShowingTeeth"] = "happy07";
    Mouth["WideOpen"] = "happy08";
    // Sourires subtils / contents
    Mouth["PlayfulSmirk"] = "happy09";
    Mouth["ContentGrin"] = "happy10";
    Mouth["TenderSmile"] = "happy11";
    Mouth["CuteSmile"] = "happy12";
    // Bouches ouvertes
    Mouth["Gasping"] = "happy13";
    Mouth["ExcitedOpen"] = "happy14";
    Mouth["RelaxedSmile"] = "happy15";
    // Neutres
    Mouth["SlightSmile"] = "happy16";
    Mouth["Composed"] = "happy17";
    Mouth["CheekyTongue"] = "happy18";
    // Tristes
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
// ── Forme de tête (4 variants) ────────────────────────────────────────────────
export var HeadShape;
(function (HeadShape) {
    HeadShape["Standard"] = "variant01";
    HeadShape["Round"] = "variant02";
    HeadShape["Oval"] = "variant03";
    HeadShape["Angular"] = "variant04";
})(HeadShape || (HeadShape = {}));
// ── Nez (6 variants) ──────────────────────────────────────────────────────────
export var Nose;
(function (Nose) {
    Nose["Button"] = "variant01";
    Nose["Soft"] = "variant02";
    Nose["Pointed"] = "variant03";
    Nose["Wide"] = "variant04";
    Nose["Upturned"] = "variant05";
    Nose["Strong"] = "variant06";
})(Nose || (Nose = {}));
// ── Coiffures (48 variants) ───────────────────────────────────────────────────
export var Hair;
(function (Hair) {
    // ── Masculin court (v01–v12) ─────────────────────────────────────────────
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
    // ── Féminin court & mi-long (v13–v16, v18, v20–v21, v24) ────────────────
    Hair["GirlShortSleek"] = "variant13";
    Hair["GirlTopBun"] = "variant14";
    Hair["GirlLongStraight"] = "variant15";
    Hair["GirlShortVolume"] = "variant16";
    Hair["GirlWavyMid"] = "variant18";
    Hair["GirlPixieCut"] = "variant20";
    Hair["GirlLongAsym"] = "variant21";
    Hair["GirlMidVolume"] = "variant24";
    // ── Masculin mi-long (v17, v19, v23) ─────────────────────────────────────
    Hair["BoyMidFlatFringe"] = "variant17";
    Hair["BoyMidDarkSweep"] = "variant19";
    Hair["BoyWavyMid"] = "variant23";
    // ── Unisex (v22, v27) ────────────────────────────────────────────────────
    Hair["CurlyShortUnisex"] = "variant22";
    Hair["PunkMohawk"] = "variant27";
    // ── Calvitie / rasé (v25) ────────────────────────────────────────────────
    Hair["BaldShaved"] = "variant25";
    // ── Masculin court supplémentaire (v28, v34, v36, v39, v43, v44, v47, v48) ──
    Hair["BoyNeatShort"] = "variant28";
    Hair["BoyBuzzCut"] = "variant34";
    Hair["BoySlickedPony"] = "variant36";
    Hair["BoyMidParted"] = "variant39";
    Hair["BoySpiky"] = "variant43";
    Hair["BoyCleanShort"] = "variant44";
    Hair["BoySmoothShort"] = "variant47";
    Hair["BoyFringeShort"] = "variant48";
    // ── Féminin long & attaché (v26, v29–v33, v35, v37–v38, v40–v42, v45–v46) ──
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
// ── Groupes utilitaires ───────────────────────────────────────────────────────
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
export const HairUnisex = [Hair.CurlyShortUnisex, Hair.PunkMohawk];
export const HairBald = [Hair.BaldShaved];
// ── Lunettes (5 variants) ─────────────────────────────────────────────────────
export var Glasses;
(function (Glasses) {
    Glasses["None"] = "none";
    Glasses["Round"] = "variant01";
    Glasses["Square"] = "variant02";
    Glasses["CatEye"] = "variant03";
    Glasses["Rimless"] = "variant04";
    Glasses["Thick"] = "variant05";
})(Glasses || (Glasses = {}));
// ── Boucles d'oreilles (3 variants) ──────────────────────────────────────────
export var Earrings;
(function (Earrings) {
    Earrings["None"] = "none";
    Earrings["Studs"] = "variant01";
    Earrings["Hoops"] = "variant02";
    Earrings["Drops"] = "variant03";
})(Earrings || (Earrings = {}));
// ── Barbe (2 variants) ────────────────────────────────────────────────────────
export var Beard;
(function (Beard) {
    Beard["None"] = "none";
    Beard["Stubble"] = "variant01";
    Beard["FullBeard"] = "variant02";
})(Beard || (Beard = {}));
// ── Accessoires cheveux ───────────────────────────────────────────────────────
export var HairAccessory;
(function (HairAccessory) {
    HairAccessory["None"] = "none";
    HairAccessory["Flowers"] = "flowers";
})(HairAccessory || (HairAccessory = {}));
// ── Couleurs de peau ──────────────────────────────────────────────────────────
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
// ── Couleurs de cheveux ───────────────────────────────────────────────────────
export var HairColor;
(function (HairColor) {
    // Naturels foncés
    HairColor["JetBlack"] = "0a0a0a";
    HairColor["SoftBlack"] = "2c1b18";
    HairColor["DarkBrown"] = "4a312c";
    HairColor["Brown"] = "724133";
    // Naturels clairs / roux
    HairColor["LightBrown"] = "a55728";
    HairColor["Auburn"] = "b7310a";
    HairColor["Red"] = "c93305";
    HairColor["Copper"] = "cb6025";
    // Blonds
    HairColor["HoneyBlonde"] = "b58143";
    HairColor["GoldenBlonde"] = "daa520";
    HairColor["LightBlonde"] = "fdff6b";
    // Blancs / gris
    HairColor["Silver"] = "c0c0c0";
    HairColor["Gray"] = "929598";
    HairColor["White"] = "f5f5f5";
    // Fantaisie
    HairColor["PastelPink"] = "f48fb1";
    HairColor["HotPink"] = "e91e90";
    HairColor["Lilac"] = "ce93d8";
    HairColor["DeepPurple"] = "7b1fa2";
    HairColor["SkyBlue"] = "64b5f6";
    HairColor["NavyBlue"] = "0d47a1";
    HairColor["Mint"] = "80cbc4";
    HairColor["ForestGreen"] = "388e3c";
})(HairColor || (HairColor = {}));
// ── Couleurs des yeux ─────────────────────────────────────────────────────────
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
// ── Couleurs de fond ──────────────────────────────────────────────────────────
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
// ─────────────────────────────────────────────────────────────────────────────
// MOOD SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
export var Mood;
(function (Mood) {
    Mood["Happy"] = "HAPPY";
    Mood["Excited"] = "EXCITED";
    Mood["Loving"] = "LOVING";
    Mood["Playful"] = "PLAYFUL";
    Mood["Proud"] = "PROUD";
    Mood["Neutral"] = "NEUTRAL";
    Mood["Sleepy"] = "SLEEPY";
    Mood["Bored"] = "BORED";
    Mood["Confused"] = "CONFUSED";
    Mood["Sad"] = "SAD";
    Mood["Angry"] = "ANGRY";
    Mood["Scared"] = "SCARED";
    Mood["Surprised"] = "SURPRISED";
    Mood["Silly"] = "SILLY";
})(Mood || (Mood = {}));
export const MOOD_POOLS = {
    [Mood.Happy]: {
        eyes: [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Bright, Eyes.Open],
        eyebrows: [Eyebrows.HighSoft, Eyebrows.RaisedInner, Eyebrows.HighArched],
        mouth: [Mouth.BigSmile, Mouth.OpenSmile, Mouth.GrinWide, Mouth.TenderSmile, Mouth.SoftSmile],
    },
    [Mood.Excited]: {
        eyes: [Eyes.Shocked, Eyes.Startled, Eyes.Alert, Eyes.Wide],
        eyebrows: [Eyebrows.HighArched, Eyebrows.HighSoft],
        mouth: [Mouth.WideOpen, Mouth.ExcitedOpen, Mouth.Gasping, Mouth.ShowingTeeth],
    },
    [Mood.Loving]: {
        eyes: [Eyes.Soft, Eyes.Gentle, Eyes.Tender, Eyes.Dreamy],
        eyebrows: [Eyebrows.HighSoft, Eyebrows.RaisedInner, Eyebrows.RelaxedLow],
        mouth: [Mouth.TenderSmile, Mouth.CuteSmile, Mouth.QuietSmile, Mouth.SoftSmile],
    },
    [Mood.Playful]: {
        eyes: [Eyes.Curious, Eyes.Alert, Eyes.Wide, Eyes.Startled],
        eyebrows: [Eyebrows.HighArched, Eyebrows.FurrowedInner, Eyebrows.StraightMid],
        mouth: [Mouth.SmirkLeft, Mouth.PlayfulSmirk, Mouth.CheekyTongue, Mouth.ContentGrin],
    },
    [Mood.Proud]: {
        eyes: [Eyes.Round, Eyes.Calm, Eyes.Bright, Eyes.Open],
        eyebrows: [Eyebrows.RaisedFlat, Eyebrows.NeutralFlat, Eyebrows.StraightMid],
        mouth: [Mouth.ContentGrin, Mouth.Composed, Mouth.RelaxedSmile, Mouth.OpenSmile],
    },
    [Mood.Neutral]: {
        eyes: [Eyes.Calm, Eyes.Open, Eyes.Alert, Eyes.Round],
        eyebrows: [Eyebrows.NeutralFlat, Eyebrows.RelaxedLow, Eyebrows.StraightMid],
        mouth: [Mouth.SlightSmile, Mouth.Composed, Mouth.TinyFrown, Mouth.NeutralFlat],
    },
    [Mood.Sleepy]: {
        eyes: [Eyes.Drowsy, Eyes.Halfclosed, Eyes.Sleepy, Eyes.Soft],
        eyebrows: [Eyebrows.RelaxedLow, Eyebrows.StraightMid, Eyebrows.WorriedArch],
        mouth: [Mouth.SlightSmile, Mouth.Composed, Mouth.TinyFrown],
    },
    [Mood.Bored]: {
        eyes: [Eyes.Squint, Eyes.Halfclosed, Eyes.Narrowed, Eyes.Drowsy],
        eyebrows: [Eyebrows.NeutralFlat, Eyebrows.RelaxedLow, Eyebrows.WorriedArch],
        mouth: [Mouth.NeutralFlat, Mouth.TinyFrown, Mouth.Pouty],
    },
    [Mood.Confused]: {
        eyes: [Eyes.Curious, Eyes.Wary, Eyes.Wide, Eyes.Skeptical],
        eyebrows: [Eyebrows.WorriedArch, Eyebrows.FurrowedInner, Eyebrows.FurrowedMild],
        mouth: [Mouth.Pouty, Mouth.NeutralFlat, Mouth.TinyFrown],
    },
    [Mood.Sad]: {
        eyes: [Eyes.Melancholic, Eyes.Downcast, Eyes.Teary, Eyes.Soft],
        eyebrows: [Eyebrows.SadArch, Eyebrows.WorriedArch],
        mouth: [Mouth.Frown, Mouth.DeepFrown, Mouth.Pouty, Mouth.TinyFrown],
    },
    [Mood.Angry]: {
        eyes: [Eyes.Glare, Eyes.Squint, Eyes.Narrowed, Eyes.Skeptical],
        eyebrows: [Eyebrows.AngryV, Eyebrows.FurrowedDeep, Eyebrows.FurrowedInner],
        mouth: [Mouth.GrimaceMid, Mouth.GrimaceDeep, Mouth.Scowl, Mouth.GrimaceLight],
    },
    [Mood.Scared]: {
        eyes: [Eyes.Shocked, Eyes.Startled, Eyes.Wary, Eyes.Wide],
        eyebrows: [Eyebrows.WorriedArch, Eyebrows.HighArched, Eyebrows.FurrowedMild],
        mouth: [Mouth.Gasping, Mouth.Pouty, Mouth.Frown, Mouth.NeutralFlat],
    },
    [Mood.Surprised]: {
        eyes: [Eyes.Shocked, Eyes.Wide, Eyes.Alert, Eyes.Startled],
        eyebrows: [Eyebrows.HighArched, Eyebrows.HighSoft, Eyebrows.RaisedInner],
        mouth: [Mouth.Gasping, Mouth.WideOpen, Mouth.ExcitedOpen],
    },
    [Mood.Silly]: {
        eyes: [Eyes.Wary, Eyes.Curious, Eyes.Startled, Eyes.Shocked],
        eyebrows: [Eyebrows.HighArched, Eyebrows.FurrowedInner, Eyebrows.RaisedInner],
        mouth: [Mouth.CheekyTongue, Mouth.PlayfulSmirk, Mouth.WideOpen, Mouth.ShowingTeeth],
    },
};
// ─────────────────────────────────────────────────────────────────────────────
// GENDER SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
export var Gender;
(function (Gender) {
    Gender["Female"] = "FEMALE";
    Gender["Male"] = "MALE";
    Gender["Neutral"] = "NEUTRAL";
})(Gender || (Gender = {}));
export const GENDER_POOLS = {
    [Gender.Female]: {
        head: [HeadShape.Oval, HeadShape.Round],
        eyes: [Eyes.Soft, Eyes.Gentle, Eyes.Tender, Eyes.Dreamy, Eyes.Halfclosed, Eyes.Bright, Eyes.Downcast, Eyes.Melancholic, Eyes.Teary],
        mouth: [Mouth.TenderSmile, Mouth.CuteSmile, Mouth.QuietSmile, Mouth.SoftSmile, Mouth.SlightSmile, Mouth.RelaxedSmile, Mouth.Composed, Mouth.Pouty, Mouth.OpenSmile],
        hair: HairFemale,
    },
    [Gender.Male]: {
        head: [HeadShape.Standard, HeadShape.Angular],
        eyes: [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Alert, Eyes.Open, Eyes.Curious, Eyes.Squint, Eyes.Narrowed, Eyes.Glare, Eyes.Skeptical],
        mouth: [Mouth.BigSmile, Mouth.GrinWide, Mouth.ShowingTeeth, Mouth.WideOpen, Mouth.SmirkLeft, Mouth.ContentGrin, Mouth.NeutralFlat, Mouth.TinyFrown, Mouth.Scowl, Mouth.GrimaceMid],
        hair: HairMale,
    },
    [Gender.Neutral]: {
        head: [HeadShape.Standard, HeadShape.Round, HeadShape.Oval, HeadShape.Angular],
        eyes: [Eyes.Round, Eyes.Wide, Eyes.Calm, Eyes.Soft, Eyes.Alert, Eyes.Gentle, Eyes.Bright, Eyes.Open, Eyes.Curious, Eyes.Dreamy],
        mouth: [Mouth.OpenSmile, Mouth.SoftSmile, Mouth.TenderSmile, Mouth.ContentGrin, Mouth.SlightSmile, Mouth.Composed, Mouth.PlayfulSmirk, Mouth.CheekyTongue],
        hair: [...HairFemale, ...HairMale, ...HairUnisex],
    },
};
// ─────────────────────────────────────────────────────────────────────────────
// ETHNICITY SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
//
// Chaque ethnie définit des pools cohérents de :
//   skinColors   → teintes de peau possibles avec poids
//   hairColors   → couleurs de cheveux naturelles (+ fantaisie si pertinent)
//   hairCuts     → coupes typiques par genre
//   beardProba   → probabilité de barbe (pour les hommes)
//
// Le pick se fait en deux temps :
//   1. pickEthnicity(country)  → choisit une ethnie selon les poids du pays
//   2. pickFromEthnicity(eth)  → pioche skin + hairColor + hairCut cohérents
// ─────────────────────────────────────────────────────────────────────────────
export var Ethnicity;
(function (Ethnicity) {
    Ethnicity["NorthEuropean"] = "NORTH_EUROPEAN";
    Ethnicity["WestEuropean"] = "WEST_EUROPEAN";
    Ethnicity["SouthEuropean"] = "SOUTH_EUROPEAN";
    Ethnicity["EastAsian"] = "EAST_ASIAN";
    Ethnicity["SouthAsian"] = "SOUTH_ASIAN";
    Ethnicity["Latino"] = "LATINO";
    Ethnicity["BlackAfrican"] = "BLACK_AFRICAN";
    Ethnicity["Mixed"] = "MIXED";
})(Ethnicity || (Ethnicity = {}));
export const ETHNICITY_PROFILES = {
    // ── Nord-Européen ─────────────────────────────────────────────────────────
    // Peau très claire, cheveux blonds à châtains, yeux bleus/verts/gris possibles
    [Ethnicity.NorthEuropean]: {
        skinColors: [
            { color: SkinColor.Porcelain, weight: 40 },
            { color: SkinColor.Light, weight: 40 },
            { color: SkinColor.Warm, weight: 18 },
            { color: SkinColor.Medium, weight: 2 },
        ],
        hairColors: [
            { color: HairColor.LightBlonde, weight: 20 },
            { color: HairColor.GoldenBlonde, weight: 22 },
            { color: HairColor.HoneyBlonde, weight: 18 },
            { color: HairColor.LightBrown, weight: 16 },
            { color: HairColor.Brown, weight: 10 },
            { color: HairColor.DarkBrown, weight: 6 },
            { color: HairColor.Auburn, weight: 4 },
            { color: HairColor.Silver, weight: 1 },
            { color: HairColor.Gray, weight: 1 },
            // Fantaisie (teintes nordiques tendance)
            { color: HairColor.PastelPink, weight: 3 },
            { color: HairColor.Lilac, weight: 2 },
            { color: HairColor.SkyBlue, weight: 2 },
            { color: HairColor.NavyBlue, weight: 1 },
            { color: HairColor.Mint, weight: 1 },
            { color: HairColor.ForestGreen, weight: 1 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 10 },
                { hair: Hair.BoyClassicB, weight: 9 },
                { hair: Hair.BoyClassicC, weight: 8 },
                { hair: Hair.BoyClassicD, weight: 8 },
                { hair: Hair.BoyVolumeTop, weight: 7 },
                { hair: Hair.BoySidePart, weight: 8 },
                { hair: Hair.BoyTextured, weight: 8 },
                { hair: Hair.BoyFringe, weight: 6 },
                { hair: Hair.BoyShaggy, weight: 5 },
                { hair: Hair.BoyCurlyShort, weight: 5 },
                { hair: Hair.BoySweepBack, weight: 6 },
                { hair: Hair.BoyMessy, weight: 6 },
                { hair: Hair.BoyMidFlatFringe, weight: 5 },
                { hair: Hair.BoyMidDarkSweep, weight: 5 },
                { hair: Hair.BoyWavyMid, weight: 4 },
                { hair: Hair.BoyNeatShort, weight: 7 },
                { hair: Hair.BoyBuzzCut, weight: 6 },
                { hair: Hair.BoySlickedPony, weight: 3 },
                { hair: Hair.BoyMidParted, weight: 5 },
                { hair: Hair.BoySpiky, weight: 3 },
                { hair: Hair.BoyCleanShort, weight: 7 },
                { hair: Hair.BoySmoothShort, weight: 6 },
                { hair: Hair.BoyFringeShort, weight: 6 },
                { hair: Hair.CurlyShortUnisex, weight: 4 },
                { hair: Hair.PunkMohawk, weight: 1 },
                { hair: Hair.BaldShaved, weight: 2 },
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 10 },
                { hair: Hair.GirlLongWavy, weight: 10 },
                { hair: Hair.GirlWavyMid, weight: 9 },
                { hair: Hair.GirlWavyLoose, weight: 8 },
                { hair: Hair.GirlMidSidePart, weight: 8 },
                { hair: Hair.GirlMidWavySide, weight: 7 },
                { hair: Hair.GirlMidVolume, weight: 7 },
                { hair: Hair.GirlLongFlat, weight: 7 },
                { hair: Hair.GirlTopBun, weight: 7 },
                { hair: Hair.GirlHighBun, weight: 7 },
                { hair: Hair.GirlPonytailLow, weight: 7 },
                { hair: Hair.GirlHighPonytail, weight: 7 },
                { hair: Hair.GirlBunNeat, weight: 6 },
                { hair: Hair.GirlShortSleek, weight: 6 },
                { hair: Hair.GirlShortVolume, weight: 5 },
                { hair: Hair.GirlLongAsym, weight: 5 },
                { hair: Hair.GirlBunFluffy, weight: 5 },
                { hair: Hair.GirlBunTight, weight: 5 },
                { hair: Hair.GirlPixieCut, weight: 4 },
                { hair: Hair.GirlShortAsym, weight: 4 },
                { hair: Hair.GirlShortChic, weight: 4 },
                { hair: Hair.GirlDoubleBuns, weight: 3 },
                { hair: Hair.CurlyShortUnisex, weight: 4 },
            ],
        },
        beardProbability: 0.48,
    },
    // ── Ouest-Européen ────────────────────────────────────────────────────────
    // Peau claire à hâlée, cheveux châtains à bruns dominant, roux présent
    [Ethnicity.WestEuropean]: {
        skinColors: [
            { color: SkinColor.Porcelain, weight: 15 },
            { color: SkinColor.Light, weight: 30 },
            { color: SkinColor.Warm, weight: 30 },
            { color: SkinColor.Medium, weight: 20 },
            { color: SkinColor.Tan, weight: 5 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 6 },
            { color: HairColor.SoftBlack, weight: 6 },
            { color: HairColor.DarkBrown, weight: 18 },
            { color: HairColor.Brown, weight: 20 },
            { color: HairColor.LightBrown, weight: 14 },
            { color: HairColor.Auburn, weight: 10 },
            { color: HairColor.Red, weight: 7 },
            { color: HairColor.Copper, weight: 5 },
            { color: HairColor.HoneyBlonde, weight: 8 },
            { color: HairColor.GoldenBlonde, weight: 4 },
            { color: HairColor.LightBlonde, weight: 2 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 10 },
                { hair: Hair.BoyClassicB, weight: 9 },
                { hair: Hair.BoyClassicC, weight: 8 },
                { hair: Hair.BoyClassicD, weight: 8 },
                { hair: Hair.BoySidePart, weight: 10 },
                { hair: Hair.BoyTextured, weight: 8 },
                { hair: Hair.BoyFringe, weight: 7 },
                { hair: Hair.BoyShaggy, weight: 7 },
                { hair: Hair.BoyCurlyShort, weight: 5 },
                { hair: Hair.BoySweepBack, weight: 6 },
                { hair: Hair.BoyMessy, weight: 7 },
                { hair: Hair.BoyNeatShort, weight: 7 },
                { hair: Hair.BoyBuzzCut, weight: 8 },
                { hair: Hair.BoyMidParted, weight: 5 },
                { hair: Hair.BoyCleanShort, weight: 7 },
                { hair: Hair.BoySmoothShort, weight: 6 },
                { hair: Hair.BoyFringeShort, weight: 7 },
                { hair: Hair.BoyMidFlatFringe, weight: 4 },
                { hair: Hair.BoyMidDarkSweep, weight: 4 },
                { hair: Hair.BoyWavyMid, weight: 4 },
                { hair: Hair.PunkMohawk, weight: 3 },
                { hair: Hair.BaldShaved, weight: 3 },
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 9 },
                { hair: Hair.GirlLongWavy, weight: 9 },
                { hair: Hair.GirlWavyMid, weight: 10 },
                { hair: Hair.GirlWavyLoose, weight: 8 },
                { hair: Hair.GirlMidSidePart, weight: 7 },
                { hair: Hair.GirlMidWavySide, weight: 7 },
                { hair: Hair.GirlMidVolume, weight: 8 },
                { hair: Hair.GirlTopBun, weight: 8 },
                { hair: Hair.GirlHighBun, weight: 6 },
                { hair: Hair.GirlBunNeat, weight: 6 },
                { hair: Hair.GirlPonytailLow, weight: 7 },
                { hair: Hair.GirlHighPonytail, weight: 7 },
                { hair: Hair.GirlShortSleek, weight: 7 },
                { hair: Hair.GirlPixieCut, weight: 5 },
                { hair: Hair.GirlShortAsym, weight: 5 },
                { hair: Hair.GirlShortChic, weight: 6 },
                { hair: Hair.GirlLongFlat, weight: 6 },
                { hair: Hair.GirlLongAsym, weight: 5 },
                { hair: Hair.GirlBunFluffy, weight: 5 },
                { hair: Hair.GirlBunTight, weight: 5 },
                { hair: Hair.GirlShortVolume, weight: 5 },
                { hair: Hair.GirlDoubleBuns, weight: 3 },
                { hair: Hair.CurlyShortUnisex, weight: 3 },
            ],
        },
        beardProbability: 0.45,
    },
    // ── Sud-Européen ──────────────────────────────────────────────────────────
    // Peau olive à hâlée, cheveux foncés dominant, structure méditerranéenne
    [Ethnicity.SouthEuropean]: {
        skinColors: [
            { color: SkinColor.Light, weight: 10 },
            { color: SkinColor.Warm, weight: 35 },
            { color: SkinColor.Medium, weight: 35 },
            { color: SkinColor.Tan, weight: 18 },
            { color: SkinColor.Brown, weight: 2 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 20 },
            { color: HairColor.SoftBlack, weight: 20 },
            { color: HairColor.DarkBrown, weight: 28 },
            { color: HairColor.Brown, weight: 18 },
            { color: HairColor.LightBrown, weight: 8 },
            { color: HairColor.Auburn, weight: 5 },
            { color: HairColor.Red, weight: 1 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 10 },
                { hair: Hair.BoyClassicB, weight: 9 },
                { hair: Hair.BoyClassicC, weight: 8 },
                { hair: Hair.BoyTextured, weight: 10 },
                { hair: Hair.BoyCurlyShort, weight: 8 },
                { hair: Hair.BoyFringe, weight: 7 },
                { hair: Hair.BoyShaggy, weight: 7 },
                { hair: Hair.BoySidePart, weight: 8 },
                { hair: Hair.BoyMessy, weight: 7 },
                { hair: Hair.BoyBuzzCut, weight: 6 },
                { hair: Hair.BoyWavyMid, weight: 6 },
                { hair: Hair.BoyMidParted, weight: 5 },
                { hair: Hair.BoyNeatShort, weight: 6 },
                { hair: Hair.BoyCleanShort, weight: 5 },
                { hair: Hair.BoyMidDarkSweep, weight: 5 },
                { hair: Hair.CurlyShortUnisex, weight: 5 },
                { hair: Hair.BaldShaved, weight: 4 },
            ],
            female: [
                { hair: Hair.GirlLongWavy, weight: 14 },
                { hair: Hair.GirlWavyMid, weight: 13 },
                { hair: Hair.GirlWavyLoose, weight: 12 },
                { hair: Hair.GirlLongStraight, weight: 8 },
                { hair: Hair.GirlLongFlat, weight: 6 },
                { hair: Hair.GirlMidVolume, weight: 9 },
                { hair: Hair.GirlMidWavySide, weight: 8 },
                { hair: Hair.GirlHighPonytail, weight: 8 },
                { hair: Hair.GirlPonytailLow, weight: 7 },
                { hair: Hair.GirlTopBun, weight: 6 },
                { hair: Hair.GirlHighBun, weight: 6 },
                { hair: Hair.GirlBunFluffy, weight: 5 },
                { hair: Hair.GirlShortSleek, weight: 4 },
                { hair: Hair.CurlyShortUnisex, weight: 8 },
            ],
        },
        beardProbability: 0.55,
    },
    // ── Est-Asiatique ─────────────────────────────────────────────────────────
    // Peau claire à medium, cheveux noir/brun foncé quasi-exclusivement, cheveux lisses
    [Ethnicity.EastAsian]: {
        skinColors: [
            { color: SkinColor.Porcelain, weight: 20 },
            { color: SkinColor.Light, weight: 40 },
            { color: SkinColor.Warm, weight: 30 },
            { color: SkinColor.Medium, weight: 10 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 60 },
            { color: HairColor.SoftBlack, weight: 25 },
            { color: HairColor.DarkBrown, weight: 12 },
            { color: HairColor.Brown, weight: 3 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 12 },
                { hair: Hair.BoyClassicB, weight: 10 },
                { hair: Hair.BoyClassicC, weight: 8 },
                { hair: Hair.BoyFringe, weight: 12 }, // frange très commune en Asie de l'Est
                { hair: Hair.BoyFringeShort, weight: 10 },
                { hair: Hair.BoyTextured, weight: 8 },
                { hair: Hair.BoySidePart, weight: 8 },
                { hair: Hair.BoyVolumeTop, weight: 8 },
                { hair: Hair.BoySweepBack, weight: 6 },
                { hair: Hair.BoyNeatShort, weight: 8 },
                { hair: Hair.BoyCleanShort, weight: 7 },
                { hair: Hair.BoySmoothShort, weight: 7 },
                { hair: Hair.BoyMidParted, weight: 5 },
                { hair: Hair.BoyMidFlatFringe, weight: 6 },
                { hair: Hair.BoyMidDarkSweep, weight: 5 },
                { hair: Hair.BaldShaved, weight: 1 },
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 18 }, // cheveux longs lisses très courants
                { hair: Hair.GirlLongFlat, weight: 16 },
                { hair: Hair.GirlMidSidePart, weight: 12 },
                { hair: Hair.GirlLongAsym, weight: 8 },
                { hair: Hair.GirlMidWavySide, weight: 7 },
                { hair: Hair.GirlTopBun, weight: 7 },
                { hair: Hair.GirlHighBun, weight: 7 },
                { hair: Hair.GirlBunNeat, weight: 6 },
                { hair: Hair.GirlBunTight, weight: 6 },
                { hair: Hair.GirlShortSleek, weight: 6 },
                { hair: Hair.GirlPixieCut, weight: 4 },
                { hair: Hair.GirlPonytailLow, weight: 6 },
                { hair: Hair.GirlHighPonytail, weight: 6 },
                { hair: Hair.GirlShortChic, weight: 4 },
                { hair: Hair.GirlShortAsym, weight: 4 },
            ],
        },
        beardProbability: 0.1,
    },
    // ── Sud-Asiatique ─────────────────────────────────────────────────────────
    // Peau medium à foncée, cheveux noirs dominant, barbe plus fréquente
    [Ethnicity.SouthAsian]: {
        skinColors: [
            { color: SkinColor.Warm, weight: 8 },
            { color: SkinColor.Medium, weight: 14 },
            { color: SkinColor.Tan, weight: 22 },
            { color: SkinColor.Brown, weight: 28 },
            { color: SkinColor.DarkBrown, weight: 20 },
            { color: SkinColor.Deep, weight: 8 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 75 },
            { color: HairColor.SoftBlack, weight: 20 },
            { color: HairColor.DarkBrown, weight: 5 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 12 },
                { hair: Hair.BoyClassicB, weight: 10 },
                { hair: Hair.BoyClassicC, weight: 8 },
                { hair: Hair.BoyClassicD, weight: 8 },
                { hair: Hair.BoySidePart, weight: 10 },
                { hair: Hair.BoyFringe, weight: 7 },
                { hair: Hair.BoyTextured, weight: 8 },
                { hair: Hair.BoyNeatShort, weight: 10 },
                { hair: Hair.BoyBuzzCut, weight: 8 },
                { hair: Hair.BoyCleanShort, weight: 8 },
                { hair: Hair.BoySmoothShort, weight: 6 },
                { hair: Hair.BoyWavyMid, weight: 5 },
                { hair: Hair.BoyCurlyShort, weight: 6 },
                { hair: Hair.BaldShaved, weight: 4 }, // rasage rituel/pratique courant
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 14 },
                { hair: Hair.GirlLongFlat, weight: 12 },
                { hair: Hair.GirlLongWavy, weight: 10 },
                { hair: Hair.GirlHighBun, weight: 12 }, // chignon haut typique
                { hair: Hair.GirlBunNeat, weight: 10 },
                { hair: Hair.GirlBunTight, weight: 10 },
                { hair: Hair.GirlTopBun, weight: 8 },
                { hair: Hair.GirlPonytailLow, weight: 8 },
                { hair: Hair.GirlHighPonytail, weight: 7 },
                { hair: Hair.GirlMidSidePart, weight: 7 },
                { hair: Hair.GirlLongAsym, weight: 5 },
            ],
        },
        beardProbability: 0.65,
    },
    // ── Latino ────────────────────────────────────────────────────────────────
    // Grande diversité de teintes, cheveux foncés à châtains, ondulés fréquents
    [Ethnicity.Latino]: {
        skinColors: [
            { color: SkinColor.Light, weight: 8 },
            { color: SkinColor.Warm, weight: 14 },
            { color: SkinColor.Medium, weight: 22 },
            { color: SkinColor.Tan, weight: 26 },
            { color: SkinColor.Brown, weight: 20 },
            { color: SkinColor.DarkBrown, weight: 8 },
            { color: SkinColor.Deep, weight: 2 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 20 },
            { color: HairColor.SoftBlack, weight: 18 },
            { color: HairColor.DarkBrown, weight: 22 },
            { color: HairColor.Brown, weight: 16 },
            { color: HairColor.LightBrown, weight: 10 },
            { color: HairColor.HoneyBlonde, weight: 6 },
            { color: HairColor.Auburn, weight: 4 },
            { color: HairColor.Copper, weight: 2 },
            { color: HairColor.GoldenBlonde, weight: 2 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 10 },
                { hair: Hair.BoyClassicB, weight: 9 },
                { hair: Hair.BoyTextured, weight: 10 },
                { hair: Hair.BoyCurlyShort, weight: 8 },
                { hair: Hair.BoyFringe, weight: 7 },
                { hair: Hair.BoyShaggy, weight: 8 },
                { hair: Hair.BoyMessy, weight: 7 },
                { hair: Hair.BoyBuzzCut, weight: 7 },
                { hair: Hair.BoyNeatShort, weight: 7 },
                { hair: Hair.BoyCleanShort, weight: 6 },
                { hair: Hair.BoyWavyMid, weight: 5 },
                { hair: Hair.BoySlickedPony, weight: 4 },
                { hair: Hair.BoyMidParted, weight: 5 },
                { hair: Hair.CurlyShortUnisex, weight: 7 },
                { hair: Hair.BaldShaved, weight: 3 },
            ],
            female: [
                { hair: Hair.GirlLongWavy, weight: 14 },
                { hair: Hair.GirlWavyMid, weight: 13 },
                { hair: Hair.GirlWavyLoose, weight: 12 },
                { hair: Hair.GirlLongStraight, weight: 10 },
                { hair: Hair.GirlLongFlat, weight: 6 },
                { hair: Hair.GirlMidVolume, weight: 9 },
                { hair: Hair.GirlMidWavySide, weight: 8 },
                { hair: Hair.GirlHighPonytail, weight: 8 },
                { hair: Hair.GirlPonytailLow, weight: 7 },
                { hair: Hair.GirlTopBun, weight: 6 },
                { hair: Hair.GirlHighBun, weight: 6 },
                { hair: Hair.GirlBunFluffy, weight: 5 },
                { hair: Hair.GirlShortSleek, weight: 4 },
                { hair: Hair.CurlyShortUnisex, weight: 10 },
            ],
        },
        beardProbability: 0.5,
    },
    // ── Afro/Noir ─────────────────────────────────────────────────────────────
    // Peau brune à très foncée, cheveux très foncés, textures bouclées/crépues
    [Ethnicity.BlackAfrican]: {
        skinColors: [
            { color: SkinColor.Tan, weight: 8 },
            { color: SkinColor.Brown, weight: 20 },
            { color: SkinColor.DarkBrown, weight: 35 },
            { color: SkinColor.Deep, weight: 37 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 70 },
            { color: HairColor.SoftBlack, weight: 25 },
            { color: HairColor.DarkBrown, weight: 5 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyCurlyShort, weight: 14 },
                { hair: Hair.CurlyShortUnisex, weight: 14 },
                { hair: Hair.BoyBuzzCut, weight: 12 },
                { hair: Hair.BoyTextured, weight: 10 },
                { hair: Hair.BoyShaggy, weight: 8 },
                { hair: Hair.BoyNeatShort, weight: 8 },
                { hair: Hair.BoyCleanShort, weight: 7 },
                { hair: Hair.BoyClassicA, weight: 6 },
                { hair: Hair.BoyClassicB, weight: 5 },
                { hair: Hair.BoyFringe, weight: 4 },
                { hair: Hair.BoyMessy, weight: 6 },
                { hair: Hair.BaldShaved, weight: 8 }, // très courant
            ],
            female: [
                { hair: Hair.CurlyShortUnisex, weight: 16 },
                { hair: Hair.GirlTopBun, weight: 10 },
                { hair: Hair.GirlHighBun, weight: 10 },
                { hair: Hair.GirlBunNeat, weight: 8 },
                { hair: Hair.GirlBunTight, weight: 8 },
                { hair: Hair.GirlBunFluffy, weight: 7 },
                { hair: Hair.GirlDoubleBuns, weight: 7 },
                { hair: Hair.GirlHighPonytail, weight: 6 },
                { hair: Hair.GirlPonytailLow, weight: 5 },
                { hair: Hair.GirlShortSleek, weight: 5 },
                { hair: Hair.GirlMidVolume, weight: 5 },
                { hair: Hair.GirlWavyMid, weight: 4 },
                { hair: Hair.GirlPixieCut, weight: 4 },
            ],
        },
        beardProbability: 0.5,
    },
    // ── Mixte ─────────────────────────────────────────────────────────────────
    // Toute la palette — pour les pays très multiculturaux
    [Ethnicity.Mixed]: {
        skinColors: [
            { color: SkinColor.Porcelain, weight: 6 },
            { color: SkinColor.Light, weight: 10 },
            { color: SkinColor.Warm, weight: 14 },
            { color: SkinColor.Medium, weight: 18 },
            { color: SkinColor.Tan, weight: 18 },
            { color: SkinColor.Brown, weight: 18 },
            { color: SkinColor.DarkBrown, weight: 10 },
            { color: SkinColor.Deep, weight: 6 },
        ],
        hairColors: [
            { color: HairColor.JetBlack, weight: 12 },
            { color: HairColor.SoftBlack, weight: 10 },
            { color: HairColor.DarkBrown, weight: 14 },
            { color: HairColor.Brown, weight: 14 },
            { color: HairColor.LightBrown, weight: 10 },
            { color: HairColor.Auburn, weight: 5 },
            { color: HairColor.Red, weight: 4 },
            { color: HairColor.Copper, weight: 3 },
            { color: HairColor.HoneyBlonde, weight: 8 },
            { color: HairColor.GoldenBlonde, weight: 6 },
            { color: HairColor.LightBlonde, weight: 4 },
            // Fantaisie modérée
            { color: HairColor.PastelPink, weight: 2 },
            { color: HairColor.HotPink, weight: 2 },
            { color: HairColor.Lilac, weight: 2 },
            { color: HairColor.SkyBlue, weight: 2 },
            { color: HairColor.NavyBlue, weight: 1 },
            { color: HairColor.DeepPurple, weight: 1 },
        ],
        hairCuts: {
            male: [
                { hair: Hair.BoyClassicA, weight: 8 },
                { hair: Hair.BoyClassicB, weight: 8 },
                { hair: Hair.BoyClassicC, weight: 7 },
                { hair: Hair.BoyClassicD, weight: 7 },
                { hair: Hair.BoyVolumeTop, weight: 6 },
                { hair: Hair.BoySidePart, weight: 6 },
                { hair: Hair.BoyTextured, weight: 8 },
                { hair: Hair.BoyFringe, weight: 6 },
                { hair: Hair.BoyShaggy, weight: 6 },
                { hair: Hair.BoyCurlyShort, weight: 7 },
                { hair: Hair.BoySweepBack, weight: 5 },
                { hair: Hair.BoyMessy, weight: 6 },
                { hair: Hair.BoyNeatShort, weight: 6 },
                { hair: Hair.BoyBuzzCut, weight: 7 },
                { hair: Hair.BoyCleanShort, weight: 6 },
                { hair: Hair.BoySmoothShort, weight: 5 },
                { hair: Hair.BoyFringeShort, weight: 5 },
                { hair: Hair.CurlyShortUnisex, weight: 6 },
                { hair: Hair.BaldShaved, weight: 3 },
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 8 },
                { hair: Hair.GirlLongWavy, weight: 8 },
                { hair: Hair.GirlWavyMid, weight: 8 },
                { hair: Hair.GirlWavyLoose, weight: 7 },
                { hair: Hair.GirlLongFlat, weight: 6 },
                { hair: Hair.GirlMidVolume, weight: 7 },
                { hair: Hair.GirlMidWavySide, weight: 6 },
                { hair: Hair.GirlTopBun, weight: 6 },
                { hair: Hair.GirlHighBun, weight: 6 },
                { hair: Hair.GirlBunNeat, weight: 5 },
                { hair: Hair.GirlHighPonytail, weight: 7 },
                { hair: Hair.GirlPonytailLow, weight: 6 },
                { hair: Hair.GirlMidSidePart, weight: 6 },
                { hair: Hair.GirlShortSleek, weight: 5 },
                { hair: Hair.GirlPixieCut, weight: 4 },
                { hair: Hair.GirlBunFluffy, weight: 4 },
                { hair: Hair.GirlBunTight, weight: 4 },
                { hair: Hair.CurlyShortUnisex, weight: 5 },
            ],
        },
        beardProbability: 0.45,
    },
};
// ─────────────────────────────────────────────────────────────────────────────
// COUNTRY SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
//
// Chaque pays définit ses ethnies avec un poids.
// Le pick skin/hair/coupe se fait ensuite depuis l'ethnie sélectionnée.
// ─────────────────────────────────────────────────────────────────────────────
export var Country;
(function (Country) {
    Country["USA"] = "USA";
    Country["Canada"] = "Canada";
    Country["UK"] = "UK";
    Country["Australia"] = "Australia";
    Country["Germany"] = "Germany";
    Country["France"] = "France";
    Country["Japan"] = "Japan";
    Country["China"] = "China";
    Country["India"] = "India";
    Country["Brazil"] = "Brazil";
    Country["Sweden"] = "Sweden";
    Country["Netherlands"] = "Netherlands";
    Country["Denmark"] = "Denmark";
})(Country || (Country = {}));
export const ethnicitiesByCountry = {
    [Country.USA]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 34 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 14 },
        { ethnicity: Ethnicity.Latino, weight: 18 },
        { ethnicity: Ethnicity.EastAsian, weight: 6 },
        { ethnicity: Ethnicity.SouthAsian, weight: 5 },
        { ethnicity: Ethnicity.Mixed, weight: 23 },
    ],
    [Country.Canada]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 35 },
        { ethnicity: Ethnicity.NorthEuropean, weight: 10 },
        { ethnicity: Ethnicity.EastAsian, weight: 12 },
        { ethnicity: Ethnicity.SouthAsian, weight: 10 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 5 },
        { ethnicity: Ethnicity.Latino, weight: 8 },
        { ethnicity: Ethnicity.Mixed, weight: 20 },
    ],
    [Country.UK]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 45 },
        { ethnicity: Ethnicity.NorthEuropean, weight: 15 },
        { ethnicity: Ethnicity.SouthAsian, weight: 10 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 8 },
        { ethnicity: Ethnicity.EastAsian, weight: 5 },
        { ethnicity: Ethnicity.Mixed, weight: 17 },
    ],
    [Country.Australia]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 40 },
        { ethnicity: Ethnicity.NorthEuropean, weight: 15 },
        { ethnicity: Ethnicity.EastAsian, weight: 15 },
        { ethnicity: Ethnicity.SouthAsian, weight: 8 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 3 },
        { ethnicity: Ethnicity.Mixed, weight: 19 },
    ],
    [Country.Germany]: [
        { ethnicity: Ethnicity.NorthEuropean, weight: 30 },
        { ethnicity: Ethnicity.WestEuropean, weight: 40 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 8 }, // diaspora turque/balkanique assimilée
        { ethnicity: Ethnicity.EastAsian, weight: 3 },
        { ethnicity: Ethnicity.Mixed, weight: 19 },
    ],
    [Country.France]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 48 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 15 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 12 },
        { ethnicity: Ethnicity.NorthEuropean, weight: 5 },
        { ethnicity: Ethnicity.EastAsian, weight: 3 },
        { ethnicity: Ethnicity.Mixed, weight: 17 },
    ],
    [Country.Japan]: [
        { ethnicity: Ethnicity.EastAsian, weight: 98 },
        { ethnicity: Ethnicity.Mixed, weight: 2 },
    ],
    [Country.China]: [
        { ethnicity: Ethnicity.EastAsian, weight: 99 },
        { ethnicity: Ethnicity.Mixed, weight: 1 },
    ],
    [Country.India]: [
        { ethnicity: Ethnicity.SouthAsian, weight: 97 },
        { ethnicity: Ethnicity.Mixed, weight: 3 },
    ],
    [Country.Brazil]: [
        { ethnicity: Ethnicity.WestEuropean, weight: 30 },
        { ethnicity: Ethnicity.Latino, weight: 25 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 15 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 10 },
        { ethnicity: Ethnicity.EastAsian, weight: 5 }, // forte diaspora japonaise/chinoise
        { ethnicity: Ethnicity.Mixed, weight: 15 },
    ],
    [Country.Sweden]: [
        { ethnicity: Ethnicity.NorthEuropean, weight: 72 },
        { ethnicity: Ethnicity.WestEuropean, weight: 10 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 5 },
        { ethnicity: Ethnicity.EastAsian, weight: 3 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 3 },
        { ethnicity: Ethnicity.Mixed, weight: 7 },
    ],
    [Country.Netherlands]: [
        { ethnicity: Ethnicity.NorthEuropean, weight: 55 },
        { ethnicity: Ethnicity.WestEuropean, weight: 20 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 8 },
        { ethnicity: Ethnicity.EastAsian, weight: 4 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 5 },
        { ethnicity: Ethnicity.Mixed, weight: 8 },
    ],
    [Country.Denmark]: [
        { ethnicity: Ethnicity.NorthEuropean, weight: 70 },
        { ethnicity: Ethnicity.WestEuropean, weight: 12 },
        { ethnicity: Ethnicity.SouthEuropean, weight: 5 },
        { ethnicity: Ethnicity.EastAsian, weight: 3 },
        { ethnicity: Ethnicity.BlackAfrican, weight: 3 },
        { ethnicity: Ethnicity.Mixed, weight: 7 },
    ],
};
// ─────────────────────────────────────────────────────────────────────────────
// PICK FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────
function weightedPick(entries, getValue) {
    const total = entries.reduce((sum, e) => sum + e.weight, 0);
    let rand = Math.random() * total;
    for (const entry of entries) {
        rand -= entry.weight;
        if (rand <= 0)
            return getValue(entry);
    }
    return getValue(entries[entries.length - 1]);
}
export function pickEthnicity(country) {
    return weightedPick(ethnicitiesByCountry[country], (e) => e.ethnicity);
}
export function pickSkinColor(ethnicity) {
    return weightedPick(ETHNICITY_PROFILES[ethnicity].skinColors, (e) => e.color);
}
export function pickHairColor(ethnicity) {
    return weightedPick(ETHNICITY_PROFILES[ethnicity].hairColors, (e) => e.color);
}
export function pickHaircut(ethnicity, gender) {
    const pool = ETHNICITY_PROFILES[ethnicity].hairCuts;
    const entries = gender === Gender.Female ? pool.female : pool.male;
    return weightedPick(entries, (e) => e.hair);
}
export function pickHasBeard(ethnicity) {
    return Math.random() < ETHNICITY_PROFILES[ethnicity].beardProbability;
}
/**
 * Génère un profil physique complet et cohérent depuis un pays et un genre.
 *
 * Usage :
 *   const { ethnicity, skinColor, hairColor, hair, hasBeard } = pickPhysicalProfile(Country.Japan, Gender.Male);
 */
export function pickPhysicalProfile(country, gender) {
    const ethnicity = pickEthnicity(country);
    const skinColor = pickSkinColor(ethnicity);
    const hairColor = pickHairColor(ethnicity);
    const hair = pickHaircut(ethnicity, gender);
    const hasBeard = gender !== Gender.Female && pickHasBeard(ethnicity);
    return { ethnicity, skinColor, hairColor, hair, hasBeard };
}
