"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles/searchContainer.module.scss";
import { regions } from "@/utils/regions";
import Link from "next/link";

function SearchContainer() {
    const router = useRouter();
    const [currentRegion, setCurrentRegion] = useState("LAS");
    const [summoner, setSummoner] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSummoner(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //router.push(`/${summoner}/${currentRegion}`);
        return false;
    };

    const handleKeyDown = (e: any) => {
        if (e.code == "Enter") router.push(`/${summoner}/${currentRegion}`);
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit} onKeyDown={handleKeyDown} tabIndex={0}>
            <div className={styles.search}>
                <label className={styles.search_label} htmlFor="summoner-search">
                    Poparda's match finder
                </label>
                <input
                    className={styles.summoner_search}
                    type="search"
                    id="summoner-search"
                    placeholder="Summoner Name"
                    onChange={handleSearch}
                />
            </div>
            <div className={styles.regions}>
                {Object.keys(regions).map((region) => (
                    <div
                        className={`${styles.region_fragment} ${currentRegion == region ? styles.active_region : ""}`}
                        key={region}
                        onClick={() => setCurrentRegion(region)}
                    >
                        {region}
                    </div>
                ))}
            </div>
            <div className={styles.find_summoner}>
                <Link href={`/${summoner}/${currentRegion}`} type="submit" className={styles.link}>
                    Find summoner
                </Link>
            </div>
        </form>
    );
}

export default SearchContainer;
