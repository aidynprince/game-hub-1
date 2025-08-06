import { GameQuery } from "../store/GameQueryStore";
import ApiClient from "../services/api-client";
import ms from "ms";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
    released: string;
}

const apiClient = new ApiClient("/games");
const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery?.genreId,
                    platforms: gameQuery?.platformId,
                    ordering: gameQuery?.sortOrder,
                    search: gameQuery?.searchText,
                    page: pageParam,
                },
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("1d"),
    });

export default useGames;
