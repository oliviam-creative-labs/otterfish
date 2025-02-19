import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const CarouselComp = (props) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <Slider {...settings}>
                {props.data.map(slide => (
                    <div key={slide.id}>
                        <div
                            className="carousel_wrapper"
                            style={{
                                background: `url(/images/arts/${slide.name}) no-repeat`
                            }}
                        >
                            <div>
                                {slide.title}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )

}

export default CarouselComp