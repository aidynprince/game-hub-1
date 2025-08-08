import { Heading } from "@chakra-ui/react";
import Platform from "../entities/Platform";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/GameQueryStore";

const GameHeading = () => {
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const { data } = useGenres();

    const { data: platform } = usePlatforms();
    const platformArray = platform.results.find(
        (g: Platform) => g.id === platformId
    );
    const platformName = platformArray?.name;
    const genre = data.results.find((g: Platform) => g.id === genreId);
    const genreName = genre?.name;
    const heading = `${platformName || ""} ${genreName || ""} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
