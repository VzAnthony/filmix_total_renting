import { MovieList } from "../../components"
import type { InterfaceMovieData } from "../../types/movie.type"

interface HomeProps {
    movieListData: InterfaceMovieData[] | null,
    isLoading: boolean,
    isError: boolean
}

const Home = ({
    movieListData,
    isLoading,
    isError
}: HomeProps) => {
    return (
        <section>
            <h1>Home</h1>
            {
                isLoading
                    ? <p>Loading...</p>
                    :
                    <MovieList movieListData={movieListData} />
            }
        </section>
    )
}

export default Home