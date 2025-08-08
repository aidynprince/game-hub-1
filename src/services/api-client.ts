import axios, { AxiosRequestConfig } from "axios";

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

    get = (id: number | string) => {
        return apiClient.get(this.endpoint + "/" + id).then((res) => res.data);
    };
    getMovie = (id: number | string) => {
        return apiClient
            .get(this.endpoint + "/" + id + "/movies")
            .then((res) => res.data);
    };
    getScreenshots = (id: number | string) => {
        return apiClient
            .get(this.endpoint + "/" + id + "/screenshots")
            .then((res) => res.data);
    };
}

export default ApiClient;
