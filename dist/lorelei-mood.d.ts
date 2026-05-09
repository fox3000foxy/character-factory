import { Eyebrows, Eyes, Mouth } from "./lorelei-traits";
/** Emotional moods that drive the selection of eyes, eyebrows, and mouth. */
export declare enum Mood {
    /** Happy mood: cheerful and joyful expression. */
    Happy = "HAPPY",
    /** Excited mood: energetic and enthusiastic expression. */
    Excited = "EXCITED",
    /** Loving mood: affectionate and tender expression. */
    Loving = "LOVING",
    /** Playful mood: mischievous and fun expression. */
    Playful = "PLAYFUL",
    /** Proud mood: confident and satisfied expression. */
    Proud = "PROUD",
    /** Neutral mood: calm and composed expression. */
    Neutral = "NEUTRAL",
    /** Sleepy mood: drowsy and tired expression. */
    Sleepy = "SLEEPY",
    /** Bored mood: disinterested and indifferent expression. */
    Bored = "BORED",
    /** Confused mood: puzzled and perplexed expression. */
    Confused = "CONFUSED",
    /** Sad mood: sorrowful and downcast expression. */
    Sad = "SAD",
    /** Angry mood: irritated and hostile expression. */
    Angry = "ANGRY",
    /** Scared mood: fearful and anxious expression. */
    Scared = "SCARED",
    /** Surprised mood: shocked and astonished expression. */
    Surprised = "SURPRISED",
    /** Silly mood: goofy and humorous expression. */
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