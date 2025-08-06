import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const apiClient = new ApiClient("/genres");

const useGenres = () => {
    const { data } = useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("1d"), //24h
        initialData: genres,
    });

    return { data, isLoading: false, error: null };
};

export default useGenres;
