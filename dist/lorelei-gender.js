// ─────────────────────────────────────────────────────────────────────────────
// LORELEI GENDER SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
import { Eyes, Mouth, HeadShape, HairMale, HairFemale } from "./lorelei-traits";
/** Character gender, influencing head shape, hairstyle, eye, and mouth pools. */
export var Gender;
(function (Gender) {
    Gender["Female"] = "FEMALE";
    Gender["Male"] = "MALE";
    Gender["Neutral"] = "NEUTRAL";
})(Gender || (Gender = {}));
/**
 * Maps each {@link Gender} to compatible feature pools.
 * Used by {@link CharacterFactory.setGender} to randomize gender-coherent appearances.
 */
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
        hair: [...HairFemale, ...HairMale],
    },
};
