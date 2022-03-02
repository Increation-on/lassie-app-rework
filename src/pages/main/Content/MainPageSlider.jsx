import styles from '../styles/Main.module.css';

const MainPageSlider = (props) => {
    return (
        <div styles={`${styles.index__slider} ${styles.slider}`}>
            <div className={styles.bx_wrapper}>
                <div className={styles.bx_viewport}>
                    <ul className={styles.slider__container} >
                        <li className={`${styles.slider__item}`} >
                            <img src={require('../../../img/slider/slider-1.jpg')} alt="kids" className={styles.slider__img} />
                            <div className={styles.index__slider_title}>
                                Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className={styles.slider__item}>
                            <img src={require('../../../img/slider/slider-1.jpg')} alt="kids" className={styles.slider__img} />
                            <div className={styles.index__slider_title}>
                                Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className={`${styles.slider__item} ${styles.bx_clone}`} style={{float:"left", listStyle: "none", position: "relative", width:"850px"}}>
                            <img src={require('../../../img/slider/slider-1.jpg')} alt="kids" className={styles.slider__img} />
                            <div className={styles.index__slider_title}>
                                Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                        <li className={`${styles.slider__item} ${styles.bx_clone}`}>
                            <img src={require('../../../img/slider/slider-1.jpg')} alt="kids" className={styles.slider__img} />
                            <div className={styles.index__slider_title}>
                                Встречаем осень
                                <br />с новой коллекцией</div>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.bx_controls} ${styles.bx_has_pager} ${styles.bx_has_controls_direction}`}>
                    <div className={`${styles.bx_pager} ${styles.bx_default_pager} ${styles.bx_has_controls_direction}`}>
                        <div className={styles.bx_pager_item}>
                            <a href="" data-slide-index="0" className={`${styles.bx_pager_link} ${styles.active}`}>1</a>
                        </div>
                        <div className={styles.bx_pager_item}>
                            <a href="" data-slide-index="1" className={styles.bx_pager_link}>2</a>
                        </div>
                    </div>
                    <div className={styles.bx_controls_direction}>
                        <a className={styles.bx_prev} href="">Prev</a>
                        <a className={styles.bx_prev} href="">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageSlider;