import {
    getChampionsList,
    getCurrentMatch,
    getMatch,
    getMatchHistory,
    getSummoner,
    getSummonerSpells,
} from "@/api/resources";
import BannedChampionsContainer from "@/components/bannedChampions";
import SummonerCard from "@/components/summonerCard";
import { Region, regions } from "@/utils/regions";
import styles from "./styles/page.module.scss";

interface ParamsType {
    params: {
        summoner: string;
        region: string;
    };
}

async function SummonerMatch({ params }: ParamsType) {
    const { summoner, region } = params;
    const championList = new Map(Object.values((await getChampionsList()).data).map((c) => [parseInt(c.key), c]));
    const summonerSpellList = new Map(Object.values((await getSummonerSpells()).data).map((s) => [parseInt(s.key), s]));
    const regionData = regions[region];
    const { id } = await getSummoner(summoner, regionData);
    const { gameMode, bannedChampions, participants } = await getCurrentMatch(id, regionData);

    function getTeamBannedChampions(teamId: number) {
        return bannedChampions
            .filter((c) => c.teamId == teamId)
            .map((c) => {
                let champ = championList.get(c.championId);
                if (champ == undefined) champ = championList.get(1); //cuando no banean nada
                if (champ == undefined) throw new Error("Champion not found");
                return champ;
            });
    }

    function buildPlayers(teamId: number) {
        return participants
            .filter((p) => p.teamId == teamId)
            .map(async (p) => {
                const champ = championList.get(p.championId);
                if (champ == undefined) throw new Error("Champion not found");

                const matchHistoryIds = await getMatchHistory(p.summonerName, regionData);

                const player = {
                    data: p,
                    champion: champ,
                    // matchHistory: await Promise.all(
                    //     matchHistoryIds.slice(0, 4).map((match) => getMatch(match, regionData))
                    // ),
                    matchHistory: matchHistoryIds.slice(0, 10),
                    region: regionData,
                    summonerSpell_1: summonerSpellList.get(p.spell1Id)?.id ?? "SummonerFlash",
                    summonerSpell_2: summonerSpellList.get(p.spell2Id)?.id ?? "SummonerFlash",
                };
                return player;
            });
    }

    const blueTeamBans = getTeamBannedChampions(100);
    const redTeamBans = getTeamBannedChampions(200);
    const blueTeam = await Promise.all(buildPlayers(100));
    const redTeam = await Promise.all(buildPlayers(200));

    return (
        <div className={styles.summoner_match}>
            <div className={styles.match_info}>
                <div className={styles.general_info}>
                    <div>Game Mode: {gameMode}</div>
                    {bannedChampions.length == 0 ? (
                        <div className={styles.no_bans}></div>
                    ) : (
                        <BannedChampionsContainer championsBlue={blueTeamBans} championsRed={redTeamBans} />
                    )}
                </div>
                <div className={styles.summoner_cards}>
                    {blueTeam.map((player) => (
                        <SummonerCard player={player} />
                    ))}
                </div>
                <div className={styles.vs}>VS</div>
                <div className={styles.summoner_cards}>
                    {redTeam.map((player) => (
                        <SummonerCard player={player} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SummonerMatch;

/*

{
  gameId: 6417538722,
  mapId: 11,
  gameMode: 'CLASSIC',
  gameType: 'MATCHED_GAME',
  gameQueueConfigId: 420,
  participants: [
    {
      teamId: 100,
      spell1Id: 4,
      spell2Id: 11,
      championId: 200,
      profileIconId: 4832,
      summonerName: 'G2 Riddler',
      bot: false,
      summonerId: '15nrOQS8CkWExSr_hjI3mF5Sxi9RvDCUD5Fn39txQB2ZgNZx',
      gameCustomizationObjects: [],
      perks: {
        "perkIds": [8010,9111,9104,8014,8304,8347,5008,5008,5002],
        "perkStyle": 8000,
        "perkSubStyle": 8300
      }
    },
    {
      teamId: 100,
      spell1Id: 4,
      spell2Id: 12,
      championId: 43,
      profileIconId: 5657,
      summonerName: 'tsprks',
      bot: false,
      summonerId: 'GTREh5fO7y31yt5TSfn-0CufnN0uTafDQL4y0aFhWl78gcE',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 100,
      spell1Id: 3,
      spell2Id: 4,
      championId: 161,
      profileIconId: 5583,
      summonerName: 'Azzapp',
      bot: false,
      summonerId: '3PuSY_kGyg2MAFBkCEi1D-lWJ7ftYNBDeVYIJTek26YA-sQ',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 100,
      spell1Id: 12,
      spell2Id: 4,
      championId: 54,
      profileIconId: 5636,
      summonerName: 'MENA TOPKING',
      bot: false,
      summonerId: 'dMk7mnRf1iVGi5wOgnIwDkM70vDbsdg12Ao8nLYwfgbOzObuO_LXiJ1M9w',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 100,
      spell1Id: 6,
      spell2Id: 4,
      championId: 202,
      profileIconId: 5336,
      summonerName: 'TPAA nrmn',
      bot: false,
      summonerId: 'zMIko4ErlRPsCaNlHhjFEfYOS-0qYGKoiF5IubmbNiLniL8',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 200,
      spell1Id: 7,
      spell2Id: 3,
      championId: 350,
      profileIconId: 3868,
      summonerName: 'Keia',
      bot: false,
      summonerId: 'OlmOSm2g1smbmI9CmxWmBhjMKw3N5vZjEsNODglxf6vCqQU',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 12,
      championId: 166,
      profileIconId: 5736,
      summonerName: 'Envoy of Anubis',
      bot: false,
      summonerId: 'YAyVrA2htwYfdlysWQbu19mSt9e7P5zFZ27Zh3r6V1AltnGfgoHgwb-EvQ',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 14,
      championId: 236,
      profileIconId: 23,
      summonerName: 'XZX',
      bot: false,
      summonerId: '-MwmCsxsLKKD2tA152YDpFIPujtE3ZLcH3jSRxIjswoutTE',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 200,
      spell1Id: 6,
      spell2Id: 11,
      championId: 120,
      profileIconId: 1153,
      summonerName: 'Kayelber',
      bot: false,
      summonerId: 'kS-PMYbWRW7yBLVyaNweDI3yPRRtxRTjJmifcqtlJEfZfzFJzfTu12pFaA',
      gameCustomizationObjects: [],
      perks: [Object]
    },
    {
      teamId: 200,
      spell1Id: 12,
      spell2Id: 4,
      championId: 84,
      profileIconId: 907,
      summonerName: 'BDS xMatty',
      bot: false,
      summonerId: 'hVgOiRhe-bsY4s05Uu2bp3e6v0XmNkXLzkburN-v9NbvO3c',
      gameCustomizationObjects: [],
      perks: [Object]
    }
  ],
  observers: { encryptionKey: 'htcnPm74rL9z/SGG7mtsHYYZxS4Jmu1k' },
  platformId: 'EUW1',
  bannedChampions: [
    { championId: 555, teamId: 100, pickTurn: 1 },
    { championId: 77, teamId: 100, pickTurn: 2 },
    { championId: 157, teamId: 100, pickTurn: 3 },
    { championId: 79, teamId: 100, pickTurn: 4 },
    { championId: 117, teamId: 100, pickTurn: 5 },
    { championId: 104, teamId: 200, pickTurn: 6 },
    { championId: 107, teamId: 200, pickTurn: 7 },
    { championId: 518, teamId: 200, pickTurn: 8 },
    { championId: 121, teamId: 200, pickTurn: 9 },
    { championId: 902, teamId: 200, pickTurn: 10 }
  ],
  gameStartTime: 1684846078668,
  gameLength: 123
}


CHAMPIONS IN THE LIST HAS THIS STRUCTURE:

Veigar: {
    version: '13.10.1',
    id: 'Veigar',
    key: '45',
    name: 'Veigar',
    title: 'the Tiny Master of Evil',
    blurb: 'An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...',
    info: {
        "attack": 2,
        "defense": 2,
        "magic": 10,
        "difficulty": 7
    },
    image: {
        "full": "Veigar.png",
        "sprite": "champion4.png",
        "group": "champion",
        "x": 0,
        "y": 96,
        "w": 48,
        "h": 48
    },
    tags: ["Mage"],
    partype: 'Mana',
    stats: {
        "hp": 590,
        "hpperlevel": 102,
        "mp": 469,
        "mpperlevel": 21,
        "movespeed": 340,
        "armor": 22,
        "armorperlevel": 4.7,
        "spellblock": 30,
        "spellblockperlevel": 1.3,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3.1416,
        "attackspeedperlevel": 1.36,
        "attackspeed": 0.625
    }
    
}


EACH CHAMPION DATA:

{
  type: 'champion',
  format: 'standAloneComplex',
  version: '13.10.1',
  data: {
    Veigar: {
        id: 'Veigar',
        key: '45',
        name: 'Veigar',
        title: 'the Tiny Master of Evil',
        image: {"full":"Veigar.png","sprite":"champion4.png","group":"champion","x":0,"y":96,"w":48,"h":48},
        skins: [
            {
                "id":"45000",
                "num":0,
                "name":"default",
                "chromas":false
            },
            {
                "id":"45001",
                "num":1,
                "name":"White Mage Veigar",
                "chromas":false
            },
            {
                "id":"45002",
                "num":2,
                "name":"Curling Veigar",
                "chromas":false
            },
            {
                "id":"45003",
                "num":3,
                "name":"Veigar Greybeard",
                "chromas":false
            },
            {
                "id":"45004",
                "num":4,
                "name":"Leprechaun Veigar",
                "chromas":false
            },
            {
                "id":"45005",
                "num":5,
                "name":"Baron Von Veigar",
                "chromas":false
            },
            {
                "id":"45006",
                "num":6,
                "name":"Superb Villain Veigar",
                "chromas":false
            },
            {
                "id":"45007",
                "num":7,
                "name":"Bad Santa Veigar",
                "chromas":false
            },
            {
                "id":"45008",
                "num":8,
                "name":"Final Boss Veigar",
                "chromas":true
            }
        ],
        lore: 'An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been hidden away for thousands of years. Now a stubborn creature with an endless fascination for the mysteries of the universe, Veigar is often underestimated by others—but even though he believes himself truly evil, he possesses an inner morality that leads some to question his deeper motivations.',
        blurb: 'An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...',
        allytips: ["Use Event Horizon to increase your chances of landing Dark Matter.","Veigar is extremely Mana and Cooldown Reduction dependent. Try buying items with these stats in order to increase the effectiveness of your passive and Baleful Strike.","Veigar is very fragile. It is valuable to select at least one summoner spell that can be used defensively."],
        enemytips: ["Dark Matter deals very high damage, but it can be avoided. Pay attention to the sound and visual indicator to be aware of when and where the spell will land.","Event Horizon only stuns units on the edge. If you're inside the spell, you can still move and attack.","Veigar's ultimate deals increased damage based on your missing health."],
        tags: ["Mage"],
        partype: 'Mana',
        info: {"attack":2,"defense":2,"magic":10,"difficulty":7},
        stats: {"hp":550,"hpperlevel":108,"mp":490,"mpperlevel":26,"movespeed":340,"armor":18,"armorperlevel":5.2,"spellblock":32,"spellblockperlevel":1.3,"attackrange":550,"hpregen":6.5,"hpregenperlevel":0.6,"mpregen":8,"mpregenperlevel":0.8,"crit":0,"critperlevel":0,"attackdamage":52,"attackdamageperlevel":2.7,"attackspeedperlevel":2.24,"attackspeed":0.625},
        spells: [{"id":"VeigarBalefulStrike","name":"Baleful Strike","description":"Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.","tooltip":"Veigar unleashes a bolt of dark energy, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to the first two enemies hit.<br /><br />If Veigar kills an enemy with this Ability, he gains a stack of <keywordMajor>Phenomenal Evil</keywordMajor>. Large minions and large monsters grant {{ e3 }} additional stacks.{{ spellmodifierdescriptionappend }}","leveltip":{"label":["Damage","Total AP Ratio","Cooldown","@AbilityResourceName@ Cost"],"effect":["{{ basedamage }} -> {{ basedamageNL }}","{{ apratio*100.000000 }}% -> {{ aprationl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},"maxrank":5,"cooldown":[6,5.5,5,4.5,4],"cooldownBurn":"6/5.5/5/4.5/4","cost":[30,35,40,45,50],"costBurn":"30/35/40/45/50","datavalues":{},"effect":[null,[0,0,0,0,0],[1,1,1,1,1],[2,2,2,2,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],"effectBurn":[null,"0","1","2","0","0","0","0","0","0","0"],"vars":[],"costType":" {{ abilityresourcename }}","maxammo":"-1","range":[1000,1000,1000,1000,1000],"rangeBurn":"1000","image":{"full":"VeigarBalefulStrike.png","sprite":"spell14.png","group":"spell","x":288,"y":48,"w":48,"h":48},"resource":"{{ cost }} {{ abilityresourcename }}"},{"id":"VeigarDarkMatter","name":"Dark Matter","description":"Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.","tooltip":"Veigar summons dark matter from the sky, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.<br /><br />Every 50 stacks of <keywordMajor>Phenomenal Evil</keywordMajor> reduce this Ability's Cooldown by 10%.{{ spellmodifierdescriptionappend }}","leveltip":{"label":["Damage","Total AP Ratio","@AbilityResourceName@ Cost"],"effect":["{{ basedamage }} -> {{ basedamageNL }}","{{ apratio*100.000000 }}% -> {{ aprationl*100.000000 }}%","{{ cost }} -> {{ costNL }}"]},"maxrank":5,"cooldown":[0,0,0,0,0],"cooldownBurn":"0","cost":[60,65,70,75,80],"costBurn":"60/65/70/75/80","datavalues":{},"effect":[null,[0,0,0,0,0],[1.2,1.2,1.2,1.2,1.2],[8,8,8,8,8],[0,0,0,0,0],[0.02,0.02,0.02,0.02,0.02],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],"effectBurn":[null,"0","1.2","8","0","0.02","0","0","0","0","0"],"vars":[],"costType":" {{ abilityresourcename }}","maxammo":"-1","range":[950,950,950,950,950],"rangeBurn":"950","image":{"full":"VeigarDarkMatter.png","sprite":"spell14.png","group":"spell","x":336,"y":48,"w":48,"h":48},"resource":"{{ cost }} {{ abilityresourcename }}"},{"id":"VeigarEventHorizon","name":"Event Horizon","description":"Veigar twists the edges of space, creating a cage that Stuns enemies that pass through.","tooltip":"Veigar twists the edges of space, creating a cage that <status>Stuns</status> enemies that pass through for {{ e1 }} seconds. The cage lasts for 3 seconds.{{ spellmodifierdescriptionappend }}","leveltip":{"label":["Stun Duration","Cooldown","@AbilityResourceName@ Cost"],"effect":["{{ e1 }} -> {{ e1NL }}","{{ cooldown }} -> {{ cooldownNL }}","{{ cost }} -> {{ costNL }}"]},"maxrank":5,"cooldown":[20,18.5,17,15.5,14],"cooldownBurn":"20/18.5/17/15.5/14","cost":[70,75,80,85,90],"costBurn":"70/75/80/85/90","datavalues":{},"effect":[null,[1.5,1.75,2,2.25,2.5],[0.5,0.5,0.5,0.5,0.5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],"effectBurn":[null,"1.5/1.75/2/2.25/2.5","0.5","0","0","0","0","0","0","0","0"],"vars":[],"costType":" {{ abilityresourcename }}","maxammo":"-1","range":[725,725,725,725,725],"rangeBurn":"725","image":{"full":"VeigarEventHorizon.png","sprite":"spell14.png","group":"spell","x":384,"y":48,"w":48,"h":48},"resource":"{{ cost }} {{ abilityresourcename }}"},{"id":"VeigarR","name":"Primordial Burst","description":"Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.","tooltip":"Veigar blasts an enemy champion with primal magic to deal between <magicDamage>{{ mindamage }} and {{ maxdamage }} magic damage</magicDamage>, increasing with the target's missing Health. Damage is maximized against enemies below 33% Health.{{ spellmodifierdescriptionappend }}","leveltip":{"label":["Damage","Total AP Ratio","Cooldown"],"effect":["{{ basedamage }} -> {{ basedamageNL }}","{{ apratio*100.000000 }}% -> {{ aprationl*100.000000 }}%","{{ cooldown }} -> {{ cooldownNL }}"]},"maxrank":3,"cooldown":[120,90,60],"cooldownBurn":"120/90/60","cost":[100,100,100],"costBurn":"100","datavalues":{},"effect":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],"effectBurn":[null,"0","0","0","0","0","0","0","0","0","0"],"vars":[],"costType":" {{ abilityresourcename }}","maxammo":"-1","range":[650,650,650],"rangeBurn":"650","image":{"full":"VeigarR.png","sprite":"spell14.png","group":"spell","x":432,"y":48,"w":48,"h":48},"resource":"{{ cost }} {{ abilityresourcename }}"}],
        passive: {"name":"Phenomenal Evil Power","description":"Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power.","image":{"full":"VeigarEntropy.png","sprite":"passive4.png","group":"passive","x":0,"y":96,"w":48,"h":48}},
        recommended: []
    }
  }
}

*/
