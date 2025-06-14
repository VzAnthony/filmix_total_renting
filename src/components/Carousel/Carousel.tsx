import Slider from 'react-slick';
import type { CarouselProps } from './Carousel.type';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({
    children,
    settings
}: CarouselProps) => {
    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel