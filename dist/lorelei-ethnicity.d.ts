import { SkinColor, HairColor, Hair } from "./lorelei-traits";
import { Gender } from "./lorelei-gender";
/**
 * Ethnic background categories used to drive coherent physical trait generation.
 * These are probabilistic abstractions, not strict biological classifications.
 */
export declare enum Ethnicity {
    NorthEuropean = "NORTH_EUROPEAN",// Scandinavia, Netherlands, Northern UK
    WestEuropean = "WEST_EUROPEAN",// France, Germany, UK general
    SouthEuropean = "SOUTH_EUROPEAN",// Mediterranean (future extensions)
    EastAsian = "EAST_ASIAN",// Japan, China, Korea
    SouthAsian = "SOUTH_ASIAN",// India, Pakistan, Bangladesh
    Latino = "LATINO",// Brazil, Mexico, Latin America
    BlackAfrican = "BLACK_AFRICAN",// Sub-Saharan Africa & diaspora
    Mixed = "MIXED"
}
/**
 * Physical trait pools for a given ethnicity.
 * Used internally by the pick functions to generate coherent appearances.
 */
interface EthnicityProfile {
    /** Weighted skin tone options. */
    skinColors: {
        color: SkinColor;
        weight: number;
    }[];
    /** Weighted natural hair color options. */
    hairColors: {
        color: HairColor;
        weight: number;
    }[];
    /** Weighted hairstyle options split by gender. */
    hairCuts: {
        male: {
            hair: Hair;
            weight: number;
        }[];
        female: {
            hair: Hair;
            weight: number;
        }[];
    };
    /** Probability of a beard for male characters (0–1). */
    beardProbability: number;
}
/**
 * Complete physical profile definitions for each {@link Ethnicity}.
 * Weights are relative — only their ratios matter.
 */
export declare const ETHNICITY_PROFILES: Record<Ethnicity, EthnicityProfile>;
/** Countries supported for ethnicity-weighted character generation. */
export declare enum Country {
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
    Denmark = "Denmark"
}
/**
 * Maps each {@link Country} to a weighted list of ethnicities reflecting its demographic composition.
 * Weights are relative — only their ratios matter.
 */
export declare const ethnicitiesByCountry: Record<Country, {
    ethnicity: Ethnicity;
    weight: number;
}[]>;
/**
 * Picks a random ethnicity for the given country, weighted by demographic composition.
 *
 * @param country - The target country.
 * @returns A randomly selected {@link Ethnicity}.
 */
export declare function pickEthnicity(country: Country): Ethnicity;
/**
 * Picks a random skin color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link SkinColor}.
 */
export declare function pickSkinColor(ethnicity: Ethnicity): SkinColor;
/**
 * Picks a random hair color coherent with the given ethnicity.
 *
 * @param ethnicity - The target ethnicity.
 * @returns A randomly selected {@link HairColor}.
 */
export declare function pickHairColor(ethnicity: Ethnicity): HairColor;
/**
 * Picks a random hairstyle coherent with the given ethnicity and gender.
 *
 * @param ethnicity - The target ethnicity.
 * @param gender    - The character's gender (selects the male or female sub-pool).
 * @returns A randomly selected {@link Hair} style.
 */
export declare function pickHaircut(ethnicity: Ethnicity, gender: Gender): Hair;
/**
 * Returns whether a male character of the given ethnicity would have a beard.
 *
 * @param ethnicity - The target ethnicity.
 * @returns `true` if the character has a beard, based on the ethnicity's beard probability.
 */
export declare function pickHasBeard(ethnicity: Ethnicity): boolean;
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
export declare function pickPhysicalProfile(country: Country, gender: Gender): {
    ethnicity: Ethnicity;
    skinColor: SkinColor;
    hairColor: HairColor;
    hair: Hair;
    hasBeard: boolean;
};
export {};
//# sourceMappingURL=lorelei-ethnicity.d.ts.map