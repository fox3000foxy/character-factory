# Character Factory

The `Character Factory` module provides a robust system for generating customizable character configurations. It includes utilities for defining traits, generating random configurations, and applying genetic rules for inheritance.

## Features

- **Character Configuration**: Define characters with traits such as face, hair, accessories, and mood.
- **Randomization**: Generate random characters based on country, gender, and ethnicity.
- **Genetics Engine**: Simulate inheritance of traits like skin color, eye color, and hair color.
- **Batch Generation**: Create multiple characters in a single operation.
- **DiceBear Integration**: Export configurations to DiceBear-compatible options.

## Available Enums

### Face Traits
- `HeadShape`
- `SkinColor`
- `Eyes`
- `EyeColor`
- `Eyebrows`
- `Mouth`
- `Nose`

### Hair Traits
- `Hair`
- `HairColor`
- `Beard`

### Accessories
- `Glasses`
- `Earrings`
- `HairAccessory`

### Other
- `Mood`
- `Gender`
- `BackgroundColor`
- `Country`
- `Ethnicity`

## Example Usage

### Generate a Character Configuration

```typescript
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
```

## Installation

Install the module via npm:

```bash
npm install character-factory
```

## API Reference

### `CharacterFactory`
A fluent builder class for creating and managing character configurations.

#### Constructor
- `new CharacterFactory(seed?: string)` - Creates a new factory, optionally with a deterministic seed

#### Configuration Methods
- `fromConfig(config: CharacterConfig): this` - Load a full configuration
- `fromPartialConfig(partial: DeepPartial<CharacterConfig>): this` - Merge partial config
- `patchConfig(partial): this` - Apply a partial patch
- `getConfig(): Readonly<CharacterConfig>` - Get current configuration snapshot

#### Randomization Methods
- `randomize(): this` - Randomize all traits
- `randomizeFace(): this` - Randomize face traits
- `randomizeHair(): this` - Randomize hair traits
- `randomizeAccessories(): this` - Randomize accessories
- `randomizeMood(): this` - Randomize mood

#### Genetics Engine
- `projectChild(partner: CharacterConfig, options?): CharacterFactory` - Simulate genetic inheritance

#### Export Methods
- `buildSvg(): string` - Render as SVG
- `buildPng(size?: number): Promise<Buffer>` - Render as PNG (requires sharp)
- `toJSON(): string` - Serialize to JSON
- `toBase64(): string` - Serialize to Base64

### `batchFactory(factory, options, onProgress?)`
Generates multiple characters from a base factory with automatic metadata generation.

**Options:**
- `count` - Number of characters to generate
- `outputDir` - Output directory
- `size` - PNG size (default: 256)
- `prefix` - Filename prefix (default: "character")
- `randomize` - Randomize each clone (default: false)
- `saveConfigs` - Save JSON configs (default: false)

### Utility Functions
- `pick<T>(arr: T[]): T` - Pick random element from array
- `pickEnum<T>(e: Record<string, T>): T` - Pick random enum value

### Exports from `lorelei-traits.ts`
Enums: `Eyes`, `Eyebrows`, `Mouth`, `HeadShape`, `Nose`, `Hair`, `HairColor`, `SkinColor`, `EyeColor`, `Glasses`, `Earrings`, `Beard`, `HairAccessory`, `BackgroundColor`

Arrays: `HairMale`, `HairFemale`, `HairUnisex`, `HairBald`

## License

This module is licensed under the MIT License.
