"use client";

import { useState } from "react";
import styles from "./styles/tipCard.module.scss";
import Image from "next/image";

interface TipCardProps {
    allyTips: string[];
    enemyTips: string[];
}

function TipCard({ allyTips, enemyTips }: TipCardProps) {
    let [allyTip, setAllyTip] = useState(0);
    let [enemTip, setEnemTip] = useState(0);

    const handleNextTip = (tips: string[], cb: (state: number) => void) => {
        if (allyTip == tips.length - 1) cb(0);
        else cb((allyTip += 1));
    };

    const handlePrevTip = (tips: string[], cb: (state: number) => void) => {
        if (allyTip == 0) cb(tips.length - 1);
        else cb((allyTip -= 1));
    };

    const noContent = "There is no tips available for this champion";

    return (
        <div className={styles.tip_card}>
            <div>
                <div className={styles.tip_title}>
                    <button className={styles.change_tip_btn} onClick={() => handlePrevTip(allyTips, setAllyTip)}>
                        <Image width={20} height={20} src="/chevron-left.svg" alt="arrow" />
                    </button>
                    <h1>Ally Tip</h1>
                    <button className={styles.change_tip_btn} onClick={() => handleNextTip(allyTips, setAllyTip)}>
                        <Image width={20} height={20} src="/chevron-right.svg" alt="arrow" />
                    </button>
                </div>
                <p className={styles.paragraph}>{allyTips[allyTip] ? allyTips[allyTip] : noContent}</p>
            </div>
            <div>
                <div className={styles.tip_title}>
                    <button className={styles.change_tip_btn} onClick={() => handlePrevTip(enemyTips, setEnemTip)}>
                        <Image width={20} height={20} src="/chevron-left.svg" alt="arrow" />
                    </button>
                    <h1>Enemy Tip</h1>
                    <button className={styles.change_tip_btn} onClick={() => handleNextTip(enemyTips, setEnemTip)}>
                        <Image width={20} height={20} src="/chevron-right.svg" alt="arrow" />
                    </button>
                </div>
                <p className={styles.paragraph}>{enemyTips[enemTip] ? enemyTips[enemTip] : noContent}</p>
            </div>
        </div>
    );
}

export default TipCard;
