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

export function getFakerByCountry(country: Country) {
	switch (country) {
		case Country.USA:
			return import("@faker-js/faker/locale/en_US");
		case Country.Canada:
			return import("@faker-js/faker/locale/en_CA");
		case Country.UK:
			return import("@faker-js/faker/locale/en_GB");
		case Country.Australia:
			return import("@faker-js/faker/locale/en_AU");
		case Country.Germany:
			return import("@faker-js/faker/locale/de");
		case Country.France:
			return import("@faker-js/faker/locale/fr");
		case Country.Sweden:
			return import("@faker-js/faker/locale/sv");
		case Country.Netherlands:
			return import("@faker-js/faker/locale/nl");
		case Country.Denmark:
			return import("@faker-js/faker/locale/da");
		case Country.Japan:
			return import("@faker-js/faker/locale/ja");
		case Country.China:
			return import("@faker-js/faker/locale/zh_CN");
		case Country.India:
			return import("@faker-js/faker/locale/en_IN");
		case Country.Brazil:
			return import("@faker-js/faker/locale/pt_BR");
		default:
			return import("@faker-js/faker");
	}
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
		.setHeadShape(Gender.Female ? HeadShape.Angular : pickEnum(HeadShape))
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
