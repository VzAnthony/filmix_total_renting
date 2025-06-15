import { useParams } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import { useMemo, useState } from 'react'
import { tmdbApi } from '../../services/tmdbApi'
import { useFetch } from '../../hooks/useFetch'
import type { MovieDetailsData } from './MovieDetails.Type'
import { useFavorites } from '../../hooks/useFavorites'

const MovieDetailContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { id } = useParams()
    const apiParams = useMemo(() => tmdbApi.getMovieDetails(id || "0"), [id]);
    const { toggleFavorite, isFavorite } = useFavorites()

    const { data, isLoading } = useFetch<MovieDetailsData>(apiParams.url, apiParams.options);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <MovieDetails
            movieDetailsData={data}
            isLoading={isLoading}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
        />
    )
}

export default MovieDetailContainer