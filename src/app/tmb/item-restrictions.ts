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

const ALL_HEALERS: Class[] = [Class.Druid, Class.Priest, Class.Shaman, Class.Paladin, Class.Monk];
const ALL_TANKS: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin, Class.Monk, Class.Druid];
const INT_DPS: Class[] = [Class.Mage, Class.Warlock, Class.Priest, Class.Shaman, Class.Druid];
const SPIRIT_USERS: Class[] = [Class.Priest, Class.Shaman, Class.Monk, Class.Druid];
const AGI_DPS: Class[] = [Class.Rogue, Class.Hunter, Class.Monk, Class.Shaman, Class.Druid];
const STR_DPS: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin];

const PLATE_STR: Class[] = [Class.Warrior, Class.DeathKnight, Class.Paladin];
const PLATE_INT: Class[] = [Class.Paladin];
const LEATHER_AGI: Class[] = [Class.Rogue, Class.Druid, Class.Monk];
const LEATHER_INT: Class[] = [Class.Druid, Class.Monk];
const CLOTH: Class[] = [Class.Mage, Class.Warlock, Class.Priest];
const MAIL_AGI: Class[] = [Class.Hunter, Class.Shaman];
const MAIL_INT: Class[] = [Class.Shaman];

const VANQ_TOKEN: Class[] = [Class.Rogue, Class.DeathKnight, Class.Mage, Class.Druid];
const PROTECTOR_TOKEN: Class[] = [Class.Warrior, Class.Hunter, Class.Shaman, Class.Monk];
const CONQ_TOKEN: Class[] = [Class.Paladin, Class.Warlock, Class.Priest];
export const ITEM_RESTRICTIONS: ItemRestrictions = {
  "85991": {
    "ITEM_NAME": "Soulgrasp Choker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85992": {
    "ITEM_NAME": "Sollerets of Spirit Splitting",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85993": {
    "ITEM_NAME": "Fetters of Death",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85994": {
    "ITEM_NAME": "Gara'kal, Fist of the Spiritbinder",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85995": {
    "ITEM_NAME": "Netherrealm Shoulderpads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85996": {
    "ITEM_NAME": "Eye of the Ancient Spirit",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "85997": {
    "ITEM_NAME": "Sandals of the Severed Soul",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86027": {
    "ITEM_NAME": "Bindings of Ancient Spirits",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86038": {
    "ITEM_NAME": "Circuit of the Frail Soul",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86039": {
    "ITEM_NAME": "Spaulders of the Divided Mind",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86040": {
    "ITEM_NAME": "Leggings of Imprisoned Will",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86041": {
    "ITEM_NAME": "Shadowsummoner Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86042": {
    "ITEM_NAME": "Jade Charioteer Figurine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86043": {
    "ITEM_NAME": "Jade Bandit Figurine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86044": {
    "ITEM_NAME": "Jade Magistrate Figurine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86045": {
    "ITEM_NAME": "Jade Courtesan Figurine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86046": {
    "ITEM_NAME": "Jade Warlord Figurine",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86183": {
    "ITEM_NAME": "Shining Cicada Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86184": {
    "ITEM_NAME": "Luminescent Firefly Wristguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86185": {
    "ITEM_NAME": "Smooth Beetle Wristbands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86186": {
    "ITEM_NAME": "Gleaming Moth Cuffs",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86187": {
    "ITEM_NAME": "Pearlescent Butterfly Wristbands",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86188": {
    "ITEM_NAME": "Inlaid Cricket Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86189": {
    "ITEM_NAME": "Jagged Hornet Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86190": {
    "ITEM_NAME": "Serrated Wasp Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86191": {
    "ITEM_NAME": "Plated Locust Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86192": {
    "ITEM_NAME": "Darting Damselfly Cuffs",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86238": {
    "ITEM_NAME": "Pattern: Chestguard of Nemeses",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86272": {
    "ITEM_NAME": "Pattern: Fists of Lightning",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86279": {
    "ITEM_NAME": "Pattern: Liferuned Leather Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86280": {
    "ITEM_NAME": "Pattern: Murderer's Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86281": {
    "ITEM_NAME": "Pattern: Nightfire Robe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86283": {
    "ITEM_NAME": "Pattern: Raiment of Blood and Bone",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86284": {
    "ITEM_NAME": "Pattern: Raven Lord's Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86297": {
    "ITEM_NAME": "Pattern: Stormbreaker Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86379": {
    "ITEM_NAME": "Pattern: Robe of Eternal Rule",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86380": {
    "ITEM_NAME": "Pattern: Imperial Silk Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86381": {
    "ITEM_NAME": "Pattern: Legacy of the Emperor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86382": {
    "ITEM_NAME": "Pattern: Touch of the Light",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86943": {
    "ITEM_NAME": "Boots of the Still Breath",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86944": {
    "ITEM_NAME": "Articulated Legplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86945": {
    "ITEM_NAME": "Hisek's Chrysanthemum Cape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86946": {
    "ITEM_NAME": "Vizier's Ruby Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86947": {
    "ITEM_NAME": "Gloves of Grasping Claws",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86948": {
    "ITEM_NAME": "Attenuating Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86949": {
    "ITEM_NAME": "Fragment of Fear Made Flesh",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86950": {
    "ITEM_NAME": "Gauntlets of Undesired Gifts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86951": {
    "ITEM_NAME": "Mail of Screaming Secrets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86952": {
    "ITEM_NAME": "Chestplate of the Forbidden Tower",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86953": {
    "ITEM_NAME": "Choker of the Unleashed Storm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86954": {
    "ITEM_NAME": "Bracers of Unseen Strikes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86955": {
    "ITEM_NAME": "Waistplate of Overwhelming Assault",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86956": {
    "ITEM_NAME": "Windblade Talons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86957": {
    "ITEM_NAME": "Ring of the Bladed Tempest",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86958": {
    "ITEM_NAME": "Twisting Wind Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86959": {
    "ITEM_NAME": "Boots of the Blowing Wind",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86960": {
    "ITEM_NAME": "Tornado-Summoning Censer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86961": {
    "ITEM_NAME": "Drape of Gathering Clouds",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86962": {
    "ITEM_NAME": "Bracers of Tempestuous Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86963": {
    "ITEM_NAME": "Legbreaker Greatcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86964": {
    "ITEM_NAME": "Bonebreaker Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86965": {
    "ITEM_NAME": "Grips of the Leviathan",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86966": {
    "ITEM_NAME": "Garalon's Hollow Skull",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86967": {
    "ITEM_NAME": "Necklace of Congealed Weaknesses",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86968": {
    "ITEM_NAME": "Ring of the Shattered Shell",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86969": {
    "ITEM_NAME": "Sandals of the Unbidden",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86970": {
    "ITEM_NAME": "Xaril's Hood of Intoxicating Vapors",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86971": {
    "ITEM_NAME": "Stormwake Mistcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86972": {
    "ITEM_NAME": "Robes of Eighty Lights",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86973": {
    "ITEM_NAME": "Grasps of Panic",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86974": {
    "ITEM_NAME": "Painful Thorned Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86975": {
    "ITEM_NAME": "Robes of Torn Nightmares",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86976": {
    "ITEM_NAME": "Korven's Amber-Sealed Beetle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86977": {
    "ITEM_NAME": "Clutches of Dying Hope",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86978": {
    "ITEM_NAME": "Wingslasher Pauldrons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86979": {
    "ITEM_NAME": "Impaling Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86980": {
    "ITEM_NAME": "Cloak of Raining Blades",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86981": {
    "ITEM_NAME": "Belt of Malleable Amber",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86982": {
    "ITEM_NAME": "Seal of the Profane",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86983": {
    "ITEM_NAME": "Un'sok's Amber Scalpel",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86984": {
    "ITEM_NAME": "Treads of Deadly Secretions",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86985": {
    "ITEM_NAME": "Monstrous Stompers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86986": {
    "ITEM_NAME": "Shoulderpads of Misshapen Life",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86987": {
    "ITEM_NAME": "Scimitar of Seven Stars",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86988": {
    "ITEM_NAME": "Claws of Shek'zeer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86989": {
    "ITEM_NAME": "Leggings of Shadow Infestation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86990": {
    "ITEM_NAME": "Kri'tak, Imperial Scepter of the Swarm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "86991": {
    "ITEM_NAME": "Crown of the Doomed Empress",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87012": {
    "ITEM_NAME": "Dagger of the Seven Stars",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87013": {
    "ITEM_NAME": "Stoneflesh Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87014": {
    "ITEM_NAME": "Stonemaw Armguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87015": {
    "ITEM_NAME": "Jasper Clawfeet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87016": {
    "ITEM_NAME": "Beads of the Mogu'shi",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87017": {
    "ITEM_NAME": "Jade Dust Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87018": {
    "ITEM_NAME": "Cape of Three Lanterns",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87019": {
    "ITEM_NAME": "Stonebound Cinch",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87020": {
    "ITEM_NAME": "Sixteen-Fanged Crown",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87021": {
    "ITEM_NAME": "Heavenly Jade Greatboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87022": {
    "ITEM_NAME": "Tomb Raider's Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87023": {
    "ITEM_NAME": "Wildfire Worldwalkers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87024": {
    "ITEM_NAME": "Nullification Greathelm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87025": {
    "ITEM_NAME": "Bracers of Six Oxen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87026": {
    "ITEM_NAME": "Cloak of Peacock Feathers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87027": {
    "ITEM_NAME": "Imperial Ghostbinder's Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87028": {
    "ITEM_NAME": "Amulet of Seven Curses",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87029": {
    "ITEM_NAME": "Hood of Cursed Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87030": {
    "ITEM_NAME": "Chain of Shadow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87031": {
    "ITEM_NAME": "Legplates of Sagacious Shadows",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87044": {
    "ITEM_NAME": "Arrow Breaking Windcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87045": {
    "ITEM_NAME": "Amulet of the Hidden Kings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87046": {
    "ITEM_NAME": "Screaming Tiger, Qiang's Unbreakable Polearm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87047": {
    "ITEM_NAME": "Subetai's Pillaging Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87048": {
    "ITEM_NAME": "Breastplate of the Kings' Guard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87049": {
    "ITEM_NAME": "Shoulderguards of the Unflanked",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87050": {
    "ITEM_NAME": "Steelskin, Qiang's Impervious Shield",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87051": {
    "ITEM_NAME": "Hood of Blind Eyes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87052": {
    "ITEM_NAME": "Undying Shadow Grips",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87053": {
    "ITEM_NAME": "Zian's Choker of Coalesced Shadow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87054": {
    "ITEM_NAME": "Bracers of Dark Thoughts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87055": {
    "ITEM_NAME": "Meng's Treads of Insanity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87056": {
    "ITEM_NAME": "Girdle of Delirious Visions",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87057": {
    "ITEM_NAME": "Bottle of Infinite Stars",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87058": {
    "ITEM_NAME": "Chestguard of Total Annihilation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87059": {
    "ITEM_NAME": "Starcrusher Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87060": {
    "ITEM_NAME": "Star-Stealer Waistguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87061": {
    "ITEM_NAME": "Starshatter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87062": {
    "ITEM_NAME": "Elegion, the Fanged Crescent",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87063": {
    "ITEM_NAME": "Vial of Dragon's Blood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87064": {
    "ITEM_NAME": "Orbital Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87065": {
    "ITEM_NAME": "Light of the Cosmos",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87066": {
    "ITEM_NAME": "Torch of the Celestial Spark",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87067": {
    "ITEM_NAME": "Phasewalker Striders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87068": {
    "ITEM_NAME": "Shoulders of Empyreal Focus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87069": {
    "ITEM_NAME": "Fang Kung, Spark of Titans",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87070": {
    "ITEM_NAME": "Crown of Opportunistic Strikes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87071": {
    "ITEM_NAME": "Jang-xi's Devastating Legplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87072": {
    "ITEM_NAME": "Lei Shen's Final Orders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87073": {
    "ITEM_NAME": "Hood of Focused Energy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87074": {
    "ITEM_NAME": "Tihan, Scepter of the Sleeping Emperor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87075": {
    "ITEM_NAME": "Qin-xi's Polarizing Seal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87076": {
    "ITEM_NAME": "Worldwaker Cabochon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87077": {
    "ITEM_NAME": "Magnetized Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87078": {
    "ITEM_NAME": "Spaulders of the Emperor's Rage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87144": {
    "ITEM_NAME": "Regail's Band of the Endless",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87145": {
    "ITEM_NAME": "Bracers of Defiled Earth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87146": {
    "ITEM_NAME": "Deepwater Greatboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87147": {
    "ITEM_NAME": "Shackle of Eversparks",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87148": {
    "ITEM_NAME": "Kaolan's Withering Necklace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87149": {
    "ITEM_NAME": "Cuffs of the Corrupted Waters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87150": {
    "ITEM_NAME": "Cloak of Overwhelming Corruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87151": {
    "ITEM_NAME": "Watersoul Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87152": {
    "ITEM_NAME": "Regail's Crackling Dagger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87153": {
    "ITEM_NAME": "Asani's Uncleansed Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87154": {
    "ITEM_NAME": "Lightning Prisoner's Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87155": {
    "ITEM_NAME": "Casque of Expelled Corruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87156": {
    "ITEM_NAME": "Gao-Rei, Staff of the Legendary Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87157": {
    "ITEM_NAME": "Sunwrought Mail Hauberk",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87158": {
    "ITEM_NAME": "Dread Shadow Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87159": {
    "ITEM_NAME": "Daybreak Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87160": {
    "ITEM_NAME": "Stuff of Nightmares",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87161": {
    "ITEM_NAME": "Belt of Embodied Terror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87162": {
    "ITEM_NAME": "Sandals of the Blackest Night",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87163": {
    "ITEM_NAME": "Spirits of the Sun",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87164": {
    "ITEM_NAME": "Loshan, Terror Incarnate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87165": {
    "ITEM_NAME": "Sollerets of Instability",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87166": {
    "ITEM_NAME": "Spiritsever",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87167": {
    "ITEM_NAME": "Terror in the Mists",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87168": {
    "ITEM_NAME": "Taoren, the Soul Burner",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87169": {
    "ITEM_NAME": "Robes of the Unknown Fear",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87170": {
    "ITEM_NAME": "Jin'ya, Orb of the Waterspeaker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87171": {
    "ITEM_NAME": "Cuirass of the Animated Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87172": {
    "ITEM_NAME": "Darkmist Vortex",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87173": {
    "ITEM_NAME": "Kilrak, Jaws of Terror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87174": {
    "ITEM_NAME": "Dreadwoven Leggings of Failure",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87175": {
    "ITEM_NAME": "Essence of Terror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87176": {
    "ITEM_NAME": "Shin'ka, Execution of Dominion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87177": {
    "ITEM_NAME": "Invoker's Belt of Final Winter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87178": {
    "ITEM_NAME": "Healer's Belt of Final Winter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87179": {
    "ITEM_NAME": "Sorcerer's Belt of Final Winter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87180": {
    "ITEM_NAME": "Stalker's Cord of Eternal Autumn",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87181": {
    "ITEM_NAME": "Weaver's Cord of Eternal Autumn",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87182": {
    "ITEM_NAME": "Ranger's Chain of Unending Summer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87183": {
    "ITEM_NAME": "Binder's Chain of Unending Summer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87184": {
    "ITEM_NAME": "Mender's Girdle of Endless Spring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87185": {
    "ITEM_NAME": "Protector's Girdle of Endless Spring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87186": {
    "ITEM_NAME": "Patroller's Girdle of Endless Spring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87210": {
    "ITEM_NAME": "Chimera of Fear",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87408": {
    "ITEM_NAME": "Plans: Unyielding Bloodplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87409": {
    "ITEM_NAME": "Plans: Gauntlets of Battle Command",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87410": {
    "ITEM_NAME": "Plans: Ornate Battleplate of the Master",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87411": {
    "ITEM_NAME": "Plans: Bloodforged Warfists",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87412": {
    "ITEM_NAME": "Plans: Chestplate of Limitless Faith",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87413": {
    "ITEM_NAME": "Plans: Gauntlets of Unbound Devotion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87777": {
    "ITEM_NAME": "Reins of the Astral Cloud Serpent",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87822": {
    "ITEM_NAME": "Zor'lok's Fizzing Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "87825": {
    "ITEM_NAME": "Grips of Terra Cotta",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89249": {
    "ITEM_NAME": "Chest of the Shadowy Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89250": {
    "ITEM_NAME": "Chest of the Shadowy Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89251": {
    "ITEM_NAME": "Chest of the Shadowy Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89252": {
    "ITEM_NAME": "Leggings of the Shadowy Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89253": {
    "ITEM_NAME": "Leggings of the Shadowy Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89254": {
    "ITEM_NAME": "Leggings of the Shadowy Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89255": {
    "ITEM_NAME": "Gauntlets of the Shadowy Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89256": {
    "ITEM_NAME": "Gauntlets of the Shadowy Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89257": {
    "ITEM_NAME": "Gauntlets of the Shadowy Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89258": {
    "ITEM_NAME": "Helm of the Shadowy Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89259": {
    "ITEM_NAME": "Helm of the Shadowy Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89260": {
    "ITEM_NAME": "Helm of the Shadowy Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89261": {
    "ITEM_NAME": "Shoulders of the Shadowy Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89262": {
    "ITEM_NAME": "Shoulders of the Shadowy Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89263": {
    "ITEM_NAME": "Shoulders of the Shadowy Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89425": {
    "ITEM_NAME": "Fan of Fiery Winds",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89817": {
    "ITEM_NAME": "Bonded Soul Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89917": {
    "ITEM_NAME": "Pheromone-Coated Choker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89918": {
    "ITEM_NAME": "Scent-Soaked Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89919": {
    "ITEM_NAME": "Warbelt of Sealed Pods",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89920": {
    "ITEM_NAME": "Sword Dancer's Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89921": {
    "ITEM_NAME": "Pauldrons of the Broken Blade",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89922": {
    "ITEM_NAME": "Hood of Stilled Winds",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89923": {
    "ITEM_NAME": "Garalon's Graven Carapace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89924": {
    "ITEM_NAME": "Shoulders of Foaming Fluids",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89925": {
    "ITEM_NAME": "Vestments of Steaming Ichor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89926": {
    "ITEM_NAME": "Shadow Heart Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89927": {
    "ITEM_NAME": "Hood of Dark Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89928": {
    "ITEM_NAME": "Legplates of Regal Reinforcement",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89929": {
    "ITEM_NAME": "Stonefang Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89930": {
    "ITEM_NAME": "Ruby-Linked Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89931": {
    "ITEM_NAME": "Claws of Amethyst",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89932": {
    "ITEM_NAME": "Feng's Seal of Binding",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89933": {
    "ITEM_NAME": "Feng's Ring of Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89935": {
    "ITEM_NAME": "Bracers of Violent Meditation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89936": {
    "ITEM_NAME": "Mindshard Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89937": {
    "ITEM_NAME": "Band of Bursting Novas",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89938": {
    "ITEM_NAME": "Galaxyfire Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89939": {
    "ITEM_NAME": "Crown of Keening Stars",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89940": {
    "ITEM_NAME": "Dreadeye Gaze",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89941": {
    "ITEM_NAME": "Chestguard of Eternal Vigilance",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89942": {
    "ITEM_NAME": "Enameled Grips of Solemnity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89945": {
    "ITEM_NAME": "Gauntlets of the Shadow's Caress",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89946": {
    "ITEM_NAME": "Grasps of Serpentine Might",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89947": {
    "ITEM_NAME": "Shoulderpads of Twisted Fate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89948": {
    "ITEM_NAME": "Fear-Blackened Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89949": {
    "ITEM_NAME": "Robes of Pinioned Eyes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89950": {
    "ITEM_NAME": "Wrap of Instant Petrification",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "89951": {
    "ITEM_NAME": "Shadowgrip Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90503": {
    "ITEM_NAME": "Regail's Band of the Endless",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90504": {
    "ITEM_NAME": "Legguards of Failing Purification",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90505": {
    "ITEM_NAME": "Waterborne Shoulderguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90506": {
    "ITEM_NAME": "Bracers of Defiled Earth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90507": {
    "ITEM_NAME": "Deepwater Greatboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90508": {
    "ITEM_NAME": "Shackle of Eversparks",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90509": {
    "ITEM_NAME": "Kaolan's Withering Necklace",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90510": {
    "ITEM_NAME": "Cuffs of the Corrupted Waters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90511": {
    "ITEM_NAME": "Watersoul Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90512": {
    "ITEM_NAME": "Cloak of Overwhelming Corruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90513": {
    "ITEM_NAME": "Regail's Crackling Dagger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90514": {
    "ITEM_NAME": "Asani's Uncleansed Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90515": {
    "ITEM_NAME": "Lightning Prisoner's Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90516": {
    "ITEM_NAME": "Casque of Expelled Corruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "90740": {
    "ITEM_NAME": "Kaz'tik's Stormseizer Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "93666": {
    "ITEM_NAME": "Spawn of Horridon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94125": {
    "ITEM_NAME": "Living Sandling",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94152": {
    "ITEM_NAME": "Son of Animus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94835": {
    "ITEM_NAME": "Ji-Kun Hatchling",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94867": {
    "ITEM_NAME": "Heart of the Thunder King",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94995": {
    "ITEM_NAME": "Detonation Cord",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94996": {
    "ITEM_NAME": "Vita-Binder Wrap",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94997": {
    "ITEM_NAME": "Worldbender Waistband",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94998": {
    "ITEM_NAME": "Strap of Murderous Strikes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "94999": {
    "ITEM_NAME": "Longdraw Chain Belt",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95000": {
    "ITEM_NAME": "Jingling Fetishgirdle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95001": {
    "ITEM_NAME": "Bubbling Anima Belt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95002": {
    "ITEM_NAME": "Cracklesnap Clasp",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95003": {
    "ITEM_NAME": "Flare-Forged Greatbelt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95004": {
    "ITEM_NAME": "Starwalker Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95005": {
    "ITEM_NAME": "Treads of Delicate Fascia",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95006": {
    "ITEM_NAME": "Roots of Pain",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95007": {
    "ITEM_NAME": "Twist-Toe Tabi",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95008": {
    "ITEM_NAME": "World-Mote Sabatons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95009": {
    "ITEM_NAME": "Treads of the Sanguine Volley",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95010": {
    "ITEM_NAME": "Hypersensitive Sollerets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95011": {
    "ITEM_NAME": "Lightning-Walker Clawfeet",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95012": {
    "ITEM_NAME": "Sabatons of the Superior Being",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95013": {
    "ITEM_NAME": "Black Night Thundercloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95014": {
    "ITEM_NAME": "Red Sky Cloudcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95015": {
    "ITEM_NAME": "Grey Wind Mistcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95016": {
    "ITEM_NAME": "White Snow Skycloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95017": {
    "ITEM_NAME": "Yellow Dawn Lightningcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95018": {
    "ITEM_NAME": "Ra-den's Evolving Signet",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95019": {
    "ITEM_NAME": "Ra-den's Summoning Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95020": {
    "ITEM_NAME": "Ra-den's Contemplative Loop",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Shaman,
      Class.Rogue,
      Class.Warlock,
      Class.Priest,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95021": {
    "ITEM_NAME": "Ra-den's Swift Seal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95022": {
    "ITEM_NAME": "Ra-den's Ruinous Ring",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95023": {
    "ITEM_NAME": "Legplates of Lightning Blood",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95024": {
    "ITEM_NAME": "Time-Lost Greaves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95025": {
    "ITEM_NAME": "Archaic Protector's Legguards",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95026": {
    "ITEM_NAME": "Sparkstring Chain Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95027": {
    "ITEM_NAME": "Legguards of Awaked Repair",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95028": {
    "ITEM_NAME": "Cosmicfire Legwraps",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95029": {
    "ITEM_NAME": "Kilt of Perpetual Genuflection",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95030": {
    "ITEM_NAME": "Leggings of the Discarded Warning",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95031": {
    "ITEM_NAME": "Legguards of Surreal Visions",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95032": {
    "ITEM_NAME": "Robes of Contagious Time",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95033": {
    "ITEM_NAME": "Chestguard of Coruscating Blades",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95034": {
    "ITEM_NAME": "Scales of Shaped Flesh",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95035": {
    "ITEM_NAME": "Chains of Counted Souls",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95036": {
    "ITEM_NAME": "Nova-Binder Breastplate",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95037": {
    "ITEM_NAME": "Planet-Birthed Cuirass",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95038": {
    "ITEM_NAME": "Carapace of the Core",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95039": {
    "ITEM_NAME": "Starburner Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95040": {
    "ITEM_NAME": "Robes of Nova",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95059": {
    "ITEM_NAME": "Clutch of Ji-Kun",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95202": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Archer",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95203": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Invoker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95204": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Mender",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95205": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Vanquisher",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95206": {
    "ITEM_NAME": "Necklace of the Terra-Cotta Protector",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Paladin,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95207": {
    "ITEM_NAME": "Abandoned Zandalari Firecord",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95208": {
    "ITEM_NAME": "Abandoned Zandalari Shadowgirdle",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95209": {
    "ITEM_NAME": "Abandoned Zandalari Silentbelt",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95210": {
    "ITEM_NAME": "Abandoned Zandalari Moonstrap",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95211": {
    "ITEM_NAME": "Abandoned Zandalari Arrowlinks",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95212": {
    "ITEM_NAME": "Abandoned Zandalari Waterchain",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95213": {
    "ITEM_NAME": "Abandoned Zandalari Greatbelt",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95214": {
    "ITEM_NAME": "Abandoned Zandalari Goreplate",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95215": {
    "ITEM_NAME": "Abandoned Zandalari Bucklebreaker",
    "allowedClasses": [
      Class.Warrior,
      Class.DeathKnight,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95216": {
    "ITEM_NAME": "Vaultwalker Sabatons",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95217": {
    "ITEM_NAME": "Locksmasher Greaves",
    "allowedClasses": [
      Class.Paladin,
      Class.Warlock,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95218": {
    "ITEM_NAME": "Columnbreaker Stompers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95219": {
    "ITEM_NAME": "Spiderweb Tabi",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95220": {
    "ITEM_NAME": "Scalehide Spurs",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95221": {
    "ITEM_NAME": "Deeproot Treads",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95222": {
    "ITEM_NAME": "Spiritbound Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95223": {
    "ITEM_NAME": "Silentflame Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "95224": {
    "ITEM_NAME": "Home-Warding Slippers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96368": {
    "ITEM_NAME": "Sign of the Bloodied God",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96369": {
    "ITEM_NAME": "Renataki's Soul Charm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96370": {
    "ITEM_NAME": "Lightning-Eye Hood",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96371": {
    "ITEM_NAME": "Spearman's Jingling Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96372": {
    "ITEM_NAME": "Static-Shot Shoulderguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96373": {
    "ITEM_NAME": "Cloudbreaker Greatbelt",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96374": {
    "ITEM_NAME": "Chestplate of Violent Detonation",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96375": {
    "ITEM_NAME": "Bracers of Constant Implosion",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96376": {
    "ITEM_NAME": "Worldbreaker's Stormscythe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96377": {
    "ITEM_NAME": "Jin'rokh's Soulcrystal",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight,
      Class.Monk,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96378": {
    "ITEM_NAME": "Lightningweaver Gauntlets",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96379": {
    "ITEM_NAME": "Al'set's Tormented Leggings",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96380": {
    "ITEM_NAME": "Fissure-Split Shoulderwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96381": {
    "ITEM_NAME": "Robes of Static Bursts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96382": {
    "ITEM_NAME": "Jin'rokh's Dreamshard",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Paladin,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96383": {
    "ITEM_NAME": "Drape of Booming Nights",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Hunter,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96384": {
    "ITEM_NAME": "Soulblade of the Breaking Storm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96385": {
    "ITEM_NAME": "Horridon's Last Gasp",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96386": {
    "ITEM_NAME": "Infinitely Conducting Bracers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96387": {
    "ITEM_NAME": "Ghostbinder Greatboots",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96388": {
    "ITEM_NAME": "Ionized Yojamban Carapace",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96389": {
    "ITEM_NAME": "Wastewalker's Sandblasted Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96390": {
    "ITEM_NAME": "Talisman of Living Poison",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96391": {
    "ITEM_NAME": "Jalak's Maelstrom Staff",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96392": {
    "ITEM_NAME": "Bindings of Multiplicative Strikes",
    "allowedClasses": [
      Class.Monk,
      Class.Rogue,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96393": {
    "ITEM_NAME": "Sul'lithuz Sandmail",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96394": {
    "ITEM_NAME": "Frozen Warlord's Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96395": {
    "ITEM_NAME": "Bloodlord's Bloodsoaked Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96396": {
    "ITEM_NAME": "Puncture-Proof Greathelm",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96397": {
    "ITEM_NAME": "Horn-Rimmed Doomcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Mage,
      Class.Hunter,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96398": {
    "ITEM_NAME": "Spark of Zandalar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96399": {
    "ITEM_NAME": "Flamecaster's Burning Crown",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96400": {
    "ITEM_NAME": "Vaccinator's Armwraps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96401": {
    "ITEM_NAME": "Dinomancer's Spiritbinding Spire",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96402": {
    "ITEM_NAME": "Horridon's Tusk Fragment",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96403": {
    "ITEM_NAME": "Petrified Eye of the Basilisk",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96404": {
    "ITEM_NAME": "Venomlord's Totemic Wand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96405": {
    "ITEM_NAME": "Roots of Rampaging Earth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96406": {
    "ITEM_NAME": "Spaulders of Dinomancy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96407": {
    "ITEM_NAME": "Legguards of Scintillating Scales",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96408": {
    "ITEM_NAME": "Armplates of the Vanquished Abomination",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96409": {
    "ITEM_NAME": "Bad Juju",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Rogue,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96410": {
    "ITEM_NAME": "Kura-Kura, Kazra'jin's Skullcleaver",
    "allowedClasses": [
      Class.Rogue, Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96411": {
    "ITEM_NAME": "Mar'li's Bloodstained Sandals",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96412": {
    "ITEM_NAME": "Zandalari Robes of the Final Rite",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96413": {
    "ITEM_NAME": "Wushoolay's Final Choice",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96414": {
    "ITEM_NAME": "Amun-Thoth, Sul's Spiritrending Talons",
    "allowedClasses": [
      Class.Druid,
      Class.DeathKnight,
      Class.Warrior,
      Class.Shaman,
      Class.Rogue,
      Class.Monk,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96415": {
    "ITEM_NAME": "Robes of Treacherous Ground",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96416": {
    "ITEM_NAME": "Gaze of Gara'jal",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96417": {
    "ITEM_NAME": "Loa-Ridden Bracers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96418": {
    "ITEM_NAME": "Overloaded Bladebreaker Cuirass",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96419": {
    "ITEM_NAME": "Zerat, Malakk's Soulburning Greatsword",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96420": {
    "ITEM_NAME": "Talisman of Angry Spirits",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96421": {
    "ITEM_NAME": "Fortitude of the Zandalari",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96422": {
    "ITEM_NAME": "Shattered Tortoiseshell Longbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96423": {
    "ITEM_NAME": "Rockfall Ribwraps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96424": {
    "ITEM_NAME": "Grips of Vampiric Cruelty",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96425": {
    "ITEM_NAME": "Beady-Eye Bracers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96426": {
    "ITEM_NAME": "Quakestompers",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96427": {
    "ITEM_NAME": "Shoulderguards of Centripetal Destruction",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96428": {
    "ITEM_NAME": "Shell-Coated Wristplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96429": {
    "ITEM_NAME": "Amulet of the Primal Turtle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96430": {
    "ITEM_NAME": "Shellsplitter Greataxe",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96431": {
    "ITEM_NAME": "Beakbreaker Greatcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96432": {
    "ITEM_NAME": "Azure Shell Bracers",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96433": {
    "ITEM_NAME": "Stonegaze Hood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96434": {
    "ITEM_NAME": "Crystal-Claw Gloves",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96435": {
    "ITEM_NAME": "Shimmershell Cape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96436": {
    "ITEM_NAME": "Tortos' Discarded Shell",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96437": {
    "ITEM_NAME": "Vampire Bat-Hide Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96438": {
    "ITEM_NAME": "Robes of Concussive Shocks",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96439": {
    "ITEM_NAME": "Spaulders of Quaking Fear",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96440": {
    "ITEM_NAME": "Refreshing Abalone Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96441": {
    "ITEM_NAME": "Tortos' Shellseizers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96442": {
    "ITEM_NAME": "Megaera's Poisoned Fang",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96443": {
    "ITEM_NAME": "Quadra-Head Brooch",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96444": {
    "ITEM_NAME": "Poisonblood Bladeshoulders",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96445": {
    "ITEM_NAME": "Grips of Cinderflesh",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96446": {
    "ITEM_NAME": "Plated Toothbreaker Girdle",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96447": {
    "ITEM_NAME": "Rot-Proof Greatplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96448": {
    "ITEM_NAME": "Spinescale Seal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96449": {
    "ITEM_NAME": "Hydraskull Choker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96450": {
    "ITEM_NAME": "Sandals of Arcane Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96451": {
    "ITEM_NAME": "Gleaming-Eye Shoulderpads",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96452": {
    "ITEM_NAME": "Frostborn Wristwraps",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96453": {
    "ITEM_NAME": "Megaera's Shining Eye",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96454": {
    "ITEM_NAME": "Fetish of the Hydra",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96455": {
    "ITEM_NAME": "Breath of the Hydra",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96456": {
    "ITEM_NAME": "Inscribed Bag of Hydra-Spawn",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Warlock,
      Class.Rogue,
      Class.Priest,
      Class.Shaman,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96457": {
    "ITEM_NAME": "Hood of Smoldering Flesh",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96458": {
    "ITEM_NAME": "Links of the Bifurcated Tongue",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96459": {
    "ITEM_NAME": "Chain of Consuming Magic",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96460": {
    "ITEM_NAME": "Ice-Scored Treads",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96461": {
    "ITEM_NAME": "Pinionfeather Greatcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96462": {
    "ITEM_NAME": "Cord of Cacophonous Cawing",
    "allowedClasses": [
      Class.Mage,
      Class.Warlock,
      Class.Priest
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96463": {
    "ITEM_NAME": "Robe of Midnight Down",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96464": {
    "ITEM_NAME": "Giorgio's Caduceus of Pure Moods",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96465": {
    "ITEM_NAME": "Featherflight Belt",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96466": {
    "ITEM_NAME": "Grasp of the Ruthless Mother",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96467": {
    "ITEM_NAME": "Crown of Potentiated Birth",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96468": {
    "ITEM_NAME": "Talonrender Chestplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96469": {
    "ITEM_NAME": "Egg-Shard Grips",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96470": {
    "ITEM_NAME": "Fabled Feather of Ji-Kun",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96471": {
    "ITEM_NAME": "Ji-Kun's Rising Winds",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96472": {
    "ITEM_NAME": "Durumu's Baleful Gaze",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96473": {
    "ITEM_NAME": "Crimson Bloom Legguards",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96474": {
    "ITEM_NAME": "Links of the Disintegrator",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96475": {
    "ITEM_NAME": "Aberrant Chestguard of Torment",
    "allowedClasses": [
      Class.Shaman,
      Class.Hunter
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96476": {
    "ITEM_NAME": "Caustic Spike Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96477": {
    "ITEM_NAME": "Legplates of the Dark Parasite",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96478": {
    "ITEM_NAME": "Treads of the Blind Eye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96479": {
    "ITEM_NAME": "Artery Rippers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96480": {
    "ITEM_NAME": "Reinforced Mirror-Sheen Cloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96481": {
    "ITEM_NAME": "Durumu's Severed Tentacle",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96482": {
    "ITEM_NAME": "Lifedrainer's Sordid Grip",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96483": {
    "ITEM_NAME": "Leggings of Pulsing Blood",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96484": {
    "ITEM_NAME": "Chilblain Spaulders",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96485": {
    "ITEM_NAME": "Deadly Glare Cape",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96486": {
    "ITEM_NAME": "Durumu's Captive Eyeball",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96487": {
    "ITEM_NAME": "Ritual Dagger of the Mind's Eye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96488": {
    "ITEM_NAME": "Sandals of the Starving Eye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96489": {
    "ITEM_NAME": "Vein-Cover Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96490": {
    "ITEM_NAME": "Iceshatter Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96491": {
    "ITEM_NAME": "Legplates of Re-Emergence",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96492": {
    "ITEM_NAME": "Talisman of Bloodlust",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96493": {
    "ITEM_NAME": "Gloves of Cushioned Air",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96494": {
    "ITEM_NAME": "Bracers of Mutagenic Fervor",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96495": {
    "ITEM_NAME": "Synapse-String Handguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96496": {
    "ITEM_NAME": "Pathogenic Gauntlets",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96497": {
    "ITEM_NAME": "Black Blood Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.DeathKnight,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96498": {
    "ITEM_NAME": "Metabolically Boosted Shoulderplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96499": {
    "ITEM_NAME": "Hydra-Scale Bloodcloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96500": {
    "ITEM_NAME": "Band of the Scaled Tyrant",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96501": {
    "ITEM_NAME": "Primordius' Talisman of Rage",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Rogue,
      Class.Shaman,
      Class.Priest,
      Class.Warrior,
      Class.Warlock,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96502": {
    "ITEM_NAME": "Acid-Spine Bonemace",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Shaman,
      Class.Rogue,
      Class.Priest,
      Class.Paladin,
      Class.Monk,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96503": {
    "ITEM_NAME": "Robes of Mutagenic Blood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96504": {
    "ITEM_NAME": "Helix-Breaker Gloves",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96505": {
    "ITEM_NAME": "Leggings of Ebon Veins",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96506": {
    "ITEM_NAME": "Bracers of Fragile Bone",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96507": {
    "ITEM_NAME": "Stolen Relic of Zuldazar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96508": {
    "ITEM_NAME": "Leggings of the Malformed Sapling",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96509": {
    "ITEM_NAME": "Clear-Mind Helm",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96510": {
    "ITEM_NAME": "Bonemender Bracers",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96511": {
    "ITEM_NAME": "Spaulders of Primordial Growth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96512": {
    "ITEM_NAME": "Greatshield of the Gloaming",
    "allowedClasses": [
      Class.Paladin,
      Class.Shaman,
      Class.Warrior
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96513": {
    "ITEM_NAME": "Gore-Soaked Gear",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96514": {
    "ITEM_NAME": "Hand of the Dark Animus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96515": {
    "ITEM_NAME": "Hood of the Crimson Wake",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96516": {
    "ITEM_NAME": "Cha-Ye's Essence of Brilliance",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96517": {
    "ITEM_NAME": "Constantly Accelerating Cloak",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96518": {
    "ITEM_NAME": "Athame of the Sanguine Ritual",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96519": {
    "ITEM_NAME": "Worldbinder Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96520": {
    "ITEM_NAME": "Anima-Ringed Fingers",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96521": {
    "ITEM_NAME": "Matter-Swapped Legplates",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96522": {
    "ITEM_NAME": "Crown of the Golden Golem",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96523": {
    "ITEM_NAME": "Delicate Vial of the Sanguinaire",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96524": {
    "ITEM_NAME": "Iron Qon's Boot Knife",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96525": {
    "ITEM_NAME": "Voice of the Quilen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96526": {
    "ITEM_NAME": "Quet'zal's Crackling Cord",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96527": {
    "ITEM_NAME": "Saddle-Scarred Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96528": {
    "ITEM_NAME": "Dam'ren's Frozen Footguards",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96529": {
    "ITEM_NAME": "Ro'shak's Remembrance",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96530": {
    "ITEM_NAME": "Orb of Arcing Lightning",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96531": {
    "ITEM_NAME": "Spurs of the Storm Cavalry",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96532": {
    "ITEM_NAME": "Ro'shak's Molten Chain",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96533": {
    "ITEM_NAME": "Rein-Binder's Fists",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96534": {
    "ITEM_NAME": "Qon's Flaming Scimitar",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96535": {
    "ITEM_NAME": "Wu-Lai, Bladed Fan of the Consorts",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96536": {
    "ITEM_NAME": "Robes of the Moon Lotus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96537": {
    "ITEM_NAME": "Passionfire Choker",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Monk,
      Class.Mage,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96538": {
    "ITEM_NAME": "Shield of Twinned Despair",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96539": {
    "ITEM_NAME": "Suen-Wo, Spire of the Falling Sun",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96540": {
    "ITEM_NAME": "Bracers of the Midnight Comet",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96541": {
    "ITEM_NAME": "Girdle of Night and Day",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96542": {
    "ITEM_NAME": "Tidal Force Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96543": {
    "ITEM_NAME": "Gaze of the Twins",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96544": {
    "ITEM_NAME": "Moonjade Necklace",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96545": {
    "ITEM_NAME": "Fingers of the Night",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96546": {
    "ITEM_NAME": "Rune of Re-Origination",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96547": {
    "ITEM_NAME": "Shan-Dun, Breaker of Hope",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96548": {
    "ITEM_NAME": "Fusion Slasher Chestguard",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96549": {
    "ITEM_NAME": "Conduit-Breaker Chain Leggings",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96550": {
    "ITEM_NAME": "Doomed Crown of Lei Shen",
    "allowedClasses": [
      Class.DeathKnight,
      Class.Warrior,
      Class.Paladin
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96551": {
    "ITEM_NAME": "Legplates of the Lightning Throne",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96552": {
    "ITEM_NAME": "Legplates of Whipping Ionization",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96553": {
    "ITEM_NAME": "Uroe, Harbinger of Terror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96554": {
    "ITEM_NAME": "Ultimate Protection of the Emperor",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96555": {
    "ITEM_NAME": "Soul Barrier",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96556": {
    "ITEM_NAME": "Legwraps of Cardinality",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96557": {
    "ITEM_NAME": "Gloves of the Maimed Vizier",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96558": {
    "ITEM_NAME": "Unerring Vision of Lei Shen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96559": {
    "ITEM_NAME": "Torall, Rod of the Shattered Throne",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96560": {
    "ITEM_NAME": "Soul Prism of Lei Shen",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96561": {
    "ITEM_NAME": "Lightning-Imbued Chalice",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96562": {
    "ITEM_NAME": "Lei Shen's Orb of Command",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96563": {
    "ITEM_NAME": "Grips of Slicing Electricity",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96564": {
    "ITEM_NAME": "Leggings of the Violent Gale",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96565": {
    "ITEM_NAME": "Lei Shen's Grounded Carapace",
    "allowedClasses": [
      Class.Paladin,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96566": {
    "ITEM_NAME": "Chest of the Crackling Vanquisher",
    "allowedClasses": [
      Class.Rogue,
      Class.DeathKnight,
      Class.Mage,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96567": {
    "ITEM_NAME": "Chest of the Crackling Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96568": {
    "ITEM_NAME": "Chest of the Crackling Protector",
    "allowedClasses": [
      Class.Warrior,
      Class.Hunter,
      Class.Shaman,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96599": {
    "ITEM_NAME": "Gauntlets of the Crackling Vanquisher",
    "allowedClasses": [
      Class.Rogue,
      Class.DeathKnight,
      Class.Mage,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96600": {
    "ITEM_NAME": "Gauntlets of the Crackling Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96601": {
    "ITEM_NAME": "Gauntlets of the Crackling Protector",
    "allowedClasses": [
      Class.Warrior,
      Class.Hunter,
      Class.Shaman,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96602": {
    "ITEM_NAME": "Invocation of the Dawn",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96603": {
    "ITEM_NAME": "Miracoran, the Vehement Chord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96604": {
    "ITEM_NAME": "Fyn's Flickering Dagger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96605": {
    "ITEM_NAME": "Zeeg's Ancient Kegsmasher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96606": {
    "ITEM_NAME": "Darkwood Spiritstaff",
    "allowedClasses": [
      Class.Druid,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96607": {
    "ITEM_NAME": "Lost Shoulders of Fire",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96608": {
    "ITEM_NAME": "Lost Shoulders of Healing",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96609": {
    "ITEM_NAME": "Lost Shoulders of Fluidity",
    "allowedClasses": [
      Class.Mage,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96610": {
    "ITEM_NAME": "Nadagast's Exsanguinator",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96611": {
    "ITEM_NAME": "Jerthud, Graceful Hand of the Savior",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96612": {
    "ITEM_NAME": "Forgotten Mantle of the Moon",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96613": {
    "ITEM_NAME": "Forgotten Mantle of the Sun",
    "allowedClasses": [
      Class.Druid,
      Class.Monk,
      Class.Rogue
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96614": {
    "ITEM_NAME": "Abandoned Spaulders of Arrowflight",
    "allowedClasses": [
      Class.Hunter,
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96615": {
    "ITEM_NAME": "Abandoned Spaulders of Renewal",
    "allowedClasses": [
      Class.Shaman
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96616": {
    "ITEM_NAME": "Reconstructed Holy Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96617": {
    "ITEM_NAME": "Reconstructed Furious Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96618": {
    "ITEM_NAME": "Reconstructed Bloody Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96619": {
    "ITEM_NAME": "Greatsword of Frozen Hells",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96620": {
    "ITEM_NAME": "Do-tharak, the Swordbreaker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96621": {
    "ITEM_NAME": "Bo-Ris, Horror in the Night",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96622": {
    "ITEM_NAME": "Visage of the Doomed",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96623": {
    "ITEM_NAME": "Helm of the Crackling Vanquisher",
    "allowedClasses": [
      Class.Rogue,
      Class.DeathKnight,
      Class.Mage,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96624": {
    "ITEM_NAME": "Helm of the Crackling Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96625": {
    "ITEM_NAME": "Helm of the Crackling Protector",
    "allowedClasses": [
      Class.Warrior,
      Class.Hunter,
      Class.Shaman,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96631": {
    "ITEM_NAME": "Leggings of the Crackling Vanquisher",
    "allowedClasses": [
      Class.Rogue,
      Class.DeathKnight,
      Class.Mage,
      Class.Druid
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96632": {
    "ITEM_NAME": "Leggings of the Crackling Conqueror",
    "allowedClasses": [
      Class.Paladin,
      Class.Priest,
      Class.Warlock
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96633": {
    "ITEM_NAME": "Leggings of the Crackling Protector",
    "allowedClasses": [
      Class.Warrior,
      Class.Hunter,
      Class.Shaman,
      Class.Monk
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96699": {
    "ITEM_NAME": "Shoulders of the Crackling Vanquisher",
    "allowedClasses": [Class.Rogue,
    Class.DeathKnight,
    Class.Mage,
    Class.Druid],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96700": {
    "ITEM_NAME": "Shoulders of the Crackling Conqueror",
    "allowedClasses": [Class.Priest,
    Class.Paladin,
    Class.Warlock],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "96701": {
    "ITEM_NAME": "Shoulders of the Crackling Protector",
    "allowedClasses": [Class.Warrior,
    Class.Hunter,
    Class.Shaman,
    Class.Monk],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "97127": {
    "ITEM_NAME": "Tia-Tia, the Scything Star",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "97960": {
    "ITEM_NAME": "Dark Quivering Blob",
    "allowedClasses": [
      Class.Druid,
      Class.Hunter,
      Class.Mage,
      Class.Monk,
      Class.Paladin,
      Class.Priest,
      Class.Rogue,
      Class.Shaman,
      Class.Warlock,
      Class.Warrior,
      Class.DeathKnight
    ],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99712": {
    "ITEM_NAME": "Leggings of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99713": {
    "ITEM_NAME": "Leggings of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99714": {
    "ITEM_NAME": "Chest of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99715": {
    "ITEM_NAME": "Chest of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99716": {
    "ITEM_NAME": "Chest of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99717": {
    "ITEM_NAME": "Shoulders of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99718": {
    "ITEM_NAME": "Shoulders of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99719": {
    "ITEM_NAME": "Shoulders of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99720": {
    "ITEM_NAME": "Gauntlets of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99721": {
    "ITEM_NAME": "Gauntlets of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99722": {
    "ITEM_NAME": "Gauntlets of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99723": {
    "ITEM_NAME": "Helm of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99724": {
    "ITEM_NAME": "Helm of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99725": {
    "ITEM_NAME": "Helm of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "99726": {
    "ITEM_NAME": "Leggings of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103734": {
    "ITEM_NAME": "Zoid's Molten Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103753": {
    "ITEM_NAME": "Seebo's Sainted Touch",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103764": {
    "ITEM_NAME": "Marco's Crackling Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103770": {
    "ITEM_NAME": "Drape of the Omega",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103781": {
    "ITEM_NAME": "Keengrip Arrowpullers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103791": {
    "ITEM_NAME": "Gauntlets of Discarded Time",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103800": {
    "ITEM_NAME": "Turtleshell Greatcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103818": {
    "ITEM_NAME": "Romy's Reliable Grips",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103832": {
    "ITEM_NAME": "Siid's Silent Stranglers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103846": {
    "ITEM_NAME": "Aeth's Swiftcinder Cloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103854": {
    "ITEM_NAME": "Kalaena's Arcane Handwraps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103859": {
    "ITEM_NAME": "Crimson Gauntlets of Death",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103935": {
    "ITEM_NAME": "Cape of the Alpha",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "103960": {
    "ITEM_NAME": "Brave Niunai's Cloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104158": {
    "ITEM_NAME": "Blackfuse Bombling",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104162": {
    "ITEM_NAME": "Droplet of Y'Shaarj",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104165": {
    "ITEM_NAME": "Kovok",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104253": {
    "ITEM_NAME": "Kor'kron Juggernaut",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104411": {
    "ITEM_NAME": "Immerseus' Crystalline Eye",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104412": {
    "ITEM_NAME": "Trident of Corrupted Waters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104413": {
    "ITEM_NAME": "Hood of Blackened Tears",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104414": {
    "ITEM_NAME": "Puddle Punishers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104415": {
    "ITEM_NAME": "Bubble-Burst Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104416": {
    "ITEM_NAME": "Chestplate of Congealed Corrosion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104417": {
    "ITEM_NAME": "Corruption-Rotted Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104418": {
    "ITEM_NAME": "Treads of Unchained Hate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104419": {
    "ITEM_NAME": "Bracers of Sordid Sleep",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104420": {
    "ITEM_NAME": "Pauldrons of Violent Eruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104421": {
    "ITEM_NAME": "Encapsulated Essence of Immerseus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104422": {
    "ITEM_NAME": "Bolt-Burster Grips",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104423": {
    "ITEM_NAME": "Ichor-Dripping Shoulderpads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104424": {
    "ITEM_NAME": "Hood of Swirling Senses",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104425": {
    "ITEM_NAME": "Cloak of Misguided Power",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104426": {
    "ITEM_NAME": "Purified Bindings of Immerseus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104427": {
    "ITEM_NAME": "Seal of Eternal Sorrow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104428": {
    "ITEM_NAME": "Salt Water Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104429": {
    "ITEM_NAME": "Bracers of Purified Spirit",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104430": {
    "ITEM_NAME": "Soul-Soaked Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104431": {
    "ITEM_NAME": "Greatbelt of Living Waters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104432": {
    "ITEM_NAME": "Waterwalker Greatboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104433": {
    "ITEM_NAME": "Death Lotus Crossbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104434": {
    "ITEM_NAME": "Softfoot's Last Resort",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104435": {
    "ITEM_NAME": "Stonetoe's Tormented Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104436": {
    "ITEM_NAME": "Grips of Unending Anguish",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104437": {
    "ITEM_NAME": "Poisonbinder Girth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104438": {
    "ITEM_NAME": "Darkfallen Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104439": {
    "ITEM_NAME": "Shockstriker Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104440": {
    "ITEM_NAME": "Sorrowpath Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104441": {
    "ITEM_NAME": "Gloomwrap Greatcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104442": {
    "ITEM_NAME": "Rook's Unlucky Talisman",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104443": {
    "ITEM_NAME": "Sha-Seared Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104444": {
    "ITEM_NAME": "Robes of the Tendered Heart",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104445": {
    "ITEM_NAME": "Shoulderpads of Dou Dou Chong",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104446": {
    "ITEM_NAME": "Lifebane Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104447": {
    "ITEM_NAME": "Petrified Pennyroyal Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104448": {
    "ITEM_NAME": "Purehearted Cricket Cage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104449": {
    "ITEM_NAME": "Shoulders of the Roiling Inferno",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104450": {
    "ITEM_NAME": "Sabatons of Defilement",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104451": {
    "ITEM_NAME": "Shoulderguards of Dark Meditations",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104452": {
    "ITEM_NAME": "Grips of the Fallen Council",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104453": {
    "ITEM_NAME": "Gaze of Echoing Despair",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104454": {
    "ITEM_NAME": "Norushen's Shortblade",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104455": {
    "ITEM_NAME": "Reality Ripper Ring",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104456": {
    "ITEM_NAME": "Robes of the Blackened Watcher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104457": {
    "ITEM_NAME": "Gloves of the Golden Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104458": {
    "ITEM_NAME": "Leggings of Unabashed Anger",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104459": {
    "ITEM_NAME": "Quarantine Shoulderguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104460": {
    "ITEM_NAME": "Bracers of Blind Hatred",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104461": {
    "ITEM_NAME": "Rage-Blind Greathelm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104462": {
    "ITEM_NAME": "Drape of the Despairing Pit",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104463": {
    "ITEM_NAME": "Fusion-Fire Core",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104464": {
    "ITEM_NAME": "Xifeng, Longblade of the Titanic Guardian",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104465": {
    "ITEM_NAME": "Bracers of Broken Causation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104466": {
    "ITEM_NAME": "Blight Hurlers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104467": {
    "ITEM_NAME": "Sash of the Last Guardian",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104468": {
    "ITEM_NAME": "Rime-Rift Shoulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104469": {
    "ITEM_NAME": "Untainted Guardian's Chain",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104470": {
    "ITEM_NAME": "Norushen's Enigmatic Barrier",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104471": {
    "ITEM_NAME": "Boots of Broken Reliance",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104472": {
    "ITEM_NAME": "Confident Grips",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104473": {
    "ITEM_NAME": "Bracers of Final Serenity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104474": {
    "ITEM_NAME": "Shadow-Binder's Kilt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104475": {
    "ITEM_NAME": "Wristplates of Broken Doubt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104476": {
    "ITEM_NAME": "Assurance of Consequence",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104477": {
    "ITEM_NAME": "Necklace of Fading Light",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104478": {
    "ITEM_NAME": "Prismatic Prison of Pride",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104479": {
    "ITEM_NAME": "Gaze of Arrogance",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104480": {
    "ITEM_NAME": "Self-Reflecting Mask",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104481": {
    "ITEM_NAME": "Crown of Boastful Words",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104482": {
    "ITEM_NAME": "Greaves of Sublime Superiority",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104483": {
    "ITEM_NAME": "Greatsword of Pride's Fall",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104484": {
    "ITEM_NAME": "Choker of the Final Word",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104485": {
    "ITEM_NAME": "Shield of Mockery",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104486": {
    "ITEM_NAME": "Dagryn's Discarded Longbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104487": {
    "ITEM_NAME": "Swift Serpent Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104488": {
    "ITEM_NAME": "Unrepentant Heels",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104489": {
    "ITEM_NAME": "Korgra's Venom-Soaked Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104490": {
    "ITEM_NAME": "Cannoneer's Multipocket Gunbelt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104491": {
    "ITEM_NAME": "Dagryn's Fuselight Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104492": {
    "ITEM_NAME": "Thranok's Shattering Helm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104493": {
    "ITEM_NAME": "Arcsmasher Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104494": {
    "ITEM_NAME": "Krugruk's Rigid Shoulderplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104495": {
    "ITEM_NAME": "Evil Eye of Galakras",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104496": {
    "ITEM_NAME": "Galakrond Control Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104497": {
    "ITEM_NAME": "Bone-Inlaid Sandals",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104498": {
    "ITEM_NAME": "Scalebane Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104499": {
    "ITEM_NAME": "Flameslinger's Fiery Cowl",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104500": {
    "ITEM_NAME": "Skydancer Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104501": {
    "ITEM_NAME": "Shoulderpads of Pulsing Protection",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104502": {
    "ITEM_NAME": "Extinguished Ember of Galakras",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104503": {
    "ITEM_NAME": "Drakebinder Greatstaff",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104504": {
    "ITEM_NAME": "Dragonmaw Emergency Strap",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104505": {
    "ITEM_NAME": "Grips of Tidal Force",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104506": {
    "ITEM_NAME": "Smoldering Drakescale Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104507": {
    "ITEM_NAME": "Windfire Legplates",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104508": {
    "ITEM_NAME": "Seismic Bore",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104509": {
    "ITEM_NAME": "Laser Burn Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104510": {
    "ITEM_NAME": "Ricocheting Shoulderguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104511": {
    "ITEM_NAME": "Minelayer's Padded Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104512": {
    "ITEM_NAME": "Precision Cutters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104513": {
    "ITEM_NAME": "Demolisher's Reinforced Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104514": {
    "ITEM_NAME": "Wall-Borer Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104515": {
    "ITEM_NAME": "Tar-Coated Gauntlets",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104516": {
    "ITEM_NAME": "Earthbreaker's Steaming Chestplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104517": {
    "ITEM_NAME": "Juggernaut's Ignition Keys",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104518": {
    "ITEM_NAME": "Juggernaut's Focusing Crystal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104519": {
    "ITEM_NAME": "Belt of Ominous Trembles",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104520": {
    "ITEM_NAME": "Leggings of Furious Flame",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104521": {
    "ITEM_NAME": "Bracers of the Broken Fault",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104522": {
    "ITEM_NAME": "Earthripper Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104523": {
    "ITEM_NAME": "Shock Pulse Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104524": {
    "ITEM_NAME": "Laser-Slice Signet",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104525": {
    "ITEM_NAME": "Juggernaut's Power Core",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104526": {
    "ITEM_NAME": "Castlebreaker Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104527": {
    "ITEM_NAME": "Treads of Autonomic Motion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104528": {
    "ITEM_NAME": "Cavemaker Wristguards",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104529": {
    "ITEM_NAME": "Borer Drill Boots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104530": {
    "ITEM_NAME": "Poisonmist Nightcloak",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104531": {
    "ITEM_NAME": "Haromm's Talisman",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104532": {
    "ITEM_NAME": "Damron's Belt of Darkness",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104533": {
    "ITEM_NAME": "Riou's Vigilant Leggings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104534": {
    "ITEM_NAME": "Haromm's Horrifying Helm",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104535": {
    "ITEM_NAME": "Wolf-Rider Spurs",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104536": {
    "ITEM_NAME": "Breastplate of Shamanic Mirrors",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104537": {
    "ITEM_NAME": "Ashen Wall Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104538": {
    "ITEM_NAME": "Bloodclaw Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104539": {
    "ITEM_NAME": "Haromm's Frozen Crescent",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104540": {
    "ITEM_NAME": "Ring of the Iron Tomb",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104541": {
    "ITEM_NAME": "Toxic Tornado Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104542": {
    "ITEM_NAME": "Iron Wolf Hood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104543": {
    "ITEM_NAME": "Ashflare Pendant",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104544": {
    "ITEM_NAME": "Kardris' Toxic Totem",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104545": {
    "ITEM_NAME": "Kardris' Scepter",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104546": {
    "ITEM_NAME": "Darkfang Mask",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104547": {
    "ITEM_NAME": "Belt of the Iron Prison",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104548": {
    "ITEM_NAME": "Shoulderguards of Foul Streams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104549": {
    "ITEM_NAME": "Shackles of Stinking Slime",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104550": {
    "ITEM_NAME": "Shoulderplates of Gushing Geysers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104551": {
    "ITEM_NAME": "Nazgrim's Gutripper",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104552": {
    "ITEM_NAME": "Sandals of Two Little Bees",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104553": {
    "ITEM_NAME": "Nazgrim's Burnished Insignia",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104554": {
    "ITEM_NAME": "Arcweaver Spell Sword",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104555": {
    "ITEM_NAME": "Shoulderguards of the Righteous Stand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104556": {
    "ITEM_NAME": "Robes of the Warrior's Fall",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104557": {
    "ITEM_NAME": "Ravager's Pathwalkers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104558": {
    "ITEM_NAME": "Crown of Tragic Truth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104559": {
    "ITEM_NAME": "Gar'tok, Strength of the Faithful",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104560": {
    "ITEM_NAME": "Bulwark of the Fallen General",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104561": {
    "ITEM_NAME": "Spaulders of Kor'kron Fealty",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104562": {
    "ITEM_NAME": "Ring of Restless Energy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104563": {
    "ITEM_NAME": "Kor'kron Hand Cannon",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104564": {
    "ITEM_NAME": "Halberd of Inner Shadows",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104565": {
    "ITEM_NAME": "Lazahk's Lost Shadowrap",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104566": {
    "ITEM_NAME": "Wristguards of Ruination",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104567": {
    "ITEM_NAME": "Malkorok's Giant Stompers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104568": {
    "ITEM_NAME": "Blood Rage Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104569": {
    "ITEM_NAME": "Legplates of Willful Doom",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104570": {
    "ITEM_NAME": "Malkorok's Tainted Dog Tags",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104571": {
    "ITEM_NAME": "Malkorok's Skullcleaver",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104572": {
    "ITEM_NAME": "Vial of Living Corruption",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104573": {
    "ITEM_NAME": "Miasmic Skullbelt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104574": {
    "ITEM_NAME": "Hood of Perpetual Implosion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104575": {
    "ITEM_NAME": "Robes of Riven Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104576": {
    "ITEM_NAME": "Frenzied Crystal of Rage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104577": {
    "ITEM_NAME": "Black-Blooded Drape",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104578": {
    "ITEM_NAME": "Seal of Sullen Fury",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104579": {
    "ITEM_NAME": "Visage of the Monstrous",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104580": {
    "ITEM_NAME": "Boots of Perilous Infusion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104581": {
    "ITEM_NAME": "Bracers of Averted Fatality",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104582": {
    "ITEM_NAME": "Ebon Blood Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104583": {
    "ITEM_NAME": "Terrorguard Chestplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104584": {
    "ITEM_NAME": "Sigil of Rampage",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104585": {
    "ITEM_NAME": "Enchanted Shao-Tien Saber",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104586": {
    "ITEM_NAME": "Pandaren Roofsprinters",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104587": {
    "ITEM_NAME": "Mantid Carapace Augments",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104588": {
    "ITEM_NAME": "Arrowflight Girdle",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104589": {
    "ITEM_NAME": "Ancient Archer's Chestguard",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104590": {
    "ITEM_NAME": "Helm of the Night Watchman",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104591": {
    "ITEM_NAME": "Untarnishable Greatbelt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104592": {
    "ITEM_NAME": "Ominous Mogu Greatboots",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104593": {
    "ITEM_NAME": "Seal of the Forgotten Kings",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104594": {
    "ITEM_NAME": "Ancient Mogu Tower Shield",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104595": {
    "ITEM_NAME": "Avool's Ancestral Bracers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104596": {
    "ITEM_NAME": "Mantid Vizier's Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104597": {
    "ITEM_NAME": "Lost Necklace of the Mogu Empress",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104598": {
    "ITEM_NAME": "Immaculately Preserved Wand",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104599": {
    "ITEM_NAME": "Klaxxi Grips of Rejuvenation",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104600": {
    "ITEM_NAME": "Shado-Pan Reliquary Kilt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104601": {
    "ITEM_NAME": "Chitin-Link Chain Belt",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104602": {
    "ITEM_NAME": "Bracers of the Pristine Purifier",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104603": {
    "ITEM_NAME": "Plate Belt of the War-Healer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104604": {
    "ITEM_NAME": "Mogu Mindbender's Greaves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104605": {
    "ITEM_NAME": "Hvitserk's Formidable Shanker",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104606": {
    "ITEM_NAME": "Gleaming Eye of the Devilsaur",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104607": {
    "ITEM_NAME": "Montak's Grips of Scorching Breath",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104608": {
    "ITEM_NAME": "Akolik's Acid-Soaked Robes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104609": {
    "ITEM_NAME": "Festering Primordial Globule",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104610": {
    "ITEM_NAME": "Signet of the Dinomancers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104611": {
    "ITEM_NAME": "Thok's Acid-Grooved Tooth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104612": {
    "ITEM_NAME": "Icy Blood Chestplate",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104613": {
    "ITEM_NAME": "Thok's Tail Tip",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104614": {
    "ITEM_NAME": "Britomart's Jagged Pike",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104615": {
    "ITEM_NAME": "Devilfang Band",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104616": {
    "ITEM_NAME": "Ticking Ebon Detonator",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104617": {
    "ITEM_NAME": "Fusespark Gloves",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104618": {
    "ITEM_NAME": "Lever of the Megantholithic Apparatus",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104619": {
    "ITEM_NAME": "Dysmorphic Samophlange of Discontinuity",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104620": {
    "ITEM_NAME": "Bomber's Blackened Wristwatch",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104621": {
    "ITEM_NAME": "Bracers of Infinite Pipes",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104622": {
    "ITEM_NAME": "Powder-Stained Totemic Treads",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104623": {
    "ITEM_NAME": "Calixian Bladebreakers",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104624": {
    "ITEM_NAME": "Asgorathian Blood Seal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104625": {
    "ITEM_NAME": "Siegecrafter's Forge Hammer",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104626": {
    "ITEM_NAME": "Blackfuse's Blasting Cord",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104627": {
    "ITEM_NAME": "Hisek's Reserve Longbow",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104628": {
    "ITEM_NAME": "Kil'ruk's Band of Ascendancy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104629": {
    "ITEM_NAME": "Korven's Crimson Crescent",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104630": {
    "ITEM_NAME": "Bracers of Sonic Projection",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104631": {
    "ITEM_NAME": "Rik'kal's Bloody Scalpel",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104632": {
    "ITEM_NAME": "Iyyokuk's Hereditary Seal",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104633": {
    "ITEM_NAME": "Amber Parasite Wraps",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104634": {
    "ITEM_NAME": "Chestguard of Toxic Injections",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104635": {
    "ITEM_NAME": "Gauntlets of Insane Calculations",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104636": {
    "ITEM_NAME": "Skeer's Bloodsoaked Talisman",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104637": {
    "ITEM_NAME": "Kil'ruk's Furious Blade",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104638": {
    "ITEM_NAME": "Kor'kron Spire of Supremacy",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104639": {
    "ITEM_NAME": "Cord of Black Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104640": {
    "ITEM_NAME": "Kor'kron Elite Skullmask",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104641": {
    "ITEM_NAME": "Chestguard of Relentless Tyranny",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104642": {
    "ITEM_NAME": "Penetrating Gaze of Y'Shaarj",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104643": {
    "ITEM_NAME": "Shoulderguards of Intended Power",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104644": {
    "ITEM_NAME": "Legplates of Unthinking Strife",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104645": {
    "ITEM_NAME": "Spaulders of the Fallen Warchief",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104646": {
    "ITEM_NAME": "Tusks of Mannoroth",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104647": {
    "ITEM_NAME": "Greathelm of the Warchief",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104648": {
    "ITEM_NAME": "Xal'atoh, Desecrated Image of Gorehowl",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104649": {
    "ITEM_NAME": "Curse of Hubris",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104650": {
    "ITEM_NAME": "Belt of the Broken Pact",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104651": {
    "ITEM_NAME": "Ebon Ritual Hood",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104652": {
    "ITEM_NAME": "Black Blood of Y'Shaarj",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104653": {
    "ITEM_NAME": "Horned Mace of the Old Ones",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104654": {
    "ITEM_NAME": "Revelations of Y'Shaarj",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104655": {
    "ITEM_NAME": "Seal of Karmic Return",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104656": {
    "ITEM_NAME": "Hopeglow Spaulders",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104657": {
    "ITEM_NAME": "Cowl of Smoking Dreams",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104658": {
    "ITEM_NAME": "Chestplate of Fallen Passion",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "104659": {
    "ITEM_NAME": "Mantle of Looming Darkness",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105856": {
    "ITEM_NAME": "Echoes of War",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105866": {
    "ITEM_NAME": "Essence of the Cursed Protector",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105867": {
    "ITEM_NAME": "Essence of the Cursed Conqueror",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  },
  "105868": {
    "ITEM_NAME": "Essence of the Cursed Vanquisher",
    "allowedClasses": [],
    "restrictedClasses": [],
    "allowedRankings": 3
  }
}