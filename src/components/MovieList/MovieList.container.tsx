import MovieList from "./MovieList"
import type { InterfaceMovieListProps } from "./MovieList.type"

const MovieContainer = ({
    movieListData
}: InterfaceMovieListProps) => {
    return (
        <MovieList movieListData={movieListData} />
    )
}

export default MovieContainer