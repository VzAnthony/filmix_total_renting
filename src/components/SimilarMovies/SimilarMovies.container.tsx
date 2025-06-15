import SimilarMovies from "./SimilarMovies"
import type { InterfaceSimilarMoviesProps } from "./SimilarMovies.type"

const SimilarMoviesContainer = ({
    similarMovieData
}: InterfaceSimilarMoviesProps) => {

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 493,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <SimilarMovies similarMovieData={similarMovieData} settings={settings} />
    )
}

export default SimilarMoviesContainer