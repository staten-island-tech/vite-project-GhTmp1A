/* const data = [
  {
    name: { english: "Scout" },
    class: ["Offensive"],
    stats: {
      HP: 125,
      MaxHP: 185,
      Speed: 133`%`,
    },
    description: "Description",
    va: "Nathan Vetterlein.",
    Range: ["Short"],
  },
  {
    name: { english: "Soldier" },
    class: ["Offensive"],
    stats: {
      HP: 200,
      MaxHP: 300,
      Speed: 80`%`,
    },
    description: "Description",
    va: "Rick May",
    Range: ["Medium"],
  },
  {
    name: { english: "Pyro" },
    class: ["Offensive"],
    stats: {
      HP: 175,
      MaxHP: 260,
      Speed: 100`%`,
    },
    description: "Description",
    va: "Dennis Bateman",
    Range: ["Short"],
  },
  {
    name: { english: "Demoman" },
    class: ["Defensive"],
    stats: {
      HP: 175,
      MaxHP: 260,
      Speed: 93`%`,
    },
    description: "Description",
    va: "Gary Schwartz.",
    Range: ["Short, Medium"],
  },
  {
    name: { english: "Heavy" },
    class: ["Defensive"],
    stats: {
      HP: 300,
      MaxHP: 450,
      Speed: 93`%`,
    },
    description:
      "The Heavy (Heavy Weapons Guy) is well-known for his capabilities and undefeated default health pool. Despite being the slowest class in the game, the Heavy is an absolute unit in mowing down enemy teams and being able to win essentially all one on one fights with other classes. While his slowness forces him to rely on his teammates to either heal him or recover him from danger, he is arguably the most dangerous class in all of tf2. Once supported by a Medic along with the use of an ubercharge, a competent Heavy along with a smart Medic is an all but good sign for the enemy team.",
    va: "Gary Schwartz.",
    Range: ["Short, Medium"],
  },
  {
    name: { english: "Engineer" },
    class: ["Defensive"],
    stats: {
      HP: 125,
      MaxHP: 185,
      Speed: 100`%`,
    },
    description: "",
    va: "Grant Goodeve.",
    Range: ["Short, Medium, Long"],
  },
  {
    name: { english: "Medic" },
    class: ["Support"],
    stats: {
      HP: 150,
      MaxHP: 225,
      Speed: 107`%`,
    },
    description: "",
    va: "Robin Atkin Downes",
    Range: ["Short"],
  },
  {
    name: { english: "Sniper" },
    class: ["Support"],
    stats: {
      HP: 125,
      MaxHP: 185,
      Speed: 100`%`,
    },
    description: "",
    va: "John Patrick Lowrie",
    Range: ["Short, Long"],
  },
  {
    name: { english: "Spy" },
    class: ["Support"],
    stats: {
      HP: 125,
      MaxHP: 185,
      Speed: 107`%`,
    },
    description: "",
    va: "Dennis Bateman",
    Range: ["Short"],
  },
];
 */
