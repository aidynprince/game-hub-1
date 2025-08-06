import { Platform } from "../hooks/useGames";

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
