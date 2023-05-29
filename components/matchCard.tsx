import { Match } from "@/utils/interfaces";

interface MatchProps {
    //match: Match;
    match: string;
}

function MatchCard({ match }: MatchProps) {
    return <div>{match}</div>;
}

export default MatchCard;
