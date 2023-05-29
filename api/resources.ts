import {
    Champion,
    ChampionResponse,
    CurrentGame,
    FeaturedGames,
    Match,
    Summoner,
    SummonerSpells,
} from "@/utils/interfaces";
import { regions, Region } from "@/utils/regions";

export async function request(url: string, method: string): Promise<Response> {
    const res = await fetch(url, {
        method: method,
        headers: {
            "X-Riot-Token": process.env.API_KEY,
        },
        next: {
            revalidate: 10,
        },
    });
    return res;
}

export async function getSummoner(summoner: string, region: Region): Promise<Summoner> {
    const res = await request(region.url + `/lol/summoner/v4/summoners/by-name/${summoner}`, "GET");
    return res.json();
}

export async function getMatchHistory(summoner: string, region: Region): Promise<string[]> {
    const { puuid } = await getSummoner(summoner, region);
    const res = await request(
        `https://${region.region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`,
        "GET"
    );
    return res.json();
}

export async function getCurrentMatch(id: string, region: Region): Promise<CurrentGame> {
    const res = await request(region.url + `/lol/spectator/v4/active-games/by-summoner/${id}`, "GET");
    return res.json();
}

export async function getMatch(matchId: string, region: Region): Promise<Match> {
    const res = await request(`https://${region.region}.api.riotgames.com/lol/match/v5/matches/${matchId}`, "GET");
    return res.json();
}

export async function getChampionsList(): Promise<ChampionResponse> {
    const res = await request("http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json", "GET");
    return res.json();
}

export async function getSummonerSpells(): Promise<SummonerSpells> {
    const res = await request("http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/summoner.json", "GET");
    return res.json();
}

export async function getChampionPortrait(championName: string): Promise<any> {
    const res = await request(
        `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion/${championName}.json`,
        "GET"
    );
    return res.json();
}

export async function getFeaturedGames(currentRegion: string): Promise<FeaturedGames> {
    const res = await request(regions[currentRegion].url + "/lol/spectator/v4/featured-games", "GET");
    return res.json();
}

export function setChampionPortrait(champion: Champion) {
    return `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${champion.image.full}`;
}
