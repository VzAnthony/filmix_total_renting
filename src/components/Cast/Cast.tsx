import type { CastProps } from "./Cast.type";
import styles from "./Cast.styles.module.css";
import Carousel from "../Carousel/Carousel.container";



const Cast = ({ castData }: CastProps) => {
    return (
        <Carousel>
            {
                castData?.map(({ id, name, profile_path }) => (
                    <div className={styles.cast_item} key={id}>
                        <img
                            className={styles.cast_picture}
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                                    : "/placeholder.jpg"
                            }
                            alt={name}
                        />
                        <p className={styles.cast_name}>{name}</p>
                    </div>
                ))
            }
        </Carousel>

    );
};

export default Cast;
