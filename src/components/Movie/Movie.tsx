import { BiSolidLike } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styles from './Movie.styles.module.css'
interface MovieProps {
    movie: {
        id: number,
        original_title: string,
        overview: string,
        poster_path: string,
        release_date: string,
        popularity: number
    }
}

const Movie = ({
    movie
}: MovieProps) => {
    return (
        <div className={styles.movie}>
            <Link to={`/movies/${movie.id}`}>
                <picture className={styles.movie_picture}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                    <span className={styles.overview}>{movie.overview}</span>
                </picture>
            </Link>
            <h3>{movie.original_title}</h3>
            <p><FaCalendarAlt />{movie.release_date}</p>
            <p><BiSolidLike />{movie.popularity}</p>
        </div>
    )
}

export default Movie