import styles from '../styles/Main.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementProductCountAction, incrementProductCountAction, addSumTotalPriceAction, addSumTotalAmountAction } from '../../../store/reducers/basketReducer';
import { Link, NavLink } from 'react-router-dom';

const Card = (props) => {

    const dispatch = useDispatch();
    // const amount = useSelector(state => state.amount.amount);
    // const price = useSelector(state => state.price.price);

    // const totalPrice = useSelector(state => state.totalPrice.totalPrice);

    // const incrementProductCount = (priceValue) => {
    //     dispatch(incrementProductCountAction(priceValue));
    //     console.log(price);
    //     console.log(amount);
    // }

    // const decrementProductCount = (priceValue) => {
    //     dispatch(decrementProductCountAction(priceValue));
    //     console.log(price);
    // }

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(null);

    const increment = () => {
        setCount(count + 1);
        setProductPrice(productPrice + props.price);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - props.price);
        if (count <= 0) {
            setCount(0);
            setProductPrice(null)
        }
    }



    const setBasket = (price, amount) => {
        dispatch(addSumTotalPriceAction(price));
        dispatch(addSumTotalAmountAction(amount));
        setCount(0);
        setProductPrice(null);
    }

    return (
        <li className={styles.goods__item}>
            <article className={styles.good}>
                <div className={styles.good__content}>
                    {props.name === "Зимний комбинезон для новорожденных Grian"
                        ? <Link to={`${props.url}`} className={styles.good__link}>
                            <img src={props.img} alt="товар" className={styles.good__img} />
                            <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                        </Link> 
                        : props.name === "Кросовки Reimatec® для детей Wetter"? 
                        <Link to={`${props.url}`} className={styles.good__link}>
                            <img src={props.img} alt="товар" className={styles.good__img} />
                            <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                        </Link>
                        : props.name === "Детская зимняя куртка Reimatec® Dinkar" ?
                        <Link to={`${props.url}`}  className={styles.good__link}>
                            <img src={props.img} alt="товар" className={styles.good__img} />
                            <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                        </Link>
                        : props.name === "Пинетки для новорожденных Neuvo"?
                        <Link to={`${props.url}`} className={styles.good__link}>
                            <img src={props.img} alt="товар" className={styles.good__img} />
                            <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                        </Link> 
                        :props.name === "Шапка-бини для новорожденных Hilal"?
                        <Link to={`${props.url}`}  className={styles.good__link}>
                            <img src={props.img} alt="товар" className={styles.good__img} />
                            <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                        </Link> 
                        :null                                      
                    }
                    {/* <Link to="/product" className={styles.good__link}>
                        <img src={props.img} alt="товар" className={styles.good__img} />
                        <span className={`${styles.flag} ${styles.flag_type_new}`}>new</span>
                    </Link> */}
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
                            {props.sizes.map(el=>{
                                return  <div className={styles.checkbox_title}>
                                            <input id="good0-size0" name="Good[size]" type="radio" value={el} required="" className={styles.checkbox_title__elem} />
                                            <label htmlFor="good0-size0" className={styles.checkbox_title__label}>{el}</label>
                                         </div>
                            })}
                            {/* <div className={styles.checkbox_title}>
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
                            </div> */}
                        </div>
                        <div className={styles.good__order_row}>
                            <label htmlFor="good0-num" className={styles.good__order_label}>Количество</label>
                            <div className={styles.input_number}>
                                <input id="good0-num" name="Good[number]" type="number" disabled={true} value={count} step="1" min="1" required="" className={styles.input_number__elem} />
                                <div className={styles.input_number__counter}>
                                    <span onClick={increment} className={`${styles.input_number__counter_spin} ${styles.input_number__counter_spin_more}`}>Больше</span>
                                    <span onClick={decrement} className={`${styles.input_number__counter_spin} ${styles.input_number__counter_spin_less}`}>Меньше</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setBasket(productPrice, count)} type="button" className={styles.btn}>Добавить в корзину</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default Card;