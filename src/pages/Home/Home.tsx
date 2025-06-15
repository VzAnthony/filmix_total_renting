import { MovieList, Spinner } from "../../components"
import type { InterfaceHomeProps } from "./Home.type"
import styles from "./Home.styles.module.css"



const Home = ({
    movieListData,
    isLoading,
    nextPage,
    prevPage,
    page
}: InterfaceHomeProps) => {
    return (
        <section>
            <h1 className={styles.title}>Welcome to Filmix</h1>
            <p className={styles.description}>
                Discover, explore, and enjoy the world of movies.
                Filmix is your gateway to detailed movie information, trending films, and personalized favorites.
                Start your cinematic journey—find your next favorite film and enjoy the experience!
            </p>

            {
                isLoading
                    ? <Spinner />
                    :
                    <MovieList movieListData={movieListData} />
            }
            <div className={styles.pagination}>
                <button className={styles.button} disabled={page === 1} onClick={prevPage}>Prev page</button>
                <p className={styles.pagination_number}>{page}</p>
                <button className={styles.button} onClick={nextPage}>Next page</button>
            </div>
        </section>
    )
}

export default Home