import { BiSolidLike } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styles from './Movie.styles.module.css'
import type { InterfaceMovieContainerProps } from "./Movie.type";

const Movie = ({
    movie
}: InterfaceMovieContainerProps) => {
    return (
        <div className={styles.movie}>
            <Link to={`/movies/${movie.id}`}>
                <picture className={styles.movie_picture}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title} />
                    <span className={styles.overview}>{movie.overview}</span>
                </picture>
            </Link>
            <h3>{movie.original_title}</h3>
            <div className={styles.movie_info}>
                <FaCalendarAlt />
                <p>{movie.release_date}</p>
            </div>
            <div className={styles.movie_info}>
                <BiSolidLike />
                <p>{movie.popularity}</p>
            </div>
        </div>
    )
}

export default Movie