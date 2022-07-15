import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

const CarouselComp = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <Slider {...settings}>
                { props.data.map( slide => (
                        <div key={slide.id}>
                            <div className="corousel_wrapper"
                                style={{
                                    background: `url(/images/arts/${slide.name}) no-repeat`
                                }}
                            >

                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default CarouselComp