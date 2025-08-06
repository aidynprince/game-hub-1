import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient("/games");

const useGame = (slug: string) =>
    useQuery({
        queryKey: ["games", slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGame;
