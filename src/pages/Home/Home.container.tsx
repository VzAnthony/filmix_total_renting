import { useMemo, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { tmdbApi } from "../../services/tmdbApi";
import Home from "./Home"
import type { InterfaceMoviesData } from "../../types/movie.type";

const HomeContainer = () => {

    const [page, setPage] = useState<number>(1)

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
    }

    const apiParams = useMemo(() => tmdbApi.getPopularMovies(page), [page]);
    const { data, isLoading } = useFetch<InterfaceMoviesData>(apiParams.url, apiParams.options);


    return (
        <Home movieListData={data?.results || []} isLoading={isLoading} nextPage={nextPage} prevPage={prevPage} page={page} />
    )
}

export default HomeContainer