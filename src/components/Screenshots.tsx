import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Screenshots = ({ screenObj }: any) => {
    console.log(screenObj);

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} marginY={5}>
            {screenObj?.map((screenshot: any) => (
                <Image
                    key={screenshot.id}
                    src={screenshot.image}
                    alt="Game Screenshot"
                    style={{
                        width: "100%",
                    }}
                />
            ))}
        </SimpleGrid>
    );
};

export default Screenshots;
