// ─────────────────────────────────────────────────────────────────────────────
// LORELEI ETHNICITY SYSTEM
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
import { Gender } from "./lorelei-gender";
import { Hair, HairColor, SkinColor, } from "./lorelei-traits";
/**
 * Ethnic background categories used to drive coherent physical trait generation.
 * These are probabilistic abstractions, not strict biological classifications.
 */
export var Ethnicity;
(function (Ethnicity) {
    /** Scandinavia, Netherlands, Northern UK. */
    Ethnicity["NorthEuropean"] = "NORTH_EUROPEAN";
    /** France, Germany, UK general. */
    Ethnicity["WestEuropean"] = "WEST_EUROPEAN";
    /** Mediterranean (future extensions). */
    Ethnicity["SouthEuropean"] = "SOUTH_EUROPEAN";
    /** Japan, China, Korea. */
    Ethnicity["EastAsian"] = "EAST_ASIAN";
    /** India, Pakistan, Bangladesh. */
    Ethnicity["SouthAsian"] = "SOUTH_ASIAN";
    /** Brazil, Mexico, Latin America. */
    Ethnicity["Latino"] = "LATINO";
    /** Sub-Saharan Africa & diaspora. */
    Ethnicity["BlackAfrican"] = "BLACK_AFRICAN";
    /** Catch-all for highly diverse countries. */
    Ethnicity["Mixed"] = "MIXED";
})(Ethnicity || (Ethnicity = {}));
/**
 * Complete physical profile definitions for each {@link Ethnicity}.
 * Weights are relative — only their ratios matter.
 */
export const ETHNICITY_PROFILES = {
    // ── North European ────────────────────────────────────────────────────────
    // Very light skin, blonde to brown hair, blue/green/grey eyes possible
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
            // Fantasy (Nordic-influenced trend colors)
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
    // ── West European ─────────────────────────────────────────────────────────
    // Light to tan skin, brown to dark hair dominant, red present
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
    // ── South European ────────────────────────────────────────────────────────
    // Olive to tan skin, dark hair dominant, Mediterranean structure
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
    // ── East Asian ────────────────────────────────────────────────────────────
    // Light to medium skin, black/dark brown hair almost exclusively, straight hair
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
                { hair: Hair.BoyFringe, weight: 12 }, // very common in East Asia
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
                { hair: Hair.GirlLongStraight, weight: 18 }, // very common long straight
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
    // ── South Asian ───────────────────────────────────────────────────────────
    // Medium to dark skin, black hair dominant, beard more common
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
                { hair: Hair.BaldShaved, weight: 4 }, // ritual/practical shaving common
            ],
            female: [
                { hair: Hair.GirlLongStraight, weight: 14 },
                { hair: Hair.GirlLongFlat, weight: 12 },
                { hair: Hair.GirlLongWavy, weight: 10 },
                { hair: Hair.GirlHighBun, weight: 12 }, // high bun typical
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
    // Wide range of skin tones, dark to brown hair, wavy texture common
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
    // ── Black African ─────────────────────────────────────────────────────────
    // Brown to very dark skin, very dark hair, curly/coily textures
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
                { hair: Hair.BaldShaved, weight: 8 }, // very common
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
    // ── Mixed ─────────────────────────────────────────────────────────────────
    // Full palette — for highly multicultural countries
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
            // Moderate fantasy
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
// Each country defines its ethnicities with associated weights.
// Skin/hair/hairstyle are then drawn from the selected ethnicity's profile.
/** Countries supported for ethnicity-weighted character generation. */
export var Country;
(function (Country) {
    /** United States of America. */
    Country["USA"] = "USA";
    /** Canada. */
    Country["Canada"] = "Canada";
    /** United Kingdom. */
    Country["UK"] = "UK";
    /** Australia. */
    Country["Australia"] = "Australia";
    /** Germany. */
    Country["Germany"] = "Germany";
    /** France. */
    Country["France"] = "France";
    /** Japan. */
    Country["Japan"] = "Japan";
    /** China. */
    Country["China"] = "China";
    /** India. */
    Country["India"] = "India";
    /** Brazil. */
    Country["Brazil"] = "Brazil";
    /** Sweden. */
    Country["Sweden"] = "Sweden";
    /** Netherlands. */
    Country["Netherlands"] = "Netherlands";
    /** Denmark. */
    Country["Denmark"] = "Denmark";
})(Country || (Country = {}));
/**
 * Maps each {@link Country} to a weighted list of ethnicities reflecting its demographic composition.
 * Weights are relative — only their ratios matter.
 */
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
        { ethnicity: Ethnicity.SouthEuropean, weight: 8 }, // Turkish/Balkan diaspora
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
        { ethnicity: Ethnicity.EastAsian, weight: 5 }, // significant Japanese/Chinese diaspora
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
/**
 * Picks a random value from a weighted entry list.
 *
 * @param entries  - Array of entries, each carrying a numeric `weight`.
 * @param getValue - Extracts the result value from an entry.
 * @returns A randomly selected value, proportional to weights.
 */
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
/**
 * Picks a random ethnicity for the given country, weighted by demographic composition.
 *
 * @param country - The target country.
 * @returns A randomly selected {@link Ethnicity}.
 */
export function pickEthnicity(country) {
    return weightedPick(ethnicitiesByCountry[country], (e) => e.ethnicity);
}
/**
 * Picks a random skin color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link SkinColor}.
 */
export function pickSkinColor(ethnicity) {
    return weightedPick(ETHNICITY_PROFILES[ethnicity].skinColors, (e) => e.color);
}
/**
 * Picks a random hair color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link HairColor}.
 */
export function pickHairColor(ethnicity) {
    return weightedPick(ETHNICITY_PROFILES[ethnicity].hairColors, (e) => e.color);
}
/**
 * Picks a random hairstyle coherent with the given ethnicity and gender.
 *
 * @param ethnicity - The target ethnicity.
 * @param gender    - The character's gender (selects the male or female sub-pool).
 * @returns A randomly selected {@link Hair} style.
 */
export function pickHaircut(ethnicity, gender) {
    const pool = ETHNICITY_PROFILES[ethnicity].hairCuts;
    const entries = gender === Gender.Female ? pool.female : pool.male;
    return weightedPick(entries, (e) => e.hair);
}
/**
 * Returns whether a male character of the given ethnicity would have a beard.
 *
 * @param ethnicity - The target ethnicity.
 * @returns `true` if the character has a beard, based on the ethnicity's beard probability.
 */
export function pickHasBeard(ethnicity) {
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
export function pickPhysicalProfile(country, gender) {
    const ethnicity = pickEthnicity(country);
    const skinColor = pickSkinColor(ethnicity);
    const hairColor = pickHairColor(ethnicity);
    const hair = pickHaircut(ethnicity, gender);
    const hasBeard = gender !== Gender.Female && pickHasBeard(ethnicity);
    return { ethnicity, skinColor, hairColor, hair, hasBeard };
}
