import { useForm } from "react-hook-form";
import { useState } from 'react';

const PaymentMethod = (props) => {

    const [toggleErr, setToggleErr] = useState(true);

    const errors = props.errors;
    const register = props.register


    return (
        <div className="radio">
            <input id={`order-payment-${props.id}`}
                name="Order[payment]" type="radio"
                value={props.value}
                {...register("Order[payment]", {
                    required: "Пожалуйста, выберите способ оплаты",
                })}
                className="radio__elem" />

            {/* {errors.Order && errors.Order.payment && toggleErr ?
                <div className="form__error-wrapper" style={{ display: "block" }}>
                    <label id="Order[payment]-error" className="form__error" htmlFor="Order[payment]" >Пожалуйста, выберите способ оплаты</label>
                    <span onClick={() => setToggleErr(!toggleErr)} className="form__error-hide"></span>
                </div> : null
            } */}


            <label htmlFor={`order-payment-${props.id}`} className="form__label radio__label">{props.method}</label>
        </div>
    )
}

export default PaymentMethod;