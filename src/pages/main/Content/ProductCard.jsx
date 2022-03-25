import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSumTotalAmountAction, addSumTotalPriceAction, addProductInfoAction } from "../../../store/reducers/productInfoReducer";
import { useParams, useLocation, Link } from "react-router-dom";


const ProductCard = ({ pPrice, name, img, url, sizes, pCode, mark, pDiscount, id }) => {

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productSize, setProductSize] = useState(null);


    const increment = () => {
        setCount(count + 1);
        pDiscount ? setProductPrice(productPrice + discounted) : setProductPrice(productPrice + pPrice);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - pPrice);
        if (count <= 0) {
            setCount(0);
            setProductPrice(null)
        }
    }
    

    const setBasket = (price, amount, size, title=name, image=img, currentPrice = pPrice, code=pCode, discount=pDiscount, num=id) => {
        dispatch(addSumTotalPriceAction(price));
        dispatch(addSumTotalAmountAction(amount));
        

        const prodInfo = {
            price: price,
            amount: amount,
            size: size,
            title: title,
            image: image,
            currentPrice: currentPrice,
            code: code,
            discount: discount,
            num: id
        }
        dispatch(addProductInfoAction(prodInfo));
        
        setProductSize(null);
        setCount(0);
        setProductPrice(null);
    }

    
    let discounted;
    if(pDiscount){
          discounted = Math.trunc(pPrice - (pPrice * (pDiscount/100)));
    }
   

    return (
        <li key={id} className="goods__item">
            <article className="good">
                <div className="good__content">
                    <Link to={`${url}/${id}`} className="good__link">
                        <img src={img} alt="Товар" className="good__img" title={name} />
                        {mark.map(el => {
                            return el.new ?
                                <span key={id} className="flag flag_type_new">new</span> :
                                el.hit ?
                                    <span key={id} className="flag flag_type_hit">hit</span> :
                                    el.sale ?
                                        <span key={id} className="flag flag_type_sale">sale</span> :
                                        null
                        })}
                    </Link>
                    <a href="#" className="like">Мне нравится</a>
                    <h4 className="good__name">{name}</h4>
                    <div className="good__price-wrapper">
                        {pDiscount?
                                <>
                                    <span  className="good__price good__price_new">{discounted} р.</span>
                                    <span  className="good__price good__price_old">{pPrice} р.</span>
                                    <span  className="good__discount">Скидка {pDiscount}%</span>
                                </>   
                                 
                                 : <span key={id}  className="good__price">{pPrice} р.</span>
                        }   
                    </div>
                </div>
                <div className="good__hover">
                    <form method="post" action="" className="form good__order">
                        <div className="good__order-row">
                            <label className="good__order-label">Выберите размер</label>
                            {sizes.map(el => {
                                return (
                                    <div key={el.id} className="checkbox-tile">
                                        <input
                                            onClick={(e)=>setProductSize(e.target.value)} 
                                            disabled={!el.available} 
                                            id={`good${id-1}-size${el.id-1}`} 
                                            name="Good[size]" type="radio" 
                                            value={el.num} 
                                            required 
                                            className="checkbox-tile__elem" />
                                        <label htmlFor={`good${id-1}-size${el.id-1}`} className="checkbox-tile__label">{el.num}</label>
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
                        <button 
                            onClick={() => setBasket(productPrice, count, productSize)} 
                            type="button"
                            disabled={!productPrice} 
                            className="btn">Добавить в корзину</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default ProductCard;