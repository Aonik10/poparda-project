import { Match } from "@/utils/interfaces";

interface MatchProps {
    match: Match;
}

function MatchCard({ match }: MatchProps) {
    console.log(match);
    return <div>{match.info.teams[0].win ? "Victory" : "Defeat"}</div>;
}

export default MatchCard;
