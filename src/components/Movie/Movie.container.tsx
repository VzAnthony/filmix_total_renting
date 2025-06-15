import Movie from "./Movie"
import type { InterfaceMovieContainerProps } from "./Movie.type"

const MovieContainer = ({
    movie
}: InterfaceMovieContainerProps) => {
    return (
        <Movie movie={movie} />
    )
}

export default MovieContainer