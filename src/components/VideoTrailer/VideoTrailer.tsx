import type { InterfaceVideoTrailerProps } from "./VideoTrailer.type"
import styles from "./VideoTrailer.styles.module.css"

const VideoTrailer = ({
    trailer
}: InterfaceVideoTrailerProps) => {
    return trailer ? (
      <div className={styles.video_container}>
        <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            width="560"
            height="315"
            allowFullScreen
        />
      </div>
    ) : (
        <p>No trailer available.</p>
    );
}

export default VideoTrailer
