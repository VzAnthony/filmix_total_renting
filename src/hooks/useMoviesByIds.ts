import { useEffect, useState } from "react";
import { tmdbApi } from "../services/tmdbApi";
import type { InterfaceMovieData } from "../types/movie.type";

export const useMoviesByIds = (ids: number[]) => {
    const [movies, setMovies] = useState<InterfaceMovieData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const requests = tmdbApi.getMoviesByIds(ids).map(({ url, options }) =>
                    fetch(url, options).then(res => res.json())
                );

                const results = await Promise.all(requests);
                setMovies(results);
            } catch (err) {
                setError("Error al cargar películas");
            } finally {
                setIsLoading(false);
            }
        };

        if (ids.length > 0) fetchMovies();
        else setIsLoading(false);
    }, [ids]);

    return { movies, isLoading, error };
};
