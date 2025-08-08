interface Props {
    term: string;
    children: React.ReactNode | React.ReactNode[];
}

import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY={5}>
            <Heading as="dt" fontSize={22} color={"gray.500"}>
                {term}
            </Heading>
            <dd>{children}</dd>
        </Box>
    );
};

export default DefinitionItem;
