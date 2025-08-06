import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { GameQuery } from "../store/GameQueryStore";
import { Genre } from "../hooks/useGenres";
import { FetchResponse } from "../hooks/useGames";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "aa0bedc73c424f9e83de967a558ab113",
    },
});
class ApiClient {
    endpoint: string;
    constructor(endpiont: string) {
        this.endpoint = endpiont;
    }
    getAll = (gameQuery?: AxiosRequestConfig) =>
        apiClient.get(this.endpoint, gameQuery).then((res) => res.data);
}

export default ApiClient;
