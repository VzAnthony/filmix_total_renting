const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const tmdbApi = {
    getPopularMovies: (page = 1) => ({
        url: `${BASE_URL}/movie/popular?page=${page}`,
        options: {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`
            }
        }
    }),

    getMovieDetails: (movieId: string) => ({
        url: `${BASE_URL}/movie/${movieId}?append_to_response=credits,videos,images,similar`,
        options: {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`
            }
        }
    }),

    getMovieCredits: (movieId: string) => ({
        url: `${BASE_URL}/movie/${movieId}/credits`,
        options: {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`
            }
        }
    }),
    getMoviesByIds: (ids: number[]) => {
        return ids.map(id => ({
            url: `${BASE_URL}/movie/${id}?append_to_response=credits,videos,images`,
            options: {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        }));
    }
};