const data = [
  {
    name: "Winter 2022 Cosmetic Case",
    kind: "Seasonal",
    collection: "Winter 2022",
    dropped:
      "This crate was dropped after a certain amount of time while playing the game during Smismass!",
    series: 139,
    description:
      "During Smismass (a seasonal winter event in tf2), this crate would drop to players during gameplay from December 5th 2022 to Janruary 7th, 2023. Once Smismass has ended, these crates will no longer drop, and keys can no longer be bought from the Mannco Store. (Although it is still possible to purchase these crates and keys from the steam community market). This crate would drop items from the Winter 2022 collection.",
    status: "Active",
    url: "https://wiki.teamfortress.com/w/images/7/7a/Backpack_Winter_2022_Cosmetic_Case.png",
  },
  {
    name: "Aqua Summer 2013 Cooler",
    kind: "Seasonal",
    collection: "Summer 2013",
    dropped:
      "This cooler can be randomly obtained by using a Summer Claim Check and contains one approved set of the community-contributed Gold Star items.  An Aqua Summer 2013 Cooler Key is needed to open it.",
    series: 66,
    description:
      "This crate was released during the Summer 2013 update, and could be obtained through the use of a Summer Claim Check. A seperate Aqua Summer 2013 Cooler Key needs to be bought to open it. These crates are no longer purchasable in the Mannco store or anywhere in-game, but can be found on the steam community market. This crate is one of 8 crates that can be obtained from a Summer Claim Check.",
    status: "Active",
    url: "https://wiki.teamfortress.com/w/images/f/f2/Backpack_Aqua_Summer_2013_Cooler.png",
  },
  {
    name: "Jungle Jackpot War Paint Case",
    kind: "Year-round",

    collection: "Jungle Inferno",
    dropped: "Mercenary Park Gift Shop Exclusive",
    series: 109,
    description:
      "This War Paint Case can be bought from the Mercenary Park Gift Shop for a certain amount of tickets and contains one war paint (appliable weapon skin) from the Jungle Jackpot Collection. A Jungle Jackpot War Paint Key is requried to open this case.",
    status: "Active",
    url: "https://wiki.teamfortress.com/w/images/e/eb/Backpack_Jungle_Jackpot_War_Paint_Case.png",
  },
  {
    name: "Ghoulish Gains Case",
    kind: "Seasonal",
    collection: "Ghoulish Gains Collection",
    dropped:
      "This case was randomly dropped to players during the Scream Fortress 2022 update.",
    series: 137,
    description:
      "This crate was released during the Scream Fortress XIV update. During the yearly Scream Fortress event, this crate would randomnly drop to players from October 5th to November 7th. Once Scream Fortress XIV has ended, this crate is no longer obtainable from random drops, and can now only be bought from the Steam Community Market, along with the keys (which are no longer sold in the Mannco store after Scream Fortress). This crate contains items from the Ghoulish Gains Collection.",
    status: "Active",
    url: "https://wiki.teamfortress.com/w/images/6/6c/Backpack_Ghoulish_Gains_Case.png",
  },
  {
    name: "Robo Community Crate",
    kind: "Year-round",
    collection: "Robo Community",
    dropped:
      "This crate was randomly dropped to players during the Robotic Boogaloo community update.",
    series: 58,
    description:
      "This crate was released as a part of the Robotic Boogaloo update in 2013. A RoboCrate key is required to open the crate, with one of 58 items from the Robo Community collection being given to the player upon opening. This crate would randomnly drop to players, and a key bought from the Mannco store is required to open it. Now that the update has ended, this crate and it's respective key is no longer available, with items from the crate (as well as the crate and key itself) now only being available to be purchased from the Steam Community Market.",
    status: "Retired",
    url: "https://wiki.teamfortress.com/w/images/2/2c/Backpack_RoboCrate.png",
  },
  {
    name: "Salvaged Mannco Supply Crate",
    kind: "Year-round",
    collection: "Salvaged",
    dropped:
      "These particular crates were given to players much less frequently than a normal Mann Co. Supply Crate.",
    series: 30,
    description: "Description",
    status: "Retired",
    url: "https://wiki.teamfortress.com/w/images/6/60/Backpack_Salvaged_Mann_Co._Supply_Crate.png",
  },
  {
    name: "Mannco Audition Reel",
    kind: "Year-round",
    collection: "Love and War",
    dropped:
      "This crate was randomly dropped to players during the Love and War update.",
    series: "seriesless",

    description: "Description",
    status: "Retired",
    url: "https://wiki.teamfortress.com/w/images/b/b1/Backpack_Mann_Co._Audition_Reel.png",
  },
  {
    name: "Unlocked Cosmetic Crate Medic",
    kind: "Year-round",
    collection: "Mannco Store",
    dropped:
      "This crate can be bought from the mannco store at any time. It does not require a key to open.",
    series: "seriesless",
    description: "Description",
    status: "Active",
    url: "https://wiki.teamfortress.com/w/images/8/8a/Backpack_Unlocked_Cosmetic_Crate_Medic.png",
  },
];

export { data };
