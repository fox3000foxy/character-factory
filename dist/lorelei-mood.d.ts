import { Eyes, Eyebrows, Mouth } from "./lorelei-traits";
/** Emotional moods that drive the selection of eyes, eyebrows, and mouth. */
export declare enum Mood {
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
    Silly = "SILLY"
}
/** Pools of face feature variants associated with a given mood. */
interface MoodPool {
    eyes: Eyes[];
    eyebrows: Eyebrows[];
    mouth: Mouth[];
}
/**
 * Maps each {@link Mood} to compatible face feature pools.
 * Used by {@link CharacterFactory.setMood} to randomly pick coherent expressions.
 */
export declare const MOOD_POOLS: Record<Mood, MoodPool>;
export {};
//# sourceMappingURL=lorelei-mood.d.ts.map