import type { CastProps } from "./Cast.type";
import Styles from "./Cast.styles.module.css";
import Carousel from "../Carousel/Carousel.container";



const Cast = ({ castData }: CastProps) => {
    return (
        <Carousel>
            {
                castData?.map(({ id, name, profile_path }) => (
                    <div className={Styles.cast_item} key={id}>
                        <img
                            className={Styles.cast_picture}
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                                    : "/placeholder.jpg"
                            }
                            alt={name}
                        />
                        <p className={Styles.cast_name}>{name}</p>
                    </div>
                ))
            }
        </Carousel>

    );
};

export default Cast;
