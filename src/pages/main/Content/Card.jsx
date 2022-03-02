import styles from '../styles/Main.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAmountAction, addPriceAction } from '../../../store/reducers/basketReducer';

const Card = (props) => {

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(props.price);
    

    const decrementAmount = () => {
        setAmount(amount - 1);
        if (amount <= 0) {
            setAmount(0)
        }
    }

    const sumPriceAndAmount = () => {
        setAmount(amount+1);
        setPrice(price);
    }


    const setBasket = (value) => {
        dispatch(addAmountAction(value));
        dispatch(addPriceAction(price));
        setAmount(0);
    }


    return (
        <li className={styles.goods__item}>
            <article className={styles.good}>
                <div className={styles.good__content}>
                    <a href="#" className={styles.good__link}>
                        <img src={props.img} alt="товар" className={styles.good__img} />
                        <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                    </a>
                    <a href="#" className={styles.like}>Мне нравится</a>
                    <h4 className={styles.good__name}>{props.name}</h4>
                    <div className={styles.good__price_wrapper}>
                        <span className={styles.good__price}>
                            {props.price} р.
                        </span>
                    </div>
                </div>
                <div className={styles.good__hover}>
                    <form method="post" action="" className={`${styles.form} ${styles.good__order}`}>
                        <div className={styles.good__order_row}>
                            <label className={styles.good__order_label}>Выберите размер</label>
                            <div className={styles.checkbox_title}>
                                <input id="good0-size0" name="Good[size]" type="radio" value="74" required="" className={styles.checkbox_title__elem} />
                                <label htmlFor="good0-size0" className={styles.checkbox_title__label}>74</label>
                            </div>
                            <div className={styles.checkbox_title}>
                                <input id="good0-size1" name="Good[size]" type="radio" value="80" required="" className={styles.checkbox_title__elem} />
                                <label htmlFor="good0-size1" className={styles.checkbox_title__label}>80</label>
                            </div>
                            <div className={styles.checkbox_title}>
                                <input id="good0-size2" name="Good[size]" type="radio" value="86" required="" className={styles.checkbox_title__elem} />
                                <label htmlFor="good0-size2" className={styles.checkbox_title__label}>86</label>
                            </div>
                            <div className={styles.checkbox_title}>
                                <input id="good0-size3" name="Good[size]" type="radio" value="92" required="" className={styles.checkbox_title__elem} />
                                <label htmlFor="good0-size3" className={styles.checkbox_title__label}>92</label>
                            </div>
                            <div className={styles.checkbox_title}>
                                <input id="good0-size4" name="Good[size]" type="radio" value="98" required="" className={styles.checkbox_title__elem} />
                                <label htmlFor="good0-size4" className={styles.checkbox_title__label}>98</label>
                            </div>
                        </div>
                        <div className={styles.good__order_row}>
                            <label htmlFor="good0-num" className={styles.good__order_label}>Количество</label>
                            <div className={styles.input_number}>
                                <input id="good0-num" name="Good[number]" type="number" disabled={true} value={amount} step="1" min="1" required="" className={styles.input_number__elem} />
                                <div className={styles.input_number__counter}>
                                    <span onClick={sumPriceAndAmount} className={`${styles.input_number__counter_spin} ${styles.input_number__counter_spin_more}`}>Больше</span>
                                    <span onClick={decrementAmount} className={`${styles.input_number__counter_spin} ${styles.input_number__counter_spin_less}`}>Меньше</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setBasket(amount)} type="button" className={styles.btn}>Добавить в корзину</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default Card;