import { useDispatch, useSelector  } from "react-redux";
import OrderList from "./OrderList";
import { useEffect, useState} from "react";
import { addOrderInfoAction } from "../../../store/reducers/orderReducer";
import axios from 'axios';

const Order = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');
    const [house, setHouse] = useState('');
    const [housing, setHousing] = useState('');
    const [apartment, setApartment] = useState('');
    const [dhl, setDhl] = useState(false);
    const [dpd, setDpd] = useState(false);
    const [mailing, setMailing] = useState(false);
    const [cash, setCash] = useState(false);
    const [emoney, setEmoney] = useState(false);
    

    

    const getOrderInfo = (name, email, phone, city, street, postcode, house, housing, apartment, dhl, dpd, mailing, cash, emoney) => {
        const orderInfo = {
            name: name,
            email: email,
            phone: phone,
            city: city,
            street: street,
            postcode: postcode,
            house: house,
            housing: housing,
            apartment: apartment,
            dhl: dhl,
            dpd: dpd,
            mailing: mailing,
            cash: cash,
            emoney: emoney
        }
        dispatch(addOrderInfoAction(orderInfo));
    }


    


    // const handleData = async (e) => {
    //     e.preventDefault();
    //     const response = await RequestService.login(
    //         name, email, phone, city, street, postcode, house, housing, apartment, dhl, dpd, mailing, cash, emoney);
    //     console.log(response);    
    // }

    

   

    
    return (
        <div className="container">
            <h1 className="title">Оформление заказа</h1>
            <form className="form js-form-validate order-page__form">
                <fieldset className="form__fieldset">
                    <legend className="form__title">Информация о покупателе</legend>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-name" className="form__label">Фамилия, имя, отчество</label>
                        </div>
                        <div className="form__col form__col_width_375">
                            <input onChange={(e)=>setName(e.target.value)} value={name} id="name" name="Order[name]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-mail" className="form__label">Электронная почта</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} id="email" name="Order[mail]" type="email" required className="input"/>
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
                            <input onChange={(e)=>setPhone(e.target.value)} value={phone} id="phone" name="Order[phone]" type="tel" required className="input"/>
                                <div className="form__info">Например, 9051234567</div>
                        </div>
                        <div className="form__col">
                            <div className="form__info">Необходим для подтверждения заказа</div>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label onChange={(e)=>setCity(e.target.value)} value={city} htmlFor="city" className="form__label">Город</label>
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
                            <input onChange={(e)=>setStreet(e.target.value)} value={street} id="street" name="Order[street]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-postcode" className="form__label">Почтовый индекс</label>
                        </div>
                        <div className="form__col form__col_width_260">
                            <input onChange={(e)=>setPostcode(e.target.value)} value={postcode} id="postcode" name="Order[postcode]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-house" className="form__label">Номер дома</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input onChange={(e)=>setHouse(e.target.value)} value={house} id="house" name="Order[house]" required className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-housing" className="form__label">Корпус</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input onChange={(e)=>setHousing(e.target.value)} value={housing} id="housing" name="Order[housing]" className="input" type="text"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_width_220">
                            <label htmlFor="order-apartment" className="form__label">Номер квартиры</label>
                        </div>
                        <div className="form__col form__col_width_90">
                            <input onChange={(e)=>setApartment(e.target.value)} value={apartment} id="apartment" name="Order[apartment]" className="input" type="text"/>
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
                                <input onChange={()=>setDhl(!dhl)} checked={dhl} id="order-delivery-1" name="Order[delivery]" type="checkbox" value="DHL" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-1" className="checkbox__label form__label">DHL</label>
                            </div>
                            <div className="form__label">385 руб.</div>
                        </div>
                        <div className="form__checkbox-group">
                            <div className="checkbox">
                                <input onChange={()=>setDpd(!dpd)} checked={dpd} id="order-delivery-2" name="Order[delivery]" type="checkbox" value="DPD" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-2" className="checkbox__label form__label">DPD</label>
                            </div>
                            <div className="form__label">355 руб.</div>
                        </div>
                    </div>
                    <div className="form__row form__row_direction_column">
                        <label className="form__label">Почтовое отправление</label>
                        <div className="form__checkbox-group">
                            <div className="checkbox">
                                <input onChange={()=>setMailing(!mailing)} checked={mailing} id="order-delivery-3" name="Order[delivery]" type="checkbox" value="post" required className="checkbox__elem"/>
                                    <label htmlFor="order-delivery-3" className="checkbox__label form__label">Почта России</label>
                            </div>
                            <div className="form__label">200 руб.</div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form__fieldset">
                    <legend className="form__title">Способ оплаты</legend>
                    <div className="radio">
                        <input onChange={()=>setCash(!cash)} checked={cash} id="order-payment-1" name="Order[payment]" type="radio" value="cash" required className="radio__elem"/>
                            <label htmlFor="order-payment-1" className="form__label radio__label">Наличными курьеру</label>
                    </div>
                    <div className="radio">
                        <input onChange={()=>setEmoney(!emoney)} checked={emoney} id="order-payment-2" name="Order[payment]" type="radio" value="e-money" required className="radio__elem"/>
                            <label htmlFor="order-payment-2" className="form__label radio__label">Электронные платежи</label>
                    </div>
                </fieldset>
                <OrderList
                    // postData = {handleData}
                    getOrderInfo={getOrderInfo}
                    name={name}
                    email={email}
                    phone={phone}
                    city={city}
                    street={street}
                    postcode={postcode}
                    house={house}
                    housing={housing}
                    apartment={apartment}
                    dhl={dhl}
                    dpd={dpd}
                    mailing={mailing}
                    cash={cash}
                    emoney={emoney}
                     />
            </form>
        </div>

    )
}

export default Order;