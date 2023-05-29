import { Champion, CurrentGame } from "@/utils/interfaces";
import styles from "./styles/gameCard.module.scss";
import { setChampionPortrait } from "@/api/resources";
import Link from "next/link";

interface GameCardProps {
    game: CurrentGame;
    championList: Map<number, Champion>;
}

function GameCard({ game, championList }: GameCardProps) {
    let { participants, gameMode } = game;

    const buildTeam = (teamId: number) => {
        return participants
            .filter((p) => p.teamId == teamId)
            .map((p) => {
                const champ = championList.get(p.championId);
                if (champ == undefined) throw new Error("Champion not found");

                const player = {
                    data: p,
                    champion: champ,
                };

                return player;
            });
    };

    const blueTeam = buildTeam(100);
    const redTeam = buildTeam(200);

    return (
        <div>
            <div className={styles.card_title}>{gameMode}</div>
            <div className={styles.game_card}>
                <div className={`${styles.team} ${styles.blue_team}`}>
                    {blueTeam.map((p) => (
                        <Link
                            href={`${p.data.summonerName}/LAS`}
                            prefetch={false}
                            className={`${styles.player} ${styles.blue_player}`}
                        >
                            <div className={styles.summoner_name}>{p.data.summonerName}</div>
                            <img src={setChampionPortrait(p.champion)} alt="champion_img"></img>
                        </Link>
                    ))}
                </div>
                <div className={`${styles.team} ${styles.blue_team}`}>
                    {redTeam.map((p) => (
                        <Link
                            href={`${p.data.summonerName}/LAS`}
                            prefetch={false}
                            className={`${styles.player} ${styles.red_player}`}
                        >
                            <img src={setChampionPortrait(p.champion)} alt="champion_img"></img>
                            <div className={styles.summoner_name}>{p.data.summonerName}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GameCard;
