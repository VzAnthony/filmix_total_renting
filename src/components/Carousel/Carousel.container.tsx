import Carousel from './Carousel'
import type { CarouselProps } from './Carousel.type';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Carousel.styles.module.css'

const CarouselContainer = ({
    children,
    settings
}: CarouselProps) => {

    const PrevArrow = (props: any) => (
        <button
            className={`${styles.custom_arrow} ${styles.custom_arrow_prev}`}
            onClick={props.onClick}
            aria-label="Previous"
            type="button"
        >
            <IoIosArrowBack />
        </button>
    );

    const NextArrow = (props: any) => (
        <button
            className={`${styles.custom_arrow} ${styles.custom_arrow_next}`}
            onClick={props.onClick}
            aria-label="Next"
            type="button"
        >
            <IoIosArrowForward />
        </button>
    );

    const settingsDefault = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <Carousel settings={{ ...settingsDefault, ...settings }}>
            {children}
        </Carousel>
    )
}

export default CarouselContainer