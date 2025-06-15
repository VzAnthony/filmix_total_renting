import Movie from "../Movie/Movie.container"
import type { InterfaceMovieListProps } from "./MovieList.type"
import styles from "./MovieList.styles.module.css"


const MovieList = ({
    movieListData
}: InterfaceMovieListProps) => {
    return (
        <div className={styles.list_movies}>
          {
            movieListData?.length 
            ? (
                movieListData?.map(({ id, original_title, overview, poster_path, release_date, popularity }) =>
                    <Movie key={id} movie={{ id, original_title, overview, poster_path, release_date, popularity }} />)
            )
            : <p className={styles.empty_message}>The list is currently empty.</p>
          }
        </div>
    )
}

export default MovieList
