import styles from '../../styles/Order.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomerInfo from './CustomerInfo';
import OrderList from './../OrderList';
import DeliveryMethod from './DeliveryMethod';
import PaymentMethod from './PaymentMethod';
import { useState } from 'react';
import RequestService from '../../../../api/RequestService';


const OrderPageContent = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            dirtyFields,
            isValid
        },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {}
    });

    const [toggleErr, setToggleErr] = useState(true);

    const onFormSubmit = async (data, e) => {
        e.preventDefault();
        const response = await RequestService.postOrderData(data);
        const formData = await response;
        console.log(formData);
    }




    return (
        <div className="container">
            <h1 className="title">Оформление заказа</h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className="form form_validate order_page__for">
                <fieldset className="form__fieldset">
                    <legend className="form__title">Информация о покупателе</legend>
                    <CustomerInfo
                        register={register} 
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        patternValue={/^([а-яё\s]+|[a-z\s]+)$/iu}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_375"
                        htmlForName='order_name'
                        type='text'
                        text='Фамилия, Имя, отчество'
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_260"
                        htmlForName='order_email'
                        text="Электронная почта"
                        type='email'
                        patternValue={/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
                        patternMessage="Пожалуйста, введите корректный адрес электронной почты"
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <div className="form__col">
                        <div className="form__info">Мы не рассылаем спам и не передаем информацию третьим лицам</div>
                    </div>
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_260"
                        htmlForName='order_phone'
                        text="Контактный телефон"
                        type='tel'
                        patternValue={/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
                        patternMessage="Пожалуйста, введите корректный номер телефона"
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <div className="form__col">
                        <div className="form__info">Необходим для подтверждения заказа</div>
                    </div>
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_260"
                        htmlForName='order_town'
                        text="Город"
                        type='text'
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_260"
                        htmlForName='order_street'
                        text="Улица"
                        type='text'
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_260"
                        htmlForName='order_mail_index'
                        text="Почтовый индекс"
                        type='number'
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_90"
                        htmlForName='order_home_number'
                        text="Номер дома"
                        type='number'
                        required={'Пожалуйста, заполните это поле'}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_90"
                        htmlForName='order_frame'
                        text="Корпус"
                        type='number'
                        required={false}
                    />
                    <CustomerInfo
                        register={register}
                        errors={errors}
                        dirtyFields={dirtyFields}
                        isValid={isValid}
                        labelClass="form__col form__col_width_220"
                        formClass="form__col form__col_width_90"
                        htmlForName='order_apartment'
                        text="Номер квартиры"
                        type='number'
                        required={false}
                    />
                </fieldset>
                <fieldset className="form__fieldset">
                    <legend className="form__title">Способ доставки</legend>
                    <div className="form__row form__row_direction_column">
                        <label className="form__label">Курьерская доставка</label>
                        <div className="form__info">от 3 до 10 рабочих дней с момента отправки посылки</div>
                        <DeliveryMethod
                            register={register}
                            errors={errors}
                            id={1}
                            deliveryName={"DHL"}
                            price={385}
                        />
                        <DeliveryMethod
                            register={register}
                            errors={errors}
                            id={2}
                            deliveryName={"DPD"}
                            price={385}
                        />
                    </div>

                    <div className="form__row form__row_direction_column">
                        <label className="form__label">Почтовое отправление</label>
                        <DeliveryMethod
                            register={register}
                            errors={errors}
                            id={3}
                            deliveryName={"Почта России"}
                            price={200}
                        />
                    </div>
                    {errors.Order && errors.Order.delivery && toggleErr ?
                        <div className="form__error-wrapper" style={{ display: "block", left: "200px", position: "relative", width: "300px" }}>
                            <label id="Order[payment]-error" className="form__error" htmlFor="Order[payment]" >Пожалуйста, выберите способ доставки</label>
                            <span onClick={() => setToggleErr(!toggleErr)} className="form__error-hide"></span>
                        </div> : null
                    }
                </fieldset>

                <fieldset className="form__fieldset">
                    <legend className="form__title">Способ оплаты</legend>
                    <PaymentMethod
                        register={register}
                        errors={errors}
                        method="Наличными курьеру"
                        id={1}
                        value={"cash"}
                    />
                    <PaymentMethod
                        register={register}
                        errors={errors}
                        method="Электронные платежи"
                        id={2}
                        value={"e-money"}
                    />
                    {errors.Order && errors.Order.payment && toggleErr ?
                        <div className="form__error-wrapper" style={{ display: "block", left: "200px", position: "relative", width: "300px" }}>
                            <label id="Order[payment]-error" className="form__error" htmlFor="Order[payment]" >Пожалуйста, выберите способ оплаты</label>
                            <span onClick={() => setToggleErr(!toggleErr)} className="form__error-hide"></span>
                        </div> : null
                    }
                </fieldset>
                <OrderList onFormSubmit={onFormSubmit} />
            </form>
        </div>
    )
}

export default OrderPageContent;