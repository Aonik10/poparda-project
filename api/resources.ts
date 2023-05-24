import { ChampionResponse, CurrentGame, SummonerSpells } from "@/utils/interfaces";
import { Region } from "@/utils/regions";

export async function request(url: string, method: string): Promise<Response> {
    const res = await fetch(url, {
        method: method,
        headers: {
            "X-Riot-Token": process.env.API_KEY,
        },
    });
    return res;
}

export async function getSummoner(summoner: string, region: Region) {
    const res = await request(region.url + `/lol/summoner/v4/summoners/by-name/${summoner}`, "GET");
    return res.json();
}

export async function getMatch(id: string, region: Region): Promise<CurrentGame> {
    const res = await request(region.url + `/lol/spectator/v4/active-games/by-summoner/${id}`, "GET");
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
