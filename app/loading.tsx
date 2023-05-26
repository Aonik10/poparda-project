import styles from "./styles/loading.module.scss";

function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.lds}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;
