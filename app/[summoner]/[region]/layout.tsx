import styles from "./styles/layout.module.scss";
import SearchBar from "@/components/searchBar";

interface DataType {
    children: React.ReactNode;
    params: {
        summoner: string;
        region: string;
    };
}

export default function DashboardLayout({ children, params }: DataType) {
    const { summoner, region } = params;
    return (
        <div className={styles.layout}>
            <div className={styles.left_frame}></div>
            <div className={styles.center_frame}>
                <SearchBar summoner={summoner} region={region} />
                {children}
            </div>
            <div className={styles.right_frame}></div>
        </div>
    );
}
