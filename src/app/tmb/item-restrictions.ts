import { Class } from '../loot-list/models/class.model';

/**
 * This is used to denote which items may be listed by which classes, and if multiples are allowed (for example, non-unique 1h weapons or rings, tier tokens for MS/OS, etc.)
 */
export type ItemRestrictions = {
  [itemId: string]: {
    // Helper property to allow searchability of this file
    ITEM_NAME?: string;
    // For ease of creating this list one of 'allowed' or 'restricted' may be used. Both should not be used together though.
    // For example, if an item is Mage Only, it's easier to just 'Class.Mage' into 'allowedClasses'
    // instead of adding everything except Mage into 'restrictedClasses'
    // If both of these properties are empty or do not exist, the item will be available to all.
    allowedClasses?: Class[];
    restrictedClasses?: Class[];
    // Default 1
    allowedRankings?: number;
  };
};

export const ITEM_RESTRICTIONS: ItemRestrictions = {
  "59461": {
    "ITEM_NAME": "Fury of Angerforge",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "59520": {
    "ITEM_NAME": "Unheeded Warning",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60226": {
    "ITEM_NAME": "Dargonax's Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60227": {
    "ITEM_NAME": "Caelestrasz's Will",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60228": {
    "ITEM_NAME": "Bracers of the Mat'redor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60229": {
    "ITEM_NAME": "War-Torn Crushers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60230": {
    "ITEM_NAME": "Twilight Scale Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60231": {
    "ITEM_NAME": "Belt of the Fallen Brood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60232": {
    "ITEM_NAME": "Shroud of Endless Grief",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60233": {
    "ITEM_NAME": "Shard of Woe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60234": {
    "ITEM_NAME": "Bindings of Bleak Betrayal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60235": {
    "ITEM_NAME": "Boots of Az'galada",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60236": {
    "ITEM_NAME": "Nightmare Rider's Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60237": {
    "ITEM_NAME": "Crown of the Twilight Queen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "60238": {
    "ITEM_NAME": "Bracers of the Dark Mother",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "63041": {
    "ITEM_NAME": "Reins of the Drake of the South Wind",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65000": {
    "ITEM_NAME": "Crown of the Forlorn Protector",
    "allowedClasses": [Class.Warrior, Class.Hunter, Class.Shaman],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65001": {
    "ITEM_NAME": "Crown of the Forlorn Conqueror",
    "allowedClasses": [Class.Warlock, Class.Paladin, Class.Priest],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65002": {
    "ITEM_NAME": "Crown of the Forlorn Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65003": {
    "ITEM_NAME": "Reclaimed Ashkandi, Greatsword of the Brotherhood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65004": {
    "ITEM_NAME": "Circuit Design Breastplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65005": {
    "ITEM_NAME": "Claws of Agony",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65006": {
    "ITEM_NAME": "Claws of Torment",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65007": {
    "ITEM_NAME": "Akirus the Worm-Breaker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65008": {
    "ITEM_NAME": "Shadowforge's Lightbound Smock",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65009": {
    "ITEM_NAME": "Hide of Chromaggus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65010": {
    "ITEM_NAME": "Ironstar's Impenetrable Cover",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65011": {
    "ITEM_NAME": "Corehammer's Riveted Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65012": {
    "ITEM_NAME": "Treads of Savage Beatings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65013": {
    "ITEM_NAME": "Maldo's Sword Cane",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65014": {
    "ITEM_NAME": "Maimgor's Bite",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65016": {
    "ITEM_NAME": "Theresa's Booklight",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65017": {
    "ITEM_NAME": "Andoros, Fist of the Dragon King",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65018": {
    "ITEM_NAME": "Shadow of Dread",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65019": {
    "ITEM_NAME": "Shadowblaze Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65020": {
    "ITEM_NAME": "Crown of Burning Waters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65021": {
    "ITEM_NAME": "Manacles of the Sleeping Beast",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65022": {
    "ITEM_NAME": "Belt of the Blackhand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65023": {
    "ITEM_NAME": "Akmin-Kurai, Dominion's Shield",
    "allowedClasses": [Class.Warrior, Class.Paladin],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65024": {
    "ITEM_NAME": "Crul'korak, the Lightning's Arc",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65025": {
    "ITEM_NAME": "Rage of Ages",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65026": {
    "ITEM_NAME": "Prestor's Talisman of Machination",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65027": {
    "ITEM_NAME": "Pauldrons of the Apocalypse",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65028": {
    "ITEM_NAME": "Chimaeron Armguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65029": {
    "ITEM_NAME": "Jar of Ancient Remedies",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65030": {
    "ITEM_NAME": "Leggings of Consuming Flames",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65031": {
    "ITEM_NAME": "Flash Freeze Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65032": {
    "ITEM_NAME": "Legwraps of the Greatest Son",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65033": {
    "ITEM_NAME": "Treads of Flawless Creation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65034": {
    "ITEM_NAME": "Belt of Arcane Storms",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65035": {
    "ITEM_NAME": "Cloak of Biting Chill",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65036": {
    "ITEM_NAME": "Mace of Acrid Death",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65037": {
    "ITEM_NAME": "Tunic of Failed Experiments",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65038": {
    "ITEM_NAME": "Dragon Bone Warhelm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65039": {
    "ITEM_NAME": "Aberration's Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65040": {
    "ITEM_NAME": "Belt of Absolute Zero",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65041": {
    "ITEM_NAME": "Incineratus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65042": {
    "ITEM_NAME": "Breastplate of Avenging Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65043": {
    "ITEM_NAME": "Mantle of Nefarius",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65044": {
    "ITEM_NAME": "Flame Pillar Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65045": {
    "ITEM_NAME": "Scorched Wormling Vest",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65046": {
    "ITEM_NAME": "Lifecycle Waistguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65047": {
    "ITEM_NAME": "Lava Spine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65048": {
    "ITEM_NAME": "Symbiotic Worm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65049": {
    "ITEM_NAME": "Leggings of Lethal Force",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65050": {
    "ITEM_NAME": "Parasitic Bands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65051": {
    "ITEM_NAME": "Molten Tantrum Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65052": {
    "ITEM_NAME": "Kingdom's Heart",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65053": {
    "ITEM_NAME": "Bell of Enraging Resonance",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65054": {
    "ITEM_NAME": "Mantle of Roaring Flames",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65055": {
    "ITEM_NAME": "Gloves of Cacophony",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65056": {
    "ITEM_NAME": "Bracers of the Burningeye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65057": {
    "ITEM_NAME": "Belt of the Nightmare",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65058": {
    "ITEM_NAME": "Themios the Darkbringer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65059": {
    "ITEM_NAME": "Ironstar Amulet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65060": {
    "ITEM_NAME": "Sark of the Unwatched",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65061": {
    "ITEM_NAME": "Legguards of the Unseeing",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65062": {
    "ITEM_NAME": "Battleplate of Ancient Kings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65063": {
    "ITEM_NAME": "Boots of Vertigo",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65064": {
    "ITEM_NAME": "Finkle's Mixer Upper",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65065": {
    "ITEM_NAME": "Brackish Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65066": {
    "ITEM_NAME": "Helm of the Blind Seer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65067": {
    "ITEM_NAME": "Burden of Mortality",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65068": {
    "ITEM_NAME": "Chaos Beast Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65069": {
    "ITEM_NAME": "Einhorn's Galoshes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65070": {
    "ITEM_NAME": "Bile-O-Tron Nut",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65071": {
    "ITEM_NAME": "Plated Fists of Provocation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65072": {
    "ITEM_NAME": "Heart of Rage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65073": {
    "ITEM_NAME": "Double Attack Handguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65074": {
    "ITEM_NAME": "Spaulders of the Scarred Lady",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65075": {
    "ITEM_NAME": "Massacre Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65076": {
    "ITEM_NAME": "Security Measure Alpha",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65077": {
    "ITEM_NAME": "Power Generator Hood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65078": {
    "ITEM_NAME": "Passive Resistor Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65079": {
    "ITEM_NAME": "X-Tron Duct Tape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65080": {
    "ITEM_NAME": "Life Force Chargers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65081": {
    "ITEM_NAME": "Organic Lifeform Inverter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65082": {
    "ITEM_NAME": "Lightning Conductor Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65083": {
    "ITEM_NAME": "Poison Protocol Pauldrons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65084": {
    "ITEM_NAME": "Voltage Source Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65085": {
    "ITEM_NAME": "Electron Inductor Coils",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65086": {
    "ITEM_NAME": "Jumbotron Power Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65087": {
    "ITEM_NAME": "Shoulders of the Forlorn Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65088": {
    "ITEM_NAME": "Shoulders of the Forlorn Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65089": {
    "ITEM_NAME": "Shoulders of the Forlorn Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65090": {
    "ITEM_NAME": "Twilight's Hammer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65091": {
    "ITEM_NAME": "Blade of the Witching Hour",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65092": {
    "ITEM_NAME": "Waistguard of Hatred",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65093": {
    "ITEM_NAME": "Helm of Eldritch Authority",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65094": {
    "ITEM_NAME": "Fang of Twilight",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65095": {
    "ITEM_NAME": "Dragonheart Piercer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65096": {
    "ITEM_NAME": "Daybreaker Helm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65097": {
    "ITEM_NAME": "Bracers of the Dark Pool",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65098": {
    "ITEM_NAME": "Crossfire Carbine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65100": {
    "ITEM_NAME": "Phase-Twister Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65101": {
    "ITEM_NAME": "Heaving Plates of Protection",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65102": {
    "ITEM_NAME": "Chelley's Staff of Dark Mending",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65103": {
    "ITEM_NAME": "Soul Blade",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65105": {
    "ITEM_NAME": "Theralion's Mirror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65106": {
    "ITEM_NAME": "Ring of Rivalry",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65107": {
    "ITEM_NAME": "Necklace of Strife",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65108": {
    "ITEM_NAME": "Drape of the Twins",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65109": {
    "ITEM_NAME": "Vial of Stolen Memories",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65110": {
    "ITEM_NAME": "Heart of Ignacious",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65111": {
    "ITEM_NAME": "Scepter of Ice",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65112": {
    "ITEM_NAME": "Valiona's Medallion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65113": {
    "ITEM_NAME": "Hydrolance Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65114": {
    "ITEM_NAME": "Feludius' Mantle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65115": {
    "ITEM_NAME": "Glaciated Helm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65116": {
    "ITEM_NAME": "Treads of Liquid Ice",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65117": {
    "ITEM_NAME": "Glittering Epidermis",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65118": {
    "ITEM_NAME": "Crushing Weight",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65119": {
    "ITEM_NAME": "Gravitational Pull",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65120": {
    "ITEM_NAME": "Arion's Crown",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65121": {
    "ITEM_NAME": "Terrastra's Legguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65122": {
    "ITEM_NAME": "Dispersing Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65123": {
    "ITEM_NAME": "Signet of the Fifth Circle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65124": {
    "ITEM_NAME": "Fall of Mortality",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65125": {
    "ITEM_NAME": "Kilt of the Forgotten Battle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65126": {
    "ITEM_NAME": "Hands of the Twilight Council",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65127": {
    "ITEM_NAME": "Shackles of the End of Days",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65128": {
    "ITEM_NAME": "Treads of Hideous Transformation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65129": {
    "ITEM_NAME": "Membrane of C'Thun",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65130": {
    "ITEM_NAME": "Helm of Maddening Whispers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65131": {
    "ITEM_NAME": "Battleplate of the Apocalypse",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65132": {
    "ITEM_NAME": "Coil of Ten-Thousand Screams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65133": {
    "ITEM_NAME": "Book of Binding Will",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65134": {
    "ITEM_NAME": "Wyrmbreaker's Amulet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65135": {
    "ITEM_NAME": "Robes of the Burning Acolyte",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65136": {
    "ITEM_NAME": "Helm of the Nether Scion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65137": {
    "ITEM_NAME": "Legguards of the Emerald Brood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65138": {
    "ITEM_NAME": "Bracers of the Bronze Flight",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65139": {
    "ITEM_NAME": "Malevolence",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65140": {
    "ITEM_NAME": "Essence of the Cyclone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65141": {
    "ITEM_NAME": "Proto-Handler's Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65142": {
    "ITEM_NAME": "Pauldrons of the Great Ettin",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65143": {
    "ITEM_NAME": "Bracers of Impossible Strength",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65144": {
    "ITEM_NAME": "Storm Rider's Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65145": {
    "ITEM_NAME": "Shalug'doom, the Axe of Unmaking",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65367": {
    "ITEM_NAME": "Mistral Circle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65368": {
    "ITEM_NAME": "Star Chaser Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65369": {
    "ITEM_NAME": "Sky Strider Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65370": {
    "ITEM_NAME": "Thunder Wall Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65371": {
    "ITEM_NAME": "Wind Stalker Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65372": {
    "ITEM_NAME": "Permafrost Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65373": {
    "ITEM_NAME": "Planetary Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65374": {
    "ITEM_NAME": "Gale Rouser Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65375": {
    "ITEM_NAME": "Tempest Keeper Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65376": {
    "ITEM_NAME": "Soul Breath Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65377": {
    "ITEM_NAME": "Lightning Well Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65378": {
    "ITEM_NAME": "Star Chaser Legguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65379": {
    "ITEM_NAME": "Sky Strider Greaves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65380": {
    "ITEM_NAME": "Thunder Wall Greaves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65381": {
    "ITEM_NAME": "Wind Stalker Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65382": {
    "ITEM_NAME": "Cloudburst Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "65383": {
    "ITEM_NAME": "Soul Breath Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65384": {
    "ITEM_NAME": "Gale Rouser Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65385": {
    "ITEM_NAME": "Tempest Keeper Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "65386": {
    "ITEM_NAME": "Lightning Well Legguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "66998": {
    "ITEM_NAME": "Essence of the Forlorn",
    "allowedClasses": [],
    "restrictedClasses": [Class.DeathKnight, Class.Druid, Class.Hunter, Class.Mage, Class.Paladin, Class.Priest, Class.Rogue, Class.Shaman, Class.Warlock, Class.Warrior],
    "allowedRankings": 3
  },
  "67423": {
    "ITEM_NAME": "Chest of the Forlorn Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67424": {
    "ITEM_NAME": "Chest of the Forlorn Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67425": {
    "ITEM_NAME": "Chest of the Forlorn Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67426": {
    "ITEM_NAME": "Leggings of the Forlorn Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67427": {
    "ITEM_NAME": "Leggings of the Forlorn Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67428": {
    "ITEM_NAME": "Leggings of the Forlorn Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67429": {
    "ITEM_NAME": "Gauntlets of the Forlorn Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67430": {
    "ITEM_NAME": "Gauntlets of the Forlorn Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "67431": {
    "ITEM_NAME": "Gauntlets of the Forlorn Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68130": {
    "ITEM_NAME": "Stormwake, the Tempest's Reach",
    "allowedClasses": [Class.Rogue, Class.Hunter],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68131": {
    "ITEM_NAME": "Stormwake, the Tempest's Reach",
    "allowedClasses": [Class.DeathKnight, Class.Warrior],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68132": {
    "ITEM_NAME": "Stormwake, the Tempest's Reach",
    "allowedClasses": [Class.Mage, Class.Paladin, Class.Warlock],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68600": {
    "ITEM_NAME": "Uhn'agh Fash, the Darkest Betrayal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68601": {
    "ITEM_NAME": "Scaleslicer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68915": {
    "ITEM_NAME": "Scales of Life",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "68972": {
    "ITEM_NAME": "Apparatus of Khaz'goroth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69110": {
    "ITEM_NAME": "Variable Pulse Lightning Capacitor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69111": {
    "ITEM_NAME": "Jaws of Defeat",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69112": {
    "ITEM_NAME": "The Hungerer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69138": {
    "ITEM_NAME": "Spidersilk Spindle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69139": {
    "ITEM_NAME": "Necromantic Focus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69149": {
    "ITEM_NAME": "Eye of Blazing Power",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69150": {
    "ITEM_NAME": "Matrix Restabilizer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69167": {
    "ITEM_NAME": "Vessel of Acceleration",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69224": {
    "ITEM_NAME": "Smoldering Egg of Millagazor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69237": {
    "ITEM_NAME": "Living Ember",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69815": {
    "ITEM_NAME": "Seething Cinder",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69878": {
    "ITEM_NAME": "Permafrost Cape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69879": {
    "ITEM_NAME": "Cloudburst Cloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69880": {
    "ITEM_NAME": "Mistral Pendant",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69881": {
    "ITEM_NAME": "Planetary Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69882": {
    "ITEM_NAME": "Planetary Amulet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69883": {
    "ITEM_NAME": "Permafrost Choker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69884": {
    "ITEM_NAME": "Mistral Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69885": {
    "ITEM_NAME": "Cloudburst Necklace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 6
  },
  "69957": {
    "ITEM_NAME": "Plans: Fists of Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69958": {
    "ITEM_NAME": "Plans: Eternal Elementium Handguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69959": {
    "ITEM_NAME": "Plans: Holy Flame Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69960": {
    "ITEM_NAME": "Pattern: Dragonfire Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69961": {
    "ITEM_NAME": "Pattern: Gloves of Unforgiving Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69962": {
    "ITEM_NAME": "Pattern: Clutches of Evil",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69963": {
    "ITEM_NAME": "Pattern: Heavenly Gloves of the Moon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69965": {
    "ITEM_NAME": "Pattern: Grips of Altered Reality",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69966": {
    "ITEM_NAME": "Pattern: Don Tayo's Inferno Mittens",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69968": {
    "ITEM_NAME": "Plans: Warboots of Mighty Lords",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69969": {
    "ITEM_NAME": "Plans: Mirrored Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69970": {
    "ITEM_NAME": "Plans: Emberforged Elementium Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69971": {
    "ITEM_NAME": "Pattern: Earthen Scale Sabatons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69972": {
    "ITEM_NAME": "Pattern: Footwraps of Quenched Fire",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69973": {
    "ITEM_NAME": "Pattern: Treads of the Craft",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69974": {
    "ITEM_NAME": "Pattern: Ethereal Footfalls",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69975": {
    "ITEM_NAME": "Pattern: Endless Dream Walkers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "69976": {
    "ITEM_NAME": "Pattern: Boots of the Black Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "70723": {
    "ITEM_NAME": "Sulfuras, The Extinguished Hand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "70929": {
    "ITEM_NAME": "Firebound Gorget",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71141": {
    "ITEM_NAME": "Eternal Ember",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71359": {
    "ITEM_NAME": "Chelley's Sterilized Scalpel",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71360": {
    "ITEM_NAME": "Spire of Scarlet Pain",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71361": {
    "ITEM_NAME": "Ranseur of Hatred",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71362": {
    "ITEM_NAME": "Obsidium Cleaver",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71365": {
    "ITEM_NAME": "Hide-Bound Chains",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71366": {
    "ITEM_NAME": "Lava Bolt Crossbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71367": {
    "ITEM_NAME": "Theck's Emberseal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71401": {
    "ITEM_NAME": "Widow's Kiss",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71402": {
    "ITEM_NAME": "Cinderweb Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71403": {
    "ITEM_NAME": "Flickering Shoulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71404": {
    "ITEM_NAME": "Arachnaflame Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71405": {
    "ITEM_NAME": "Carapace of Imbibed Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71406": {
    "ITEM_NAME": "Mandible of Beth'tilac",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71407": {
    "ITEM_NAME": "Robes of Smoldering Devastation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71408": {
    "ITEM_NAME": "Ward of the Red Widow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71409": {
    "ITEM_NAME": "Funeral Pyre",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71410": {
    "ITEM_NAME": "Cindersilk Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71411": {
    "ITEM_NAME": "Cowl of the Clicking Menace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71412": {
    "ITEM_NAME": "Thoracic Flame Kilt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71413": {
    "ITEM_NAME": "Spaulders of Manifold Eyes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71414": {
    "ITEM_NAME": "Arbalest of Erupting Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71415": {
    "ITEM_NAME": "Dreadfire Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71416": {
    "ITEM_NAME": "Hood of Rampant Disdain",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71417": {
    "ITEM_NAME": "Flaming Core Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71418": {
    "ITEM_NAME": "Earthcrack Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71419": {
    "ITEM_NAME": "Fireskin Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71420": {
    "ITEM_NAME": "Cracked Obsidian Stompers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71421": {
    "ITEM_NAME": "Flickering Cowl",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71422": {
    "ITEM_NAME": "Volcanospike",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71423": {
    "ITEM_NAME": "Heartstone of Rhyolith",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71424": {
    "ITEM_NAME": "Incendic Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71425": {
    "ITEM_NAME": "Lava Line Wristbands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71426": {
    "ITEM_NAME": "Grips of the Raging Giant",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71427": {
    "ITEM_NAME": "Alysra's Razor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71428": {
    "ITEM_NAME": "Flickering Wristbands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71429": {
    "ITEM_NAME": "Moltenfeather Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71430": {
    "ITEM_NAME": "Greathelm of the Voracious Maw",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71431": {
    "ITEM_NAME": "Lavaworm Legplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71432": {
    "ITEM_NAME": "Spaulders of Recurring Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71433": {
    "ITEM_NAME": "Alysrazor's Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71434": {
    "ITEM_NAME": "Wings of Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71435": {
    "ITEM_NAME": "Leggings of Billowing Fire",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71436": {
    "ITEM_NAME": "Phoenix-Down Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71437": {
    "ITEM_NAME": "Clawshaper Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71438": {
    "ITEM_NAME": "Craterflame Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71439": {
    "ITEM_NAME": "Clutch of the Firemother",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71440": {
    "ITEM_NAME": "Gloves of Dissolving Smoke",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71441": {
    "ITEM_NAME": "Feeding Frenzy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71442": {
    "ITEM_NAME": "Scalp of the Bandit Prince",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71443": {
    "ITEM_NAME": "Uncrushable Belt of Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71444": {
    "ITEM_NAME": "Legplates of Frenzied Devotion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71445": {
    "ITEM_NAME": "Skullstealer Greataxe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71446": {
    "ITEM_NAME": "Necklace of Fetishes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71447": {
    "ITEM_NAME": "Coalwalker Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71448": {
    "ITEM_NAME": "Goblet of Anger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71449": {
    "ITEM_NAME": "Crystal Prison Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71450": {
    "ITEM_NAME": "Flickering Shoulderpads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71451": {
    "ITEM_NAME": "Treads of Implicit Obedience",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71452": {
    "ITEM_NAME": "Bracers of the Dread Hunter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71453": {
    "ITEM_NAME": "Legplates of Absolute Control",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71454": {
    "ITEM_NAME": "Gatecrasher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71455": {
    "ITEM_NAME": "Breastplate of the Incendiary Soul",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71456": {
    "ITEM_NAME": "Shoulderpads of the Forgotten Gate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71457": {
    "ITEM_NAME": "Decimation Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71458": {
    "ITEM_NAME": "Flickering Handguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71459": {
    "ITEM_NAME": "Helm of Blazing Glory",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71460": {
    "ITEM_NAME": "Shard of Torment",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71461": {
    "ITEM_NAME": "Mantle of Closed Doors",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71462": {
    "ITEM_NAME": "Molten Scream",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71463": {
    "ITEM_NAME": "Glowing Wing Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71464": {
    "ITEM_NAME": "Gatekeeper's Embrace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71465": {
    "ITEM_NAME": "Casque of Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71466": {
    "ITEM_NAME": "Fandral's Flamescythe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71467": {
    "ITEM_NAME": "Sandals of Leaping Coals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71468": {
    "ITEM_NAME": "Grips of Unerring Precision",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71469": {
    "ITEM_NAME": "Breastplate of Shifting Visions",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71470": {
    "ITEM_NAME": "Bracers of the Fiery Path",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71471": {
    "ITEM_NAME": "Wristwraps of Arrogant Doom",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71472": {
    "ITEM_NAME": "Flowform Choker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71473": {
    "ITEM_NAME": "Stinger of the Flaming Scorpion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71474": {
    "ITEM_NAME": "Firecat Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71475": {
    "ITEM_NAME": "Treads of the Penitent Man",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71610": {
    "ITEM_NAME": "Choker of the Vanquished Lord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71611": {
    "ITEM_NAME": "Arathar, the Eye of Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71612": {
    "ITEM_NAME": "Pauldrons of Roaring Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71613": {
    "ITEM_NAME": "Majordomo's Chain of Office",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71614": {
    "ITEM_NAME": "Fingers of Incineration",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71615": {
    "ITEM_NAME": "Ko'gun, Hammer of the Firelord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71616": {
    "ITEM_NAME": "Crown of Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71617": {
    "ITEM_NAME": "Crystallized Firestone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71640": {
    "ITEM_NAME": "Riplimb's Lost Collar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71665": {
    "ITEM_NAME": "Flametalon of Alysrazor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71669": {
    "ITEM_NAME": "Gauntlets of the Fiery Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71670": {
    "ITEM_NAME": "Crown of the Fiery Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71671": {
    "ITEM_NAME": "Leggings of the Fiery Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71673": {
    "ITEM_NAME": "Shoulders of the Fiery Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71677": {
    "ITEM_NAME": "Crown of the Fiery Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71678": {
    "ITEM_NAME": "Leggings of the Fiery Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71680": {
    "ITEM_NAME": "Shoulders of the Fiery Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71683": {
    "ITEM_NAME": "Gauntlets of the Fiery Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71684": {
    "ITEM_NAME": "Crown of the Fiery Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71685": {
    "ITEM_NAME": "Leggings of the Fiery Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71774": {
    "ITEM_NAME": "Smoldering Censer of Purity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71777": {
    "ITEM_NAME": "Eye of Purification",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71778": {
    "ITEM_NAME": "Avool's Incendiary Shanker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71781": {
    "ITEM_NAME": "Zoid's Firelit Greatsword",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71783": {
    "ITEM_NAME": "Shatterskull Bonecrusher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71784": {
    "ITEM_NAME": "Firethorn Mindslicer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71786": {
    "ITEM_NAME": "Entrail Disgorger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71797": {
    "ITEM_NAME": "Sho'ravon, Greatstaff of Annihilation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71998": {
    "ITEM_NAME": "Essence of Destruction",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "71999": {
    "ITEM_NAME": "Pattern: Leggings of Nature's Champion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72000": {
    "ITEM_NAME": "Pattern: World Mender's Pants",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72001": {
    "ITEM_NAME": "Plans: Pyrium Legplates of Purified Evil",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72002": {
    "ITEM_NAME": "Pattern: Lavaquake Legwraps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72003": {
    "ITEM_NAME": "Pattern: Dreamwraps of the Light",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72004": {
    "ITEM_NAME": "Pattern: Bracers of Unconquered Power",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72005": {
    "ITEM_NAME": "Pattern: Deathscale Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72006": {
    "ITEM_NAME": "Pattern: Bladeshadow Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72007": {
    "ITEM_NAME": "Pattern: Rended Earth Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72008": {
    "ITEM_NAME": "Pattern: Bracers of Flowing Serenity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72009": {
    "ITEM_NAME": "Pattern: Thundering Deathscale Wristguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72010": {
    "ITEM_NAME": "Pattern: Bladeshadow Wristguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72011": {
    "ITEM_NAME": "Pattern: Bracers of the Hunter-Killer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72012": {
    "ITEM_NAME": "Plans: Unstoppable Destroyer's Legplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72013": {
    "ITEM_NAME": "Plans: Foundations of Courage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72014": {
    "ITEM_NAME": "Plans: Soul Redeemer Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72015": {
    "ITEM_NAME": "Plans: Bracers of Destructive Strength",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "72016": {
    "ITEM_NAME": "Plans: Titanguard Wristplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77067": {
    "ITEM_NAME": "Reins of the Blazing Drake",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77069": {
    "ITEM_NAME": "Life-Binder's Handmaiden",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77192": {
    "ITEM_NAME": "Ruinblaster Shotgun",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77938": {
    "ITEM_NAME": "Dragonfire Orb",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77952": {
    "ITEM_NAME": "Elementium Gem Cluster",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77989": {
    "ITEM_NAME": "Seal of the Seven Signs",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77990": {
    "ITEM_NAME": "Soulshifter Vortex",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77991": {
    "ITEM_NAME": "Insignia of the Corrupted Mind",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77992": {
    "ITEM_NAME": "Creche of the Final Dragon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77993": {
    "ITEM_NAME": "Starcatcher Compass",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77994": {
    "ITEM_NAME": "Wrath of Unchaining",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77995": {
    "ITEM_NAME": "Will of Unbinding",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77996": {
    "ITEM_NAME": "Heart of Unliving",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77997": {
    "ITEM_NAME": "Eye of Unmaking",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77998": {
    "ITEM_NAME": "Resolve of Undying",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "77999": {
    "ITEM_NAME": "Vial of Shadows",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78000": {
    "ITEM_NAME": "Cunning of the Cruel",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78001": {
    "ITEM_NAME": "Windward Heart",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78002": {
    "ITEM_NAME": "Bone-Link Fetish",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78003": {
    "ITEM_NAME": "Indomitable Pride",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78361": {
    "ITEM_NAME": "Pillarfoot Greaves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78362": {
    "ITEM_NAME": "Sporebeard Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78363": {
    "ITEM_NAME": "Vagaries of Time",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78364": {
    "ITEM_NAME": "Petrified Fungal Heart",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78365": {
    "ITEM_NAME": "Robe of Glowing Stone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78366": {
    "ITEM_NAME": "Mosswrought Shoulderguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78367": {
    "ITEM_NAME": "Brackenshell Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78368": {
    "ITEM_NAME": "Underdweller's Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78370": {
    "ITEM_NAME": "Girdle of Shattered Stone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78371": {
    "ITEM_NAME": "Hand of Morchok",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78372": {
    "ITEM_NAME": "Mycosynth Wristguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78373": {
    "ITEM_NAME": "Rockhide Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78387": {
    "ITEM_NAME": "Horrifying Horn Arbalest",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78388": {
    "ITEM_NAME": "Belt of Flayed Skin",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78389": {
    "ITEM_NAME": "Treads of Crushed Flesh",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78390": {
    "ITEM_NAME": "Graveheart Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78391": {
    "ITEM_NAME": "Cord of the Slain Champion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78392": {
    "ITEM_NAME": "Finger of Zon'ozz",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78393": {
    "ITEM_NAME": "Grotesquely Writhing Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78401": {
    "ITEM_NAME": "Spire of Coagulated Globules",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78402": {
    "ITEM_NAME": "Interrogator's Bloody Footpads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78403": {
    "ITEM_NAME": "Experimental Specimen Slicer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78404": {
    "ITEM_NAME": "Scalpel of Unrelenting Agony",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78405": {
    "ITEM_NAME": "Mindstrainer Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78406": {
    "ITEM_NAME": "Heartblood Wristplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78413": {
    "ITEM_NAME": "Signet of Grasping Mouths",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78414": {
    "ITEM_NAME": "Electrowing Dagger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78415": {
    "ITEM_NAME": "Treads of Dormant Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78416": {
    "ITEM_NAME": "Runescriven Demon Collar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78417": {
    "ITEM_NAME": "Bracers of the Banished",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78418": {
    "ITEM_NAME": "Lightning Rod",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78419": {
    "ITEM_NAME": "Ring of the Riven",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78420": {
    "ITEM_NAME": "Girdle of the Grotesque",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78429": {
    "ITEM_NAME": "Morningstar of Heroic Will",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78430": {
    "ITEM_NAME": "Bracers of Looming Darkness",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78431": {
    "ITEM_NAME": "Stillheart Warboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78432": {
    "ITEM_NAME": "Curled Twilight Claw",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78433": {
    "ITEM_NAME": "Ledger of Revolting Rituals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78434": {
    "ITEM_NAME": "Treads of Sordid Screams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78435": {
    "ITEM_NAME": "Imperfect Specimens 27 and 28",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78436": {
    "ITEM_NAME": "Dragonfracture Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78445": {
    "ITEM_NAME": "Ataraxis, Cudgel of the Warmaster",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78446": {
    "ITEM_NAME": "Shadow Wing Armbands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78447": {
    "ITEM_NAME": "Belt of the Beloved Companion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78448": {
    "ITEM_NAME": "Blackhorn's Mighty Bulwark",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78449": {
    "ITEM_NAME": "Janglespur Jackboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78450": {
    "ITEM_NAME": "Timepiece of the Bronze Flight",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78451": {
    "ITEM_NAME": "Visage of the Destroyer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78452": {
    "ITEM_NAME": "Goriona's Collar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78461": {
    "ITEM_NAME": "Gloves of Liquid Smoke",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78462": {
    "ITEM_NAME": "Molten Blood Footpads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78463": {
    "ITEM_NAME": "Belt of Shattered Elementium",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78464": {
    "ITEM_NAME": "Gauntlets of the Golden Thorn",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78465": {
    "ITEM_NAME": "Backbreaker Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78471": {
    "ITEM_NAME": "Vishanka, Jaws of the Earth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78472": {
    "ITEM_NAME": "No'Kaled, the Elements of Death",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78473": {
    "ITEM_NAME": "Kiril, Fury of Beasts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78474": {
    "ITEM_NAME": "Blade of the Unmaker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78475": {
    "ITEM_NAME": "Rathrak, the Poisonous Mind",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78476": {
    "ITEM_NAME": "Maw of the Dragonlord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78477": {
    "ITEM_NAME": "Ti'tahk, the Steps of Time",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78478": {
    "ITEM_NAME": "Gurthalak, Voice of the Deeps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78479": {
    "ITEM_NAME": "Souldrinker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78489": {
    "ITEM_NAME": "Seal of Primordial Shadow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78490": {
    "ITEM_NAME": "Infinite Loop",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78491": {
    "ITEM_NAME": "Signet of Suturing",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78492": {
    "ITEM_NAME": "Breathstealer Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78493": {
    "ITEM_NAME": "Hardheart Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78847": {
    "ITEM_NAME": "Chest of the Corrupted Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78848": {
    "ITEM_NAME": "Chest of the Corrupted Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78849": {
    "ITEM_NAME": "Chest of the Corrupted Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78850": {
    "ITEM_NAME": "Crown of the Corrupted Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78851": {
    "ITEM_NAME": "Crown of the Corrupted Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78852": {
    "ITEM_NAME": "Crown of the Corrupted Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78853": {
    "ITEM_NAME": "Gauntlets of the Corrupted Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78854": {
    "ITEM_NAME": "Gauntlets of the Corrupted Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78855": {
    "ITEM_NAME": "Gauntlets of the Corrupted Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78856": {
    "ITEM_NAME": "Leggings of the Corrupted Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78857": {
    "ITEM_NAME": "Leggings of the Corrupted Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78858": {
    "ITEM_NAME": "Leggings of the Corrupted Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78859": {
    "ITEM_NAME": "Shoulders of the Corrupted Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78860": {
    "ITEM_NAME": "Shoulders of the Corrupted Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78861": {
    "ITEM_NAME": "Shoulders of the Corrupted Vanquisher",
    "allowedClasses": [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78878": {
    "ITEM_NAME": "Spine of the Thousand Cuts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78879": {
    "ITEM_NAME": "Sash of Relentless Truth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78882": {
    "ITEM_NAME": "Nightblind Cinch",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78884": {
    "ITEM_NAME": "Girdle of Fungal Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78885": {
    "ITEM_NAME": "Dragoncarver Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78886": {
    "ITEM_NAME": "Belt of Ghostly Graces",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78887": {
    "ITEM_NAME": "Girdle of Soulful Mending",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78888": {
    "ITEM_NAME": "Waistguard of Bleeding Bone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78889": {
    "ITEM_NAME": "Waistplate of the Desecrated Future",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "78919": {
    "ITEM_NAME": "Experiment 12-B",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "undefined": {
    "ITEM_NAME": "",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  }
}