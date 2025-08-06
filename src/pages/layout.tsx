import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Box padding="10px">
                <Outlet></Outlet>
            </Box>
        </>
    );
};

export default Layout;
