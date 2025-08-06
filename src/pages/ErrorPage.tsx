import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Box marginTop="20px" marginLeft={"20px"}>
                <Heading> OOPs </Heading>
                {isRouteErrorResponse(error)
                    ? "The page requested does not exist"
                    : "An unexpected error occurred"}{" "}
            </Box>
        </>
    );
};

export default ErrorPage;
