import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSumTotalAmountAction, addSumTotalPriceAction } from "../../../store/reducers/basketReducer";


const ProductCard = ({ price, name, img, url, sizes, mark, discount }) => {

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(null);

    const increment = () => {
        setCount(count + 1);
        setProductPrice(productPrice + price);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - price);
        if (count <= 0) {
            setCount(0);
            setProductPrice(null)
        }
    }

    // const HandleChange = (e) =>{
    //     e.preventDefault();
    //     setCount(Number(e.target.value))
    // }

    // type.map(el=>{
    //     el.sale?console.log(Math.trunc(price * (el.discount/100))): console.log("hehe")
    // })

    const setBasket = (price, amount) => {
        dispatch(addSumTotalPriceAction(price));
        dispatch(addSumTotalAmountAction(amount));
        setCount(0);
        setProductPrice(null);
    }


    return (
        <li className="goods__item">
            <article className="good">
                <div className="good__content">
                    <a href={url} className="good__link">
                        <img src={img} alt="Товар" className="good__img" title="" />
                        {mark.map(el => {
                            return el.new ?
                                <span className="flag flag_type_new">new</span> :
                                el.hit ?
                                    <span className="flag flag_type_hit">hit</span> :
                                    el.sale ?
                                        <span className="flag flag_type_sale">sale</span> :
                                        null
                        })}
                    </a>
                    <a href="#" className="like">Мне нравится</a>
                    <h4 className="good__name">{name}</h4>


                    {/* {Math.trunc(price - (price * (el.discount/100)))} */}
                    <div className="good__price-wrapper">
                        {discount?
                                <>
                                    <span className="good__price good__price_new">{Math.trunc(price - (price * (discount/100)))} р.</span>
                                    <span className="good__price good__price_old">{price} р.</span>
                                    <span className="good__discount">Скидка {discount}%</span>
                                </>   
                                 
                                 : <span className="good__price">{price} р.</span>
                        }
                        
                    </div>







                    {/* <span className="good__price">{price} р.</span> */}
                </div>
                <div className="good__hover">
                    <form method="post" action="" className="form good__order">
                        <div className="good__order-row">
                            <label className="good__order-label">Выберите размер</label>
                            {sizes.map(el => {
                                return (
                                    <div key={el.num} className="checkbox-tile">
                                        <input disabled={!el.available} id="good0-size0" name="Good[size]" type="radio" value={el.num} required className="checkbox-tile__elem" />
                                        <label htmlFor="good0-size0" className="checkbox-tile__label">{el.num}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="good__order-row">
                            <label htmlFor="good0-num" className="good__order-label">Количество</label>
                            <div className="input-number">
                                <input disabled={true} onChange={e => e.target.value} value={count} id="good0-num" name="Good[number]" type="number" step="1" min="1" required className="input-number__elem" />
                                <div className="input-number__counter">
                                    <span onClick={increment} className="input-number__counter-spin input-number__counter-spin_more">Больше</span>
                                    <span onClick={decrement} className="input-number__counter-spin input-number__counter-spin_less">Меньше</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setBasket(productPrice, count)} type="button" className="btn">Добавить в корзину</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default ProductCard;