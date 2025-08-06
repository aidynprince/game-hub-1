import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    let slugname = useParams();
    let slug = slugname.id as string;

    const { data: game, isLoading, error } = useGame(slug);

    if (isLoading) return <Spinner></Spinner>;
    if (error) throw error;

    return (
        <>
            <Heading marginBottom={3}>
                {game.name} ({game.released})
            </Heading>

            <Text marginBottom={3} fontSize="md">
                {game.description_raw}
            </Text>
        </>
    );
};

export default GameDetailPage;
