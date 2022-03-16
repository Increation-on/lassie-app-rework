import { useSelector } from "react-redux";


const OrderList = () => {

    const totalProductPrice = useSelector(state => state.totalPrice.totalPrice);
    const productInfo = useSelector(state => state.productInfo.productInfo);


    const nds = Math.trunc(totalProductPrice * 0.2);

    return (
        <fieldset className="form__fieldset">
            <legend className="form__title">Состав заказа</legend>
            <div className="goods-table">
                <div className="goods-table__header">
                    <div className="goods-table__header-row">
                        <div className="goods-table__heading">Товары</div>
                        <div className="goods-table__heading">Скидка</div>
                        <div className="goods-table__heading">Цена</div>
                        <div className="goods-table__heading">Количество</div>
                        <div className="goods-table__heading">Сумма</div>
                    </div>
                </div>
                <div className="goods-table__main">
                    {productInfo.map(el => {
                        return <div className="goods-table__row">
                            <div className="goods-table__cell">
                                <div className="goods-table__col">
                                    <div className="goods-table__img-wrapper">
                                        <img src={el.image} alt="product" className="goods-table__img" />
                                        {el.discount?<span class="flag flag_type_sale">sale</span>:null}
                                    </div>
                                </div>
                                <div className="goods-table__col">
                                    <div className="goods-table__text">{el.title}</div>
                                    <div className="goods-table__info">{el.code}</div>
                                    <div className="goods-table__info">Размер: 0{el.size}</div>
                                </div>
                            </div>
                            <div className="goods-table__cell">
                                {el.discount?<div class="goods-table__text goods-table__text_discount">20%</div>:null}
                            </div>
                            <div className="goods-table__cell">
                                <div className="goods-table__text">{el.currentPrice} руб.</div>
                            </div>
                            <div className="goods-table__cell">
                                <div className="goods-table__text">{el.amount} шт.</div>
                            </div>
                            <div className="goods-table__cell">
                                {el.discount
                                    ?<div class="goods-table__text goods-table__text_discount">{el.price} руб.</div>
                                    :<div className="goods-table__text">{el.price} руб.</div>
                                }
                            </div>
                        </div>
                    })}

                </div>

            </div>
            <div className="form__total">
                    <div className="form__col-right">
                        <div className="form__total-row form__total-row_goods-cost"><span className="form__total-item">Товаров на сумму:</span><span className="form__total-item">{totalProductPrice} руб.</span>
                        </div>
                        <div className="form__total-row form__total-row_tax"><span className="form__total-item">В том числе НДС:</span><span className="form__total-item">{nds} руб.</span>
                        </div>
                        <div className="form__total-row form__total-row_general"><span className="form__total-item">Итого</span>
                            <div className="form__total-item form__total-item_sum">{totalProductPrice} руб.</div>
                        </div>
                        <p>Заполнение вышеуказанных данных является необходимым для оформления Заказа и осуществления доставки. Все данные находятся на территории РФ, согласно Законодательству РФ.</p>
                        <p>Предоставляя свои персональные данные при оформлении Заказа, подтверждаю свое согласие на обработку моих персональных данных, а также на аудиозапись своего общения с представителями Сайта в период оформления Заказа и исполнения обязательств согласно
                            <a
                                href="#" className="link">Пользовательскому Соглашению.</a>
                        </p>
                    </div>
                </div>
                <button type="submit" className="btn form__btn form__btn_align_right">Оформить заказ</button>
        </fieldset>
    )
}

export default OrderList;