import Movie from "./Movie"

interface MovieContainerProps {
    movie: {
        id: number,
        original_title: string,
        overview: string,
        poster_path: string,
        release_date: string,
        popularity: number
    }
}

const MovieContainer = ({
    movie
}: MovieContainerProps) => {
    return (
        <Movie movie={movie} />
    )
}

export default MovieContainer