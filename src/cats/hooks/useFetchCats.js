import { useCallback, useEffect, useState } from "react";
import { 
    getBreeds,
    getCategories,
    getCatsByBreed,
    getCatsByCategory,
    getCatsByExtension,
    getRandomCats
} from "../services";

function useFetchCats(type = "random", params = null, limit = 10) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const fetchCats = useCallback(async () => {
        if ((type === "category" || type === "breed") && !params) return;

        setLoading(true);
        setError(null);

        try {
            let result;

            switch (type) {
                case "breed":
                    result = await getCatsByBreed(params, limit, page);
                    break;
                case "breeds":
                    result = await getBreeds();
                    break;
                case "categories":
                    result = await getCategories();
                    break;

                case "category":
                    result = await getCatsByCategory(params, limit, page);
                    break;

                case "extension":
                    result = await getCatsByExtension(params, limit, page);
                    break;

                case "random":
                default:
                    result = await getRandomCats(limit, page);
            }

            setData(prev => [...prev, ...result]);

            setHasMore(result.length === limit);

        } catch (err) {
            setError(err.message || "Error fetching");
        } finally {
            setLoading(false);
        }
    }, [type, params, limit, page]);

    useEffect(() => {
        setData([]);
        setPage(0);
        setHasMore(true);
    }, [type, params]);

    useEffect(() => {
        if (!hasMore) return;
        fetchCats();
    }, [page, hasMore, fetchCats]);

    const loadMore = () => {
        if (!hasMore) return;
        setPage((p) => p + 1);
    }

    return {
        data,
        loading,
        error,
        hasMore,
        loadMore,
    };
}

export default useFetchCats;