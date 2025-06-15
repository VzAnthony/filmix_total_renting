import { Carousel } from ".."
import type { InterfaceSimilarMoviesProps } from "./SimilarMovies.type"
import styles from "./SimilarMovies.styles.module.css"
import type { CarouselProps } from "../Carousel/Carousel.type"
import { Link } from "react-router-dom"

const SimilarMovies = ({
    similarMovieData,
    settings
}: InterfaceSimilarMoviesProps & CarouselProps) => {
    return (
        <Carousel settings={settings}>
            {
                similarMovieData?.map(({ poster_path, id }, idx) => (
                    <div className={styles.poster_item} key={idx}>
                        <Link to={`/movies/${id}`}>
                            <img
                                className={styles.poster_picture}
                                src={
                                    poster_path
                                        ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                                        : "/placeholder.jpg"
                                }
                                alt={"Poster image"}
                            />
                        </Link>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default SimilarMovies