import { Country, type CharacterConfig } from "character-factory";
export declare enum Rarity {
    Common = "common",
    Uncommon = "uncommon",
    Rare = "rare",
    Epic = "epic",
    Legendary = "legendary"
}
interface ICard {
    id: string;
    title: string;
    description: string;
    rarity: Rarity;
    country: string;
    adn: CharacterConfig;
    imageUrl?: string;
}
export declare class Card implements ICard {
    id: string;
    title: string;
    description: string;
    rarity: Rarity;
    country: string;
    adn: CharacterConfig;
    imageUrl?: string;
    constructor();
}
export declare function getFakerByCountry(country: Country): Promise<any>;
export {};
//# sourceMappingURL=example.d.ts.map