export interface InterfaceMovieDetailsProps {
    movieDetailsData: MovieDetailsData | null,
    isLoading: boolean,
    isFavorite: (id: number) => boolean,
    toggleFavorite: (id: number) => void
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void
}

export interface MovieDetailsData {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: BelongsToCollection
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    credits: Credits
    videos: Videos
    images: Images
    similar: Similar
}

export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: any
}

export interface Genre {
    id: number
    name: string
}

export interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}

export interface Credits {
    cast: Cast[]
    crew: Crew[]
}

export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    credit_id: string
    department: string
    job: string
}

export interface Videos {
    results: Result[]
}

export interface Result {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}

export interface Images {
    backdrops: Backdrop[]
    logos: Logo[]
    posters: Poster[]
}

export interface Backdrop {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface Logo {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface Poster {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface Similar {
    page: number
    results: SimilarMoviesData[]
    total_pages: number
    total_results: number
}

export interface SimilarMoviesData {
    adult: boolean
    backdrop_path?: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}