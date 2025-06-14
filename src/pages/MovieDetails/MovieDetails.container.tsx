import { useParams } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import { useMemo } from 'react'
import { tmdbApi } from '../../services/tmdbApi'
import { useFetch } from '../../hooks/useFetch'
import type { MovieDetailsData } from './MovieDetails.Type'
import { useFavorites } from '../../hooks/useFavorites'

const MovieDetailContainer = () => {
    const { id } = useParams()

    const apiParams = useMemo(() => tmdbApi.getMovieDetails(id || "0"), []);

    const { toggleFavorite, isFavorite, favorites } = useFavorites()

    const { data, isLoading, isError } = useFetch<MovieDetailsData>(apiParams.url, apiParams.options);

    return (
        <MovieDetails
            movieDetailsData={data}
            isLoading={isLoading}
            isError={isError}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
        />
    )
}

export default MovieDetailContainer