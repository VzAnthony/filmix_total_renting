import { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { tmdbApi } from "../../services/tmdbApi";
import Home from "./Home"
import type { InterfaceMoviesData } from "../../types/movie.type";

export type movieData = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

const HomeContainer = () => {

    const apiParams = useMemo(() => tmdbApi.getPopularMovies(), []);
    const { data, isLoading, isError } = useFetch<InterfaceMoviesData>(apiParams.url, apiParams.options);


    return (
        <Home movieListData={data?.results || []} isLoading={isLoading} isError={isError} />
    )
}

export default HomeContainer