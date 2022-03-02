import styles from '../styles/Order.module.css';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const OrderPageFormRow = (props) => {

    const {
        register,
        formState: {
            errors,
        },
    } = useForm({
        mode: 'onBlur',
    });


    const [toggleErr, setToggleErr] = useState(true);


    return (
        <div className={styles.form__row}>
            <div className={props.formClass}>
                <label className={`${styles.form__label} ${errors[props.htmlForName] ? styles.label_invalid : styles.form__label}`} htmlFor={props.htmlForName}>
                    {props.text}</label>
            </div>
            <div className={`${styles.form__col} ${styles.form__col_width_375}`}>
                <input className={`${styles.input} ${errors[props.htmlForName] ? styles.invalid : styles.input} `} type={props.type}
                    {...register(props.htmlForName, {
                        required: "Пожалуйста, заполните это поле",
                        pattern: {
                            value: props.patternValue,
                            message: props.patternMessage
                        }
                    })}
                />
                {errors[props.htmlForName] && toggleErr ? <div className={styles.form__error_wrapper}>
                    <label className={`${styles.form__error} ${styles.form__label_invalid}`} htmlFor={props.htmlForName}>
                        {errors?.[props.htmlForName] && <span>{errors?.[props.htmlForName]?.message || "Error"}</span>}
                    </label>
                    <span onClick={() => setToggleErr(false)} className={styles.form__error_hide}></span>
                </div> : null}
            </div>
        </div>
    )
}

export default OrderPageFormRow;