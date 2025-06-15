import { MovieList, Spinner } from "../../components"
import type { interfaceFavoriteProps } from "./Favorites.type"
import styles from "./Favorites.styles.module.css"

const Favorite = ({
    movieListData,
    isLoading,
}: interfaceFavoriteProps) => {
    return (
        <section>
            <h1 className={styles.title}>Welcome to your Favorites!</h1>
            <p className={styles.description}>Here you’ll find every movie you’ve saved. Start building your own movie collection and enjoy your personalized watchlist.</p>
            {
                isLoading
                    ? <Spinner />
                    :
                    <MovieList movieListData={movieListData} />
            }
        </section>
    )
}

export default Favorite