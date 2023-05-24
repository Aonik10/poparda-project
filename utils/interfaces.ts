export interface BannedChampion {
    championId: number;
    teamId: number;
    pickTurn: number;
}

export interface Player {
    teamId: number;
    spell1Id: number;
    spell2Id: number;
    championId: number;
    profileIconId: number;
    summonerName: string;
    bot: false;
    summonerId: string;
    gameCustomizationObjects: any[];
    perks: {
        perkIds: number[];
        perkStyle: number;
        perkSubStyle: number;
    };
}

export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    tags: string[];
    partype: string;
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedperlevel: number;
        attackspeed: number;
    };
}

export interface CurrentGame {
    gameId: number;
    mapId: number;
    gameMode: string;
    gameType: string;
    gameQueueConfigId: number;
    participants: Player[];
    observers: { encryptionKey: string };
    platformId: string;
    bannedChampions: BannedChampion[];
    gameStartTime: number;
    gameLength: number;
}

export interface SummonerSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: [number];
    cooldownBurn: string;
    cost: [number];
    costBurn: string;
    datavalues: {};
    effect: any[];
    effectBurn: any[];
    vars: any[];
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: [number];
    rangeBurn: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    resource: string;
}

export interface SummonerSpells {
    type: string;
    version: string;
    data: {
        [key: string]: SummonerSpell;
    };
}

export interface ChampionResponse {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: Champion;
    };
}
