import slide from '../../../images/slider-1.jpg';
const AnotherSlider = () => {
    return (
        <div className="index__slider slider">
            <div className="bx-wrapper" style={{maxWidth: "100%"}}>
                <div className="bx-viewport" style={{width: "100%", overflow: "hidden", position: "relative", height: "325px"}}>
                    <ul className="slider__container" style={{width: "415%", position: "relative", transitionDuration: "0s", transform: "translate3d(-934px, 0px, 0px)"}}>
                        <li className="slider__item bx-clone" style={{float: "left", listStyle: "none", position: "relative", width: "934px"}}>
                            <img src={slide} alt="" className="slider__img" />
                            <div className="index__slider-title">Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className="slider__item" style={{float: "left", listStyle: "none", position: "relative", width: "934px"}}>
                            <img src={slide} alt="" className="slider__img" />
                            <div className="index__slider-title">Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className="slider__item" style={{float: "left", listStyle: "none", position: "relative", width: "934px"}}>
                            <img src={slide} alt="" className="slider__img" />
                            <div className="index__slider-title">Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className="slider__item bx-clone" style={{float: "left", listStyle: "none", position: "relative", width: "934px"}}>
                            <img src={slide} alt="" className="slider__img" />
                            <div className="index__slider-title">Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                    </ul>
                </div>
                <div className="bx-controls bx-has-pager bx-has-controls-direction">
                    <div className="bx-pager bx-default-pager">
                        <div className="bx-pager-item">
                            <a href="" data-slide-index="0" className="bx-pager-link active">1</a>
                        </div>
                        <div className="bx-pager-item">
                            <a href="" data-slide-index="1" className="bx-pager-link">2</a>
                        </div>
                    </div>
                    <div className="bx-controls-direction">
                        <a className="bx-prev" href="">Prev</a>
                        <a className="bx-next" href="">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AnotherSlider;