"use client";

import { ChampionDetailsData, Player } from "@/utils/interfaces";
import styles from "./styles/summonerCard.module.scss";
import { useState } from "react";
import { Region } from "@/utils/regions";
import TipCard from "./tipCard";

interface SummonerCardProps {
    player: {
        data: Player;
        champion: ChampionDetailsData;
        matchHistory: string[];
        region: Region;
        summonerSpell_1: string;
        summonerSpell_2: string;
    };
}

function SummonerCard({ player }: SummonerCardProps) {
    const [active, setActive] = useState(false);

    const handleClick = (e: any) => {
        console.log(e);
        if (e.detail === 2) setActive(!active);
    };

    function setBackgroundImage(championName: string): string {
        let parsedName = championName.replaceAll(" ", "").replaceAll("'", "");
        return `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${parsedName}_0.jpg")`;
    }

    function setSummonerSpellIcon(summonerSpell: string): string {
        return `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${summonerSpell}.png`;
    }

    return (
        <div
            className={`${styles.summoner_card} ${styles.flip_card} ${
                active ? styles.flip_card_active : styles.flip_card_inactive
            }`}
            onClick={handleClick}
        >
            <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                    <div className={styles.player_name}>{player.data.summonerName}</div>
                    <div
                        className={styles.card_body}
                        style={{ backgroundImage: setBackgroundImage(player.champion.id) }}
                    >
                        <div
                            className={`${styles.summoner_icons} ${
                                player.data.teamId == 100 ? styles.blue_gradient : styles.red_gradient
                            }`}
                        >
                            <img src={setSummonerSpellIcon(player.summonerSpell_1)} alt="summonerSpellIcon1" />
                            <img src={setSummonerSpellIcon(player.summonerSpell_2)} alt="summonerSpellIcon2" />
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.flip_card_back} ${
                        player.data.teamId == 100 ? styles.blue_back_card : styles.red_back_card
                    }`}
                >
                    <div className={styles.card_back_content}>
                        <TipCard allyTips={player.champion.allytips} enemyTips={player.champion.enemytips} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummonerCard;
