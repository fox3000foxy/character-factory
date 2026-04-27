// ─────────────────────────────────────────────────────────────────────────────
// LORELEI AVATAR ENUMS
// Les valeurs string correspondent aux identifiants DiceBear (ex: "variant01").
// Les clés sont des noms humains lisibles pour un usage intuitif.
// ─────────────────────────────────────────────────────────────────────────────

// ── Yeux (24 variants) ────────────────────────────────────────────────────────

export enum Eyes {
	// Ouverts, ronds, neutres à positifs
	Round = "variant01", // grands yeux ronds ouverts
	Wide = "variant02", // grands yeux expressifs
	Soft = "variant03", // yeux doux mi-clos
	Startled = "variant04", // yeux écarquillés légèrement
	Gentle = "variant05", // yeux calmes et doux
	Calm = "variant06", // regard posé, ouvert
	Alert = "variant07", // regard vif et attentif
	Tender = "variant08", // regard tendre mi-clos
	Drowsy = "variant09", // yeux lourds, endormis
	Open = "variant10", // yeux francs et ouverts
	// Plissés, critiques, froncés
	Squint = "variant11", // yeux plissés horizontalement
	Skeptical = "variant12", // regard méfiant, sourcils bas
	Glare = "variant13", // regard fixe, légèrement hostile
	Dreamy = "variant14", // yeux mi-clos rêveurs
	Bright = "variant15", // yeux pétillants ouverts
	Halfclosed = "variant16", // mi-clos, fatigués ou séducteurs
	Curious = "variant17", // regard curieux, grand ouvert
	Sleepy = "variant18", // yeux très fermés, somnolents
	Narrowed = "variant19", // yeux plissés avec intention
	// Tristes, tombants
	Teary = "variant20", // yeux tombants sur les côtés
	Wary = "variant21", // regard craintif ou méfiant
	Downcast = "variant22", // regard baissé, abattu
	Melancholic = "variant23", // yeux tristes tombants
	// Écarquillés de surprise
	Shocked = "variant24", // yeux grand ouverts, choqués
}

// ── Sourcils (13 variants) ────────────────────────────────────────────────────

export enum Eyebrows {
	// Relevés – expressions positives ou surprises
	HighArched = "variant01", // très hauts, arqués
	HighSoft = "variant02", // hauts et légèrement courbés
	RaisedInner = "variant03", // relevés vers l'intérieur
	RaisedFlat = "variant04", // relevés et relativement droits
	// Plats / neutres
	NeutralFlat = "variant05", // plats, ni froncés ni relevés
	RelaxedLow = "variant06", // bas et détendus
	StraightMid = "variant07", // droits, hauteur moyenne
	// Froncés – colère, tension
	FurrowedMild = "variant08", // légèrement froncés
	FurrowedInner = "variant09", // froncés vers le centre
	FurrowedDeep = "variant10", // très froncés, tension forte
	AngryV = "variant11", // sourcils en V, colère marquée
	// Tristes / inquiets – arqués vers le bas
	WorriedArch = "variant12", // arqués, inquiétude
	SadArch = "variant13", // arqués vers le bas, tristesse
}

// ── Bouche ────────────────────────────────────────────────────────────────────

export enum Mouth {
	// Sourires larges et ouverts
	BigSmile = "happy01",
	GrinWide = "happy02",
	OpenSmile = "happy03",
	SoftSmile = "happy04",
	QuietSmile = "happy05",
	// Sourires asymétriques / malicieux
	SmirkLeft = "happy06",
	ShowingTeeth = "happy07",
	WideOpen = "happy08",
	// Sourires subtils / contents
	PlayfulSmirk = "happy09",
	ContentGrin = "happy10",
	TenderSmile = "happy11",
	CuteSmile = "happy12",
	// Bouches ouvertes
	Gasping = "happy13",
	ExcitedOpen = "happy14",
	RelaxedSmile = "happy15",
	// Neutres
	SlightSmile = "happy16",
	Composed = "happy17",
	CheekyTongue = "happy18",
	// Tristes
	TinyFrown = "sad01",
	NeutralFlat = "sad02",
	Pouty = "sad03",
	Frown = "sad04",
	DeepFrown = "sad05",
	GrimaceLight = "sad06",
	GrimaceMid = "sad07",
	GrimaceDeep = "sad08",
	Scowl = "sad09",
}

