// ─────────────────────────────────────────────────────────────────────────────
// LORELEI GENDER SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

import { Eyes, HairFemale, HairMale, HeadShape, Mouth, type Hair } from "./lorelei-traits";

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
    hair:  [...HairFemale, ...HairMale],
  },
};
