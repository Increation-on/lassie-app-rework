

const Popup = (props) => {

    const product = props.prod;

    return (
        <div data-popup="good" className="popup">
            <div className="popup-good popup__content">
                <div className="popup-good__title">Товар добавлен в корзину</div>
                <img src="assets/images/popup-1.jpg" alt="Фото товара" className="popup-good__img"/>
                <p className="popup-good__desc text">{product.title}</p>
                <div className="popup-good__row"><a href="#" className="btn btn_border js-popup-close popup-good__btn">Вернуться в каталог</a><a href="#" className="btn popup-good__btn">Оформить заказ</a>
                </div>
            </div>
        </div>
    )
}

export default Popup;