// ── Forme de tête (4 variants) ────────────────────────────────────────────────

export enum HeadShape {
	Standard = "variant01",
	Round = "variant02",
	Oval = "variant03",
	Angular = "variant04",
}

// ── Nez (6 variants) ──────────────────────────────────────────────────────────

export enum Nose {
	Button = "variant01",
	Soft = "variant02",
	Pointed = "variant03",
	Wide = "variant04",
	Upturned = "variant05",
	Strong = "variant06",
}

// ── Coiffures (48 variants) ───────────────────────────────────────────────────
export enum Hair {
	// ── Masculin court (v01–v12) ─────────────────────────────────────────────
	BoyClassicA = "variant01", // classique lisse A
	BoyClassicB = "variant02", // classique lisse B
	BoyClassicC = "variant03", // classique lisse C
	BoyClassicD = "variant04", // classique lisse D
	BoyVolumeTop = "variant05", // volume haut
	BoySidePart = "variant06", // raie côté
	BoyTextured = "variant07", // texturé court
	BoyFringe = "variant08", // frange avant
	BoyShaggy = "variant09", // shaggy long
	BoyCurlyShort = "variant10", // bouclé court
	BoySweepBack = "variant11", // sweep back
	BoyMessy = "variant12", // ébouriffé
	// ── Féminin court & mi-long (v13–v16, v18, v20–v21, v24) ────────────────
	GirlShortSleek = "variant13", // court lisse
	GirlTopBun = "variant14", // chignon haut
	GirlLongStraight = "variant15", // long lisse
	GirlShortVolume = "variant16", // court volume
	GirlWavyMid = "variant18", // ondulé mi-long
	GirlPixieCut = "variant20", // pixie cut
	GirlLongAsym = "variant21", // long asymétrique
	GirlMidVolume = "variant24", // mi-long volume
	// ── Masculin mi-long (v17, v19, v23) ─────────────────────────────────────
	BoyMidFlatFringe = "variant17", // mi-long plat avec frange
	BoyMidDarkSweep = "variant19", // mi-long sombre balayé
	BoyWavyMid = "variant23", // ondulé mi-long garçon
	// ── Unisex (v22, v27) ────────────────────────────────────────────────────
	CurlyShortUnisex = "variant22", // bouclé court unisex
	PunkMohawk = "variant27", // mohawk punk
	// ── Calvitie / rasé (v25) ────────────────────────────────────────────────
	BaldShaved = "variant25", // chauve / rasé
	// ── Masculin court supplémentaire (v28, v34, v36, v39, v43, v44, v47, v48) ──
	BoyNeatShort = "variant28", // court net
	BoyBuzzCut = "variant34", // buzz cut
	BoySlickedPony = "variant36", // queue lissée côté
	BoyMidParted = "variant39", // mi-long partagé
	BoySpiky = "variant43", // spike
	BoyCleanShort = "variant44", // court propre
	BoySmoothShort = "variant47", // court lisse
	BoyFringeShort = "variant48", // frange courte
	// ── Féminin long & attaché (v26, v29–v33, v35, v37–v38, v40–v42, v45–v46) ──
	GirlDoubleBuns = "variant26", // double chignon
	GirlPonytailLow = "variant29", // queue de cheval basse
	GirlShortChic = "variant30", // court chic
	GirlHighPonytail = "variant31", // queue de cheval haute
	GirlMidSidePart = "variant32", // mi-long raie côté
	GirlLongFlat = "variant33", // long plat
	GirlLongWavy = "variant35", // long ondulé
	GirlWavyLoose = "variant37", // ondulé libre
	GirlBunNeat = "variant38", // chignon soigné
	GirlShortAsym = "variant40", // court asymétrique
	GirlMidWavySide = "variant41", // mi-long ondulé côté
	GirlHighBun = "variant42", // chignon haut
	GirlBunFluffy = "variant45", // chignon bouffant
	GirlBunTight = "variant46", // chignon serré
}

// ── Groupes utilitaires ───────────────────────────────────────────────────────
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

export const HairUnisex: Hair[] = [Hair.CurlyShortUnisex, Hair.PunkMohawk];

export const HairBald: Hair[] = [Hair.BaldShaved];

// ── Lunettes (5 variants) ─────────────────────────────────────────────────────

export enum Glasses {
	None = "none",
	Round = "variant01",
	Square = "variant02",
	CatEye = "variant03",
	Rimless = "variant04",
	Thick = "variant05",
}

// ── Boucles d'oreilles (3 variants) ──────────────────────────────────────────

export enum Earrings {
	None = "none",
	Studs = "variant01",
	Hoops = "variant02",
	Drops = "variant03",
}

// ── Barbe (2 variants) ────────────────────────────────────────────────────────

export enum Beard {
	None = "none",
	Stubble = "variant01",
	FullBeard = "variant02",
}

// ── Accessoires cheveux ───────────────────────────────────────────────────────

export enum HairAccessory {
	None = "none",
	Flowers = "flowers",
}

// ── Couleurs de peau ──────────────────────────────────────────────────────────

export enum SkinColor {
	Porcelain = "ffdbb4", // très clair, rosé
	Light = "edb98a", // clair chaud
	Warm = "fd9841", // chaud orangé
	Medium = "d08b5b", // médium beige
	Tan = "ae5d29", // hâlé
	Brown = "614335", // brun
	DarkBrown = "4a312c", // brun foncé
	Deep = "2c1b18", // très foncé
}

// ── Couleurs de cheveux ───────────────────────────────────────────────────────

export enum HairColor {
	// Naturels foncés
	JetBlack = "0a0a0a",
	SoftBlack = "2c1b18",
	DarkBrown = "4a312c",
	Brown = "724133",
	// Naturels clairs / roux
	LightBrown = "a55728",
	Auburn = "b7310a",
	Red = "c93305",
	Copper = "cb6025",
	// Blonds
	HoneyBlonde = "b58143",
	GoldenBlonde = "daa520",
	LightBlonde = "fdff6b",
	// Blancs / gris
	Silver = "c0c0c0",
	Gray = "929598",
	White = "f5f5f5",
	// Fantaisie
	PastelPink = "f48fb1",
	HotPink = "e91e90",
	Lilac = "ce93d8",
	DeepPurple = "7b1fa2",
	SkyBlue = "64b5f6",
	NavyBlue = "0d47a1",
	Mint = "80cbc4",
	ForestGreen = "388e3c",
}

// ── Couleurs des yeux ─────────────────────────────────────────────────────────

export enum EyeColor {
	Black = "0a0a0a",
	DarkBrown = "4a312c",
	Brown = "724133",
	Hazel = "8d6e63",
	Amber = "b07c4d",
	Green = "3d6b34",
	Blue = "3b6fa0",
	LightBlue = "6baed6",
	Gray = "737373",
}

// ── Couleurs de fond ──────────────────────────────────────────────────────────

export enum BackgroundColor {
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
	Transparent = "transparent",
}

// ─────────────────────────────────────────────────────────────────────────────
// MOOD SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

export enum Mood {
	Happy = "HAPPY",
	Excited = "EXCITED",
	Loving = "LOVING",
	Playful = "PLAYFUL",
	Proud = "PROUD",
	Neutral = "NEUTRAL",
	Sleepy = "SLEEPY",
	Bored = "BORED",
	Confused = "CONFUSED",
	Sad = "SAD",
	Angry = "ANGRY",
	Scared = "SCARED",
	Surprised = "SURPRISED",
	Silly = "SILLY",
}

interface MoodPool {
	eyes: Eyes[];
	eyebrows: Eyebrows[];
	mouth: Mouth[];
}

