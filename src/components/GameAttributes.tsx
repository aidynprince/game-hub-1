import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
    platforms: string[];
    Genres: string[];
    Metascore: number;
    Publishers: string[];
}

const GameAttributes = ({
    platforms,
    Genres,
    Metascore,
    Publishers,
}: Props) => {
    return (
        <>
            <SimpleGrid columns={2} as="dl" spacing={5} marginTop={5}>
                <DefinitionItem term="Platforms">
                    {platforms?.map((platform: string) => (
                        <Text key={platform}>{platform}</Text>
                    ))}
                </DefinitionItem>
                <DefinitionItem term="Metascore">
                    <CriticScore score={Metascore} />
                </DefinitionItem>
                <DefinitionItem term="Genres">
                    {Genres?.map((genre: string) => (
                        <Text key={genre}>{genre}</Text>
                    ))}
                </DefinitionItem>
                <DefinitionItem term="Publishers">
                    {Publishers?.map((publisher: string) => (
                        <Text key={publisher}>{publisher}</Text>
                    ))}
                </DefinitionItem>
            </SimpleGrid>
        </>
    );
};

export default GameAttributes;
