import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../components/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { index: true, element: <HomePage></HomePage> },
            { path: "games/:id", element: <GameDetailPage></GameDetailPage> },
        ],
    },
]);
export default router;
