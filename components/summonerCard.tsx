import { Champion, Player } from "@/utils/interfaces";
import styles from "./styles/summonerCard.module.scss";

interface SummonerCardProps {
    player: {
        data: Player;
        champion: Champion;
        summonerSpell_1: string;
        summonerSpell_2: string;
    };
}

function SummonerCard({ player }: SummonerCardProps) {
    function capitalizeName(name: string) {
        const firstLetter = name.substring(0, 1);
        const nextLetters = name.substring(1).toLowerCase();
        return firstLetter + nextLetters;
    }

    function setBackgroundImage(championName: string): string {
        let parsedName = capitalizeName(championName.replaceAll(" ", "").replaceAll("'", ""));
        if (parsedName == "Ksante") parsedName = "KSante";
        return `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${parsedName}_0.jpg")`;
    }

    function setSummonerSpellIcon(summonerSpell: string): string {
        return `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${summonerSpell}.png`;
    }

    return (
        <div className={styles.summoner_card}>
            <div className={styles.player_name}>{player.data.summonerName}</div>
            <div className={styles.card_body} style={{ backgroundImage: setBackgroundImage(player.champion.name) }}>
                <div></div>
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
    );
}

export default SummonerCard;
