import { useFavorites } from '../../hooks/useFavorites'
import { useMoviesByIds } from '../../hooks/useMoviesByIds';
import Favorite from './Favorites'

const FavoritesContainer = () => {
    const { favorites } = useFavorites();
    const { movies, isLoading } = useMoviesByIds(favorites);
    return (
        <Favorite movieListData={movies} isLoading={isLoading} />
    )
}

export default FavoritesContainer