import type { InterfaceMovieData } from "../../types/movie.type";

export interface InterfaceHomeProps {
    movieListData: InterfaceMovieData[] | null,
    isLoading: boolean,
    nextPage: () => void,
    prevPage: () => void,
    page: number
}