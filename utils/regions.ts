export interface Regions {
    [key: string]: Region;
}

export interface Region {
    region: string;
    value: string;
    url: string;
}

export const regions: Regions = {
    NA: {
        region: "americas",
        value: "NA1",
        url: "https://na1.api.riotgames.com",
    },
    BR1: {
        region: "americas",
        value: "BR1",
        url: "https://br1.api.riotgames.com",
    },
    LAN: {
        region: "americas",
        value: "LA1",
        url: "https://la1.api.riotgames.com",
    },
    LAS: {
        region: "americas",
        value: "LA2",
        url: "https://la2.api.riotgames.com",
    },

    KR: {
        region: "asia",
        value: "KR",
        url: "https://kr.api.riotgames.com",
    },
    JP: {
        region: "asia",
        value: "JP1",
        url: "https://jp1.api.riotgames.com",
    },

    EUN1: {
        region: "europe",
        value: "EUN1",
        url: "https://eun1.api.riotgames.com",
    },
    EUW: {
        region: "europe",
        value: "EUW1",
        url: "https://euw1.api.riotgames.com",
    },
    TR: {
        region: "europe",
        value: "TR1",
        url: "https://tr1.api.riotgames.com",
    },
    RU: {
        region: "europe",
        value: "RU",
        url: "https://ru.api.riotgames.com",
    },

    OC1: {
        region: "sea",
        value: "OC1",
        url: "https://oc1.api.riotgames.com",
    },
    PH2: {
        region: "sea",
        value: "PH2",
        url: "https://ph2.api.riotgames.com",
    },
    SG2: {
        region: "sea",
        value: "SG2",
        url: "https://sg2.api.riotgames.com",
    },
    TH2: {
        region: "sea",
        value: "TH2",
        url: "https://th2.api.riotgames.com",
    },
    TW2: {
        region: "sea",
        value: "TW2",
        url: "https://tw2.api.riotgames.com",
    },
    VN2: {
        region: "sea",
        value: "VN2",
        url: "https://vn2.api.riotgames.com",
    },
};
