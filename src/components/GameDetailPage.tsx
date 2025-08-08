import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";
import useGame from "../hooks/useGame";
import useMovie from "../hooks/useMovies";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import Trailer from "./Trailer";

interface Pub {
    name: string;
}
interface Plat {
    platform: Platform;
}

const GameDetailPage = () => {
    let slugname = useParams();
    let slug = slugname.id as string;

    const slugObj = useGame(slug);
    const {
        data: movieObj,
        isLoading: movieload,
        error: movieerror,
    } = useMovie(slug);

    console.log(movieObj);

    const { data: game, isLoading, error } = slugObj;

    const headings = ["platforms", "Genres", "Metascore", "Publishers"];

    const platforms = game?.platforms.map(
        (platobj: Plat) => platobj.platform.name
    );

    const Genres = game?.genres.map((genre: Genre) => genre.name);
    const Metascore = game?.metacritic;
    const Publishers = game?.publishers.map((pub: Pub) => pub.name);

    if (isLoading) return <Spinner></Spinner>;
    if (error) throw error;

    return (
        <>
            <Heading marginBottom={3}>
                {game.name} ({game.released})
            </Heading>

            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes
                platforms={platforms}
                Genres={Genres}
                Metascore={Metascore}
                Publishers={Publishers}
            />
            <Trailer movies={movieObj.results}></Trailer>
        </>
    );
};

export default GameDetailPage;
