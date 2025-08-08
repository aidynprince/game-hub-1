interface Movie {
    id: number;
    name: string;
    preview: string;
    data: any;
}

interface Props {
    movies: Movie[];
}

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Trailer = ({ movies }: Props) => {
    if (!movies || movies.length === 0) return null;
    let movie = movies[0];
    return (
        <Box marginY={5}>
            <Heading as="h3" fontSize={22} marginBottom={3}>
                Trailers
            </Heading>
            {
                <Box key={movie.id} margin={2}>
                    <Text fontSize="lg">{movie.name}</Text>

                    {
                        <video
                            width="50%"
                            height={"10%"}
                            controls
                            poster={movie.preview}
                            style={{ borderRadius: "10px" }}
                        >
                            <source src={movie?.data[480]} />
                            Your browser does not support the video tag.
                        </video>
                    }
                </Box>
            }
        </Box>
    );
};

export default Trailer;
