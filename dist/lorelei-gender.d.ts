import { Eyes, Mouth, HeadShape, type Hair } from "./lorelei-traits";
/** Character gender, influencing head shape, hairstyle, eye, and mouth pools. */
export declare enum Gender {
    Female = "FEMALE",
    Male = "MALE",
    Neutral = "NEUTRAL"
}
/** Pools of feature variants associated with a given gender. */
interface GenderPool {
    head: HeadShape[];
    eyes: Eyes[];
    mouth: Mouth[];
    hair: Hair[];
}
/**
 * Maps each {@link Gender} to compatible feature pools.
 * Used by {@link CharacterFactory.setGender} to randomize gender-coherent appearances.
 */
export declare const GENDER_POOLS: Record<Gender, GenderPool>;
export {};
//# sourceMappingURL=lorelei-gender.d.ts.map