import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient("/games");

const useMovie = (slug: string) =>
    useQuery({
        queryKey: ["movies", slug],
        queryFn: () => apiClient.getMovie(slug),
    });

export default useMovie;
