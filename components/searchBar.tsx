"use client";

import { regions } from "@/utils/regions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/searchBar.module.scss";

interface DataType {
    summoner: string;
    region: string;
}

function SearchBar({ summoner, region }: DataType) {
    const router = useRouter();
    const [search, setSearch] = useState({ summoner: summoner.replaceAll("%20", " "), region });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/${search.summoner}/${search.region}`);
    };

    const handleChange = (e: any) => {
        e.target.name;
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.search_bar_container}>
                <input
                    className={styles.search_bar}
                    name="summoner"
                    type="search"
                    id="summoner-search"
                    placeholder="Summoner Name"
                    autoComplete="off"
                    value={search.summoner}
                    onChange={handleChange}
                />
                <button className={styles.search_button} type="submit">
                    <Image width={20} height={20} src="/search.svg" alt="asd" />
                </button>
            </div>
            <select className={styles.region_select} name="region" onChange={handleChange}>
                {Object.keys(regions).map((region) =>
                    region == search.region ? (
                        <option value={region} key={region} selected>
                            {region}
                        </option>
                    ) : (
                        <option value={region} key={region}>
                            {region}
                        </option>
                    )
                )}
            </select>
        </form>
    );
}

export default SearchBar;
