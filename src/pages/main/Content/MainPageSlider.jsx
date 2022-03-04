import '../../../style/app.min.css';
import slide from '../../../images/slider-1.jpg'
const MainPageSlider = (props) => {
    return (
        <div className="index__slider slider">
				<ul className="slider__container">
					<li className="slider__item">
						<img src={slide} alt="" className="slider__img"/>
						<div className="index__slider-title">Встречаем осень
							<br/>с новой коллекцией</div>
					</li>
					<li className="slider__item">
						<img src="assets/images/slider-1.jpg" alt="" className="slider__img"/>
						<div className="index__slider-title">Встречаем осень
							<br/>с новой коллекцией</div>
					</li>
				</ul>
			</div>
    )
}

export default MainPageSlider;