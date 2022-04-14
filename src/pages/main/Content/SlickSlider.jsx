import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide from '../../../images/slider-1.jpg';
import  styled  from 'styled-components';


const SimpleSlider = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", right:"30px", zIndex: "1000" }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", left:"15px", zIndex: "1000" }}
            onClick={onClick}
          />
        );
      }

    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 4000,
        className: "index__slider slider",
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

   

    return (
        <Slider {...settings}>
            <div>
                <img src={slide} alt="kids" className="slider__img" />
                <div className="index__slider-title">Встречаем осень
                    <br />с новой коллекцией</div>
            </div>
            <div>
                <img src={slide} alt="kids" className="slider__img" />
                <div className="index__slider-title">Встречаем осень
                    <br />с новой коллекцией</div>
            </div>
            <div>
                <img src={slide} alt="kids" className="slider__img" />
                <div className="index__slider-title">Встречаем осень
                    <br />с новой коллекцией</div>
            </div>
            <div>
                <img src={slide} alt="kids" className="slider__img" />
                <div className="index__slider-title">Встречаем осень
                    <br />с новой коллекцией</div>
            </div>
        </Slider>
    );
}

export default SimpleSlider;