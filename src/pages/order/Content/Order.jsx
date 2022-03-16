import { useDispatch, useSelector  } from "react-redux";
import OrderList from "./OrderList";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/asyncActions/asyncProducts";

const Order = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="container">
            <ul className="breadcrumbs">
                <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Главная</a>
                </li>
                <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Аксессуары</a>
                </li>
                <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Головные уборы</a>
                </li>
            </ul>
            <h1 className="title">Оформление заказа</h1>
            <form className="form js-form-validate order-page__form">
                <fieldset className="form__fieldset">
                    <legend className="form__title">Информация о покупателе</legend>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-name" className="form__label">Фамилия, имя, отчество</label>
                        </div>
                        <div className="form__col form__col_width_375">
                            <input id="order-name" name="Order[name]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-mail" className="form__label">Электронная почта</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input id="order-mail" name="Order[mail]" type="email" required className="input"/>
                        </div>
                        <div className="form__col">
                            <div className="form__info">Мы не рассылаем спам и не передаем информацию третьим лицам</div>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-phone" className="form__label">Контактный телефон</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input id="order-phone" name="Order[phone]" type="tel" required className="input"/>
                                <div className="form__info">Например, 9051234567</div>
                        </div>
                        <div className="form__col">
                            <div className="form__info">Необходим для подтверждения заказа</div>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-city" className="form__label">Город</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input id="order-city" name="Order[city]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-street" className="form__label">Улица</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input id="order-street" name="Order[street]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-postcode" className="form__label">Почтовый индекс</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input id="order-postcode" name="Order[postcode]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-house" className="form__label">Номер дома</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input id="order-house" name="Order[house]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-housing" className="form__label">Корпус</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input id="order-housing" name="Order[housing]" className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-apartment" className="form__label">Номер квартиры</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input id="order-apartment" name="Order[apartment]" className="input" type="text"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form__fieldset">
                    <legend className="form__title">Способ доставки</legend>
                    <div className="form__row form__row_direction_column">
                        <label className="form__label">Курьерская доставка</label>
                        <div className="form__info">от 3 до 10 рабочих дней с момента отправки посылки</div>
                        <div className="form__checkbox-group">
                            <div className="checkbox">
                                <input id="order-delivery-1" name="Order[delivery]" type="checkbox" value="DHL" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-1" className="checkbox__label form__label">DHL</label>
                            </div>
                            <div className="form__label">385 руб.</div>
                        </div>
                        <div className="form__checkbox-group">
                            <div className="checkbox">
                                <input id="order-delivery-2" name="Order[delivery]" type="checkbox" value="DPD" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-2" className="checkbox__label form__label">DPD</label>
                            </div>
                            <div className="form__label">355 руб.</div>
                        </div>
                    </div>
                    <div className="form__row form__row_direction_column">
                        <label className="form__label">Почтовое отправление</label>
                        <div className="form__checkbox-group">
                            <div className="checkbox">
                                <input id="order-delivery-3" name="Order[delivery]" type="checkbox" value="post" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-3" className="checkbox__label form__label">Почта России</label>
                            </div>
                            <div className="form__label">200 руб.</div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form__fieldset">
                    <legend className="form__title">Способ оплаты</legend>
                    <div className="radio">
                        <input id="order-payment-1" name="Order[payment]" type="radio" value="cash" required className="radio__elem"/>
                            <label htmlFor="order-payment-1" className="form__label radio__label">Наличными курьеру</label>
                    </div>
                    <div className="radio">
                        <input id="order-payment-2" name="Order[payment]" type="radio" value="e-money" required className="radio__elem"/>
                            <label htmlFor="order-payment-2" className="form__label radio__label">Электронные платежи</label>
                    </div>
                </fieldset>

                <OrderList />

                
            </form>
        </div>

    )
}

export default Order;