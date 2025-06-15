export interface InterfaceVideoTrailerContainerProps {
    videos: InterfaceVideoData[]
}

export interface InterfaceVideoTrailerProps {
    trailer: InterfaceVideoData | undefined
}

export interface InterfaceVideoData {
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
