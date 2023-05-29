import { getChampionsList, getFeaturedGames } from "@/api/resources";
import GameCard from "@/components/gameCard";
import SearchContainer from "./searchContainer";
import styles from "./styles/page.module.scss";

export default async function Home() {
    const featuredGames = await getFeaturedGames("LAS");
    const championList = new Map(Object.values((await getChampionsList()).data).map((c) => [parseInt(c.key), c]));

    return (
        <section>
            <section className={styles.home_top}>
                <div className={styles.title}>PROJECT POPARDA</div>
                <SearchContainer />
            </section>
            <section className={styles.home_bottom}>
                <div>
                    <h1 className={styles.featured_title}>Featured Games</h1>
                    <div className={styles.featured_games}>
                        {featuredGames.gameList.map((game) => (
                            <GameCard game={game} championList={championList} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
