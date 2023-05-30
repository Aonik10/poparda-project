import styles from "./styles/tipCard.module.scss";

interface TipCardProps {
    allyTips: string[];
    enemyTips: string[];
}

function TipCard({ allyTips, enemyTips }: TipCardProps) {
    function getRandomTip(tips: string[]) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        return tips[randomIndex];
    }

    return (
        <div className={styles.tip_card}>
            <div>
                <h1>Ally Tip</h1>
                <p>{getRandomTip(allyTips)}</p>
            </div>
            <div>
                <h1>Enemy Tip</h1>
                <p>{getRandomTip(enemyTips)}</p>
            </div>
        </div>
    );
}

export default TipCard;
