import { Carousel } from ".."
import type { InterfacePosterProps } from "./Posters.type"
import styles from "./Posters.styles.module.css"
import type { CarouselProps } from "../Carousel/Carousel.type"

const Posters = ({
    postersData,
    settings
}: InterfacePosterProps & CarouselProps) => {
    return (
        <Carousel settings={settings}>
            {
                postersData?.map(({ file_path }, idx) => (
                    <div className={styles.poster_item} key={idx}>
                        <img
                            className={styles.poster_picture}
                            src={
                                file_path
                                    ? `https://image.tmdb.org/t/p/w500/${file_path}`
                                    : "/placeholder.jpg"
                            }
                            alt={"Poster image"}
                        />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Posters