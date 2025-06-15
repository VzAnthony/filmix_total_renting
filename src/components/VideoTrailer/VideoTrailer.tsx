import type { InterfaceVideoTrailerProps } from "./VideoTrailer.type"

const VideoTrailer = ({
    trailer
}: InterfaceVideoTrailerProps) => {
    return trailer ? (
        <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            width="560"
            height="315"
            allowFullScreen
        />
    ) : (
        <p>No trailer available.</p>
    );
}

export default VideoTrailer