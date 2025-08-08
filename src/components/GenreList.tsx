import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/GameQueryStore";

const GenreList = () => {
    const setSelectedGenre = useGameQueryStore((s) => s.setGenreId);
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const { data, isLoading, error } = useGenres();

    return (
        <>
            <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                {"Genres"}
            </Heading>
            <List>
                {data?.results.map((genre: Genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => setSelectedGenre(genre.id)}
                                fontSize="md"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
