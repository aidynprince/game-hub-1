import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient("/games");

const useScreenshots = (slug: string) =>
    useQuery({
        queryKey: ["screenshots", slug],
        queryFn: () => apiClient.getScreenshots(slug),
    });

export default useScreenshots;
