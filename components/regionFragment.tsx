import React from "react";
import styles from "./styles/regionsFragment.module.scss";

interface RegionFragmentProps {
    tag: string;
    onClick(): void;
}

function RegionFragment({ tag, onClick }: RegionFragmentProps) {
    return (
        <div className={styles.region_fragment} onClick={onClick}>
            {tag}
        </div>
    );
}

export default RegionFragment;