export const MOOD_POOLS: Record<Mood, MoodPool> = {
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

export enum Gender {
	Female = "FEMALE",
	Male = "MALE",
	Neutral = "NEUTRAL",
}

interface GenderPool {
	head: HeadShape[];
	eyes: Eyes[];
	mouth: Mouth[];
	hair: Hair[];
}

export const GENDER_POOLS: Record<Gender, GenderPool> = {
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

export enum Ethnicity {
	NorthEuropean = "NORTH_EUROPEAN", // Scandinavie, Pays-Bas, UK du Nord
	WestEuropean = "WEST_EUROPEAN", // France, Allemagne, UK général
	SouthEuropean = "SOUTH_EUROPEAN", // Méditerranée (extensions futures)
	EastAsian = "EAST_ASIAN", // Japon, Chine, Corée
	SouthAsian = "SOUTH_ASIAN", // Inde, Pakistan, Bangladesh
	Latino = "LATINO", // Brésil, Mexique, Amérique latine
	BlackAfrican = "BLACK_AFRICAN", // Afrique subsaharienne & diaspora
	Mixed = "MIXED", // Catch-all pour pays très divers
}

// ── Profils physiques par ethnie ──────────────────────────────────────────────

interface EthnicityProfile {
	skinColors: { color: SkinColor; weight: number }[];
	hairColors: { color: HairColor; weight: number }[];
	hairCuts: {
		male: { hair: Hair; weight: number }[];
		female: { hair: Hair; weight: number }[];
	};
	beardProbability: number; // entre 0 et 1
}

export const ETHNICITY_PROFILES: Record<Ethnicity, EthnicityProfile> = {
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

export enum Country {
	USA = "USA",
	Canada = "Canada",
	UK = "UK",
	Australia = "Australia",
	Germany = "Germany",
	France = "France",
	Japan = "Japan",
	China = "China",
	India = "India",
	Brazil = "Brazil",
	Sweden = "Sweden",
	Netherlands = "Netherlands",
	Denmark = "Denmark",
}

export const ethnicitiesByCountry: Record<Country, { ethnicity: Ethnicity; weight: number }[]> = {
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

function weightedPick<E extends { weight: number }, T>(entries: E[], getValue: (e: E) => T): T {
	const total = entries.reduce((sum, e) => sum + e.weight, 0);
	let rand = Math.random() * total;
	for (const entry of entries) {
		rand -= entry.weight;
		if (rand <= 0) return getValue(entry);
	}
	return getValue(entries[entries.length - 1]!);
}

export function pickEthnicity(country: Country): Ethnicity {
	return weightedPick(ethnicitiesByCountry[country], (e) => e.ethnicity);
}

export function pickSkinColor(ethnicity: Ethnicity): SkinColor {
	return weightedPick(ETHNICITY_PROFILES[ethnicity].skinColors, (e) => e.color);
}

export function pickHairColor(ethnicity: Ethnicity): HairColor {
	return weightedPick(ETHNICITY_PROFILES[ethnicity].hairColors, (e) => e.color);
}

export function pickHaircut(ethnicity: Ethnicity, gender: Gender): Hair {
	const pool = ETHNICITY_PROFILES[ethnicity].hairCuts;
	const entries = gender === Gender.Female ? pool.female : pool.male;
	return weightedPick(entries, (e) => e.hair);
}

export function pickHasBeard(ethnicity: Ethnicity): boolean {
	return Math.random() < ETHNICITY_PROFILES[ethnicity].beardProbability;
}

/**
 * Génère un profil physique complet et cohérent depuis un pays et un genre.
 *
 * Usage :
 *   const { ethnicity, skinColor, hairColor, hair, hasBeard } = pickPhysicalProfile(Country.Japan, Gender.Male);
 */
export function pickPhysicalProfile(country: Country, gender: Gender) {
	const ethnicity = pickEthnicity(country);
	const skinColor = pickSkinColor(ethnicity);
	const hairColor = pickHairColor(ethnicity);
	const hair = pickHaircut(ethnicity, gender);
	const hasBeard = gender !== Gender.Female && pickHasBeard(ethnicity);

	return { ethnicity, skinColor, hairColor, hair, hasBeard };
}
