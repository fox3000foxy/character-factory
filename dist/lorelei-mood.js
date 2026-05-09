// ─────────────────────────────────────────────────────────────────────────────
// LORELEI MOOD SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
import { Eyes, Eyebrows, Mouth } from "./lorelei-traits";
/** Emotional moods that drive the selection of eyes, eyebrows, and mouth. */
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
/**
 * Maps each {@link Mood} to compatible face feature pools.
 * Used by {@link CharacterFactory.setMood} to randomly pick coherent expressions.
 */
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
