import { Champion } from "@/utils/interfaces";
import styles from "./styles/bannedChampions.module.scss";

interface BannedChampionsContainerProps {
    championsBlue: Champion[];
    championsRed: Champion[];
}

function setChampImg(image: string): string {
    return `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${image}`;
}

function BannedChampionsContainer({ championsBlue, championsRed }: BannedChampionsContainerProps) {
    return (
        <div className={styles.banned_container}>
            <div className={`${styles.blue_team} ${styles.team_title}`}>
                Blue Team Bans
                <div className={styles.banned_team_container}>
                    {championsBlue.map((c) => (
                        <img alt="" src={setChampImg(c.image.full)} />
                    ))}
                </div>
            </div>
            <div className={`${styles.red_team} ${styles.team_title}`}>
                Red Team Bans
                <div className={styles.banned_team_container}>
                    {championsRed.map((c) => (
                        <img alt="" src={setChampImg(c.image.full)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BannedChampionsContainer;
