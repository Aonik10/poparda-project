"use client";

import styles from "./error.module.scss";
import { useRouter } from "next/navigation";

function Error() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <div className={styles.error}>
            <div className={styles.bg_image}></div>
            <div className={styles.error_text}>Poparda could not find the summoner's match</div>
            <button className={styles.back_btn} onClick={handleClick}>
                Back to Home
            </button>
        </div>
    );
}

export default Error;
