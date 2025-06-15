import VideoTrailer from "./VideoTrailer"
import type { InterfaceVideoTrailerContainerProps } from "./VideoTrailer.type";

const VideoTrailerContainer = ({
    videos
}: InterfaceVideoTrailerContainerProps) => {
    const trailer = videos.find(
        (video) =>
            video.type === "Trailer" &&
            video.site === "YouTube" &&
            (video.official || true)
    )
    return (
        <VideoTrailer trailer={trailer} />
    )
}

export default VideoTrailerContainer