import { BackgroundColor, Beard, CharacterFactory, Country, Earrings, Eyebrows, EyeColor, Eyes, Gender, Glasses, HairAccessory, HairColor, HeadShape, Mood, Mouth, Nose, pick, pickEnum, pickEthnicity, pickHairColor, pickHaircut, pickHasBeard, pickSkinColor, type CharacterConfig } from "character-factory";
import { writeFile } from "node:fs";

export enum Rarity {
	Common = "common",
	Uncommon = "uncommon",
	Rare = "rare",
	Epic = "epic",
	Legendary = "legendary",
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

export class Card implements ICard {
	id: string;
	title: string;
	description: string;
	rarity: Rarity;
	country: string;
	adn: CharacterConfig;
	imageUrl?: string;

	constructor() {
		this.id = "";
		this.title = "";
		this.description = "";
		this.country = "";
		this.adn = {} as CharacterConfig;
		this.rarity = Rarity.Common;
		this.imageUrl = undefined;
	}
}

const FAKER_LOCALES: Record<Country, string> = {
	[Country.USA]: "en_US",
	[Country.Canada]: "en_CA",
	[Country.UK]: "en_GB",
	[Country.Australia]: "en_AU",
	[Country.Germany]: "de",
	[Country.France]: "fr",
	[Country.Sweden]: "sv",
	[Country.Netherlands]: "nl",
	[Country.Denmark]: "da",
	[Country.Japan]: "ja",
	[Country.China]: "zh_CN",
	[Country.India]: "en_IN",
	[Country.Brazil]: "pt_BR",
};

export function getFakerByCountry(country: Country) {
	return import(`@faker-js/faker/locale/${FAKER_LOCALES[country] ?? ""}`);
}

async function generateConfigFromCountry(country: Country): Promise<Card> {
	const gender = pickEnum(Gender);
	const ethnicity = pickEthnicity(country); // ← point d'entrée unique

	const { faker } = await getFakerByCountry(country);

	const config: CharacterConfig = {
		seed: Math.random().toString(36).substring(2),
		gender: gender,
		mood: pickEnum(Mood),
		face: {
			headShape: pickEnum(HeadShape),
			skinColor: pickSkinColor(ethnicity),
			eyes: pickEnum(Eyes),
			eyesColor: pickEnum(EyeColor),
			eyebrows: pickEnum(Eyebrows),
			eyebrowsColor: pickEnum(HairColor),
			nose: pickEnum(Nose),
			noseColor: "000000",
			mouth: pickEnum(Mouth),
			mouthColor: gender === Gender.Female ? "E74C3C" : "000000",
		},
		hair: {
			hair: pickHaircut(ethnicity, gender),
			hairColor: pickHairColor(ethnicity),
			beard: gender === Gender.Male && pickHasBeard(ethnicity) ? pickEnum(Beard) : Beard.None,
			freckles: pick([true, false]),
			frecklesColor: "F5CBA7",
		},
		accessories: {
			glasses: pick([true, false]) ? pickEnum(Glasses) : Glasses.None,
			glassesColor: "000000",
			earrings: gender === Gender.Female && pick([true, false]) ? pickEnum(Earrings) : Earrings.None,
			earringsColor: "000000",
			hairAccessory: gender === Gender.Female ? pickEnum(HairAccessory) : HairAccessory.None,
			hairAccessoryColor: "000000",
		},
		presentation: {
			backgroundColor: BackgroundColor.Transparent,
		},
	};

	const factory = new CharacterFactory();
	factory
		.fromConfig(config)
		.setMood(Mood.Happy)
		.setHeadShape(gender === Gender.Female ? HeadShape.Angular : pickEnum(HeadShape))
	.buildPng()
	.then((png) =>
		writeFile(`${process.cwd()}/avatars/${country}${config.seed}.png`, png, (err) => {
			if (err) {
				console.error(`Error saving PNG for ${country}:`, err);
			}
		}),
	);

	// Faker profile
	const card: Card = {
		id: `${country}-${config.seed}`,
		title: faker.person.fullName({
			sex: gender === Gender.Male ? "male" : "female",
		}),
		description: faker.lorem.sentence(),
		country: country,
		rarity: Rarity.Common,
		adn: factory.getConfig(),
	};

	return card;
}

async function main() {
	const country = Country.UK; // Specify the country

	try {
		const card = await generateConfigFromCountry(country);

		console.log("Generated Card:", card);
		console.log("Character Configuration:", card.adn);
	} catch (error) {
		console.error("Error generating character configuration:", error);
	}
}

main();
