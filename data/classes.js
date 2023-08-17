const Classes = {
    Dancer: {
      "id": 0,
      "name": "Dancer",
      "icon": ""
    },
    EnlightenedOne: {
      "id": 1,
      "name": "Enlightened One",
      "icon": ""
    },
    ArmoredLord: {
      "id": 2,
      "name": "Armored Lord",
      "icon": ""
    },
    HighLord: {
      "id": 3,
      "name": "High Lord",
      "icon": ""
    },
    WyvernMaster: {
      "id": 4,
      "name": "Wyvern Master",
      "icon": ""
    },
    DeathKnight: {
      "id": 5,
      "name": "Death Knight",
      "icon": ""
    },
    Emperor: {
      "id": 6,
      "name": "Emperor",
      "icon": ""
    },
    GreatLord: {
      "id": 7,
      "name": "Great Lord",
      "icon": ""
    },
    Barbarossa: {
      "id": 8,
      "name": "Barbarossa",
      "icon": ""
    },
    Myrmidon: {
      "id": 9,
      "name": "Myrmidon",
      "icon": ""
    },
    Soldier: {
      "id": 10,
      "name": "Soldier",
      "icon": ""
    },
    Fighter: {
      "id": 11,
      "name": "Fighter",
      "icon": ""
    },
    Monk: {
      "id": 12,
      "name": "Monk",
      "icon": ""
    },
    Lord: {
      "id": 13,
      "name": "Lord",
      "icon": ""
    },
    Mercenary: {
      "id": 14,
      "name": "Mercenary",
      "icon": ""
    },
    Thief: {
      "id": 15,
      "name": "Thief",
      "icon": ""
    },
    Cavalier: {
      "id": 16,
      "name": "Cavalier",
      "icon": ""
    },
    PegasusKnight: {
      "id": 17,
      "name": "Pegasus Knight",
      "icon": ""
    },
    Brigand: {
      "id": 18,
      "name": "Brigand",
      "icon": ""
    },
    ArmoredKnight: {
      "id": 19,
      "name": "Armored Knight",
      "icon": ""
    },
    Archer: {
      "id": 20,
      "name": "Archer",
      "icon": ""
    },
    Brawler: {
      "id": 21,
      "name": "Brawler",
      "icon": ""
    },
    Mage: {
      "id": 22,
      "name": "Mage",
      "icon": ""
    },
    DarkMage: {
      "id": 23,
      "name": "Dark Mage",
      "icon": ""
    },
    Priest: {
      "id": 24,
      "name": "Archer",
      "icon": ""
    },
    Swordmaster: {
      "id": 25,
      "name": "Swordmaster",
      "icon": ""
    },
    Hero: {
      "id": 26,
      "name": "Hero",
      "icon": ""
    },
    Assassin: {
      "id": 27,
      "name": "Assassin",
      "icon": ""
    },
    Paladin: {
      "id": 28,
      "name": "Paladin",
      "icon": ""
    },
    Warrior: {
      "id": 29,
      "name": "Warrior",
      "icon": ""
    },
    FortressKnight: {
      "id": 30,
      "name": "Fortress Knight",
      "icon": ""
    },
    FortressKnight: {
      "id": 31,
      "name": "FortressKnight",
      "icon": ""
    },
    FortressKnight: {
      "id": 32,
      "name": "FortressKnight",
      "icon": ""
    },
    FortressKnight: {
      "id": 33,
      "name": "FortressKnight",
      "icon": ""
    },
    WyvernRider: {
      "id": 34,
      "name": "Wyvern Rider",
      "icon": ""
    },
    Sniper: {
      "id": 35,
      "name": "Sniper",
      "icon": ""
    },
    Grappler: {
      "id": 36,
      "name": "Grappler",
      "icon": ""
    },
    Warlock: {
      "id": 37,
      "name": "Warlock",
      "icon": ""
    },
    DarkBishop: {
      "id": 38,
      "name": "Dark Bishop",
      "icon": ""
    },
    Bishop: {
      "id": 39,
      "name": "Bishop",
      "icon": ""
    },
    Trickster: {
      "id": 40,
      "name": "Trickster",
      "icon": ""
    },
    WarMonk: {
      "id": 41,
      "name": "War Monk",
      "icon": ""
    },
    WarCleric: {
      "id": 42,
      "name": "War Cleric",
      "icon": ""
    },
    Trickster: {
      "id": 43,
      "name": "Trickster",
      "icon": ""
    },
    DarkFlier: {
      "id": 44,
      "name": "Dark Flier",
      "icon": ""
    },
    Valkyrie: {
      "id": 45,
      "name": "Valkyrie",
      "icon": ""
    },
    FalconKnight: {
      "id": 46,
      "name": "Falcon Knight",
      "icon": ""
    },
    WyvernLord: {
      "id": 47,
      "name": "Wyvern Lord",
      "icon": ""
    },
    MortalSavant: {
      "id": 48,
      "name": "Mortal Savant",
      "icon": ""
    },
    GreatKnight: {
      "id": 49,
      "name": "Great Knight",
      "icon": ""
    },
    BowKnight: {
      "id": 50,
      "name": "Bow Knight",
      "icon": ""
    },
    DarkKnight: {
      "id": 51,
      "name": "Dark Knight",
      "icon": ""
    },
    HolyKnight: {
      "id": 52,
      "name": "Holy Knight",
      "icon": ""
    },
    WarMaster: {
      "id": 53,
      "name": "War Master",
      "icon": ""
    },
    Gremory: {
      "id": 54,
      "name": "Gremory",
      "icon": ""
    }
};

const FemaleExclusive = [`PegasusKnight`, `WarCleric`, `DarkFlier`, `Valkyrie`, `FalconKnight`, `Gremory`];
const MaleExclusive = [`Brawler`, `DarkKnight`, `Hero`, `Grappler`, `DarkBishop`, `WarMonk`, `WarMaster`];
const BeginnerClasses = [`Myrmidon`, `Soldier`, `Fighter`, `Monk`];
const IntermediateClasses = [`Lord`, `Mercenary`, `Thief`, `Cavalier`, `PegasusKnight`, `Brigand`, `ArmoredKnight`, `Archer`, `Brawler`, `Mage`, `DarkMage`, `Priest`];
const AdvancedClasses = [`Swordmaster`, `Hero`, `Assassin`, `Paladin`, `Warrior`, `FortressKnight`, `WyvernRider`, `Sniper`, `Grappler`, `Warlock`, `DarkBishop`, `Bishop`];
const SpecialClasses = [`Trickster`, `WarMonk`, `WarCleric`, `DarkFlier`, `Valkyrie`];
const MasterClasses = [`FalconKnight`, `WyvernLord`, `MortalSavant`, `GreatKnight`, `BowKnight`, `DarkKnight`, `HolyKnight`, `WarMaster`, `Gremory`];

module.exports = {
  Classes,
  FemaleExclusive,
  MaleExclusive,
  BeginnerClasses,
  IntermediateClasses,
  AdvancedClasses,
  SpecialClasses,
  MasterClasses
};
