import { BiSolidLike } from 'react-icons/bi';
import { Cast, Posters, Tag } from '../../components';
import type { MovieDetailsData } from './MovieDetails.Type'
import styles from './MovieDetails.styles.module.css'
interface MovieDetailsProps {
    movieDetailsData: MovieDetailsData | null,
    isLoading: boolean,
    isError: boolean
    isFavorite: (id: number) => boolean,
    toggleFavorite: (id: number) => void
}
const MovieDetail = ({
    movieDetailsData,
    isLoading,
    isError,
    isFavorite,
    toggleFavorite
}: MovieDetailsProps) => {
    return (
        <section className={styles.movie_details_bg} style={{
            backgroundImage: `
                    linear-gradient(to bottom, rgba(20,30,48,0.85) 0%, rgba(36,59,85,0.82) 100%),
      url(${movieDetailsData?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movieDetailsData?.poster_path}` : ""})
    `
        }}>
            <div className={styles.poster_container}>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetailsData?.poster_path}`} alt="Poster movie" />
            </div>
            <div className={`${styles.movie_details}`}>
                <div>
                    <span>
                        <h1 className={styles.movie_title}>{movieDetailsData?.title}</h1>
                    </span>
                    <div className={styles.movie_info}>
                        <BiSolidLike className={styles.movie_like_icon} />
                        <span>{movieDetailsData?.popularity}</span> |
                        <span>{movieDetailsData?.runtime} min</span>
                        <Tag tags={movieDetailsData?.genres} /> |
                        <span>{movieDetailsData?.release_date}</span>
                    </div>
                    <p className={styles.movie_overview}>{movieDetailsData?.overview}</p>
                    <div className={styles.movie_buttons}>
                        {
                            isFavorite(movieDetailsData?.id || 0) ?
                                <button className={`${styles.button} ${styles.button_remove_favorite}`} onClick={() => toggleFavorite(movieDetailsData?.id || 0)}>Remove favorite</button>
                                :
                                <button className={`${styles.button} ${styles.button_favorite}`} onClick={() => toggleFavorite(movieDetailsData?.id || 0)}>Add to favorite</button>
                        }
                        {/* <button className={`${styles.button} ${styles.button_favorite}`}>Add to favorite</button> */}
                        <button className={`${styles.button} ${styles.button_trailer}`}>Trailer</button>
                    </div>
                </div>
                <div>
                    <h3>Cast</h3>
                    <Cast castData={movieDetailsData?.credits.cast} />
                </div>
            </div>
        </section>
    )
}

export default MovieDetail