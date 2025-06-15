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
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <SimilarMovies similarMovieData={similarMovieData} settings={settings} />
    )
}

export default SimilarMoviesContainer