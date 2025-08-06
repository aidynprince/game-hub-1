import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient("/platforms");

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        initialData: { count: platforms.length, results: platforms },
        staleTime: 24 * 60 * 60 * 1000,
    });

export default usePlatforms;
