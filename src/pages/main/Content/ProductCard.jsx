import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSumTotalAmountAction, addSumTotalPriceAction, addProductInfoAction } from "../../../store/reducers/productInfoReducer";
import { useParams, useLocation, Link } from "react-router-dom";


const ProductCard = (props) => {

    const product = props.productData;    
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productSize, setProductSize] = useState(null);

   

    const increment = () => {
        setCount(count + 1);
        product.discount ? setProductPrice(productPrice + discounted) : setProductPrice(productPrice + product.price);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - product.price);
        if (count === 0) {
            setCount(0);
            setProductPrice(null)
        }
    }

    
    const setBasket = (
        price, 
        amount, 
        size, 
        title=product.title, 
        image=product.img, 
        currentPrice = product.price, 
        code=product.code, 
        discount=product.discount, 
        id=product.id) => {

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
            id: id
        }

        dispatch(addProductInfoAction(prodInfo));
        
        setProductSize(null);
        setCount(0);
        setProductPrice(null);
    }


    
    let discounted;
    if(product.discount){
          discounted = Math.trunc(product.price - (product.price * (product.discount/100)));
    }
    

    return (
        <li className="goods__item">
            <article className="good">
                <div className="good__content">
                    <Link to={`${product.url}/${product.id}`} className="good__link">
                        <img src={product.img} alt="Товар" className="good__img" title={product.title} />
                        {product.mark.map(el => {
                            return el.new ?
                                <span key={product.id} className="flag flag_type_new">new</span> :
                                el.hit ?
                                    <span key={product.id} className="flag flag_type_hit">hit</span> :
                                    el.sale ?
                                        <span key={product.id} className="flag flag_type_sale">sale</span> :
                                        null
                        })}
                    </Link>
                    <a href="#" className="like">Мне нравится</a>
                    <h4 className="good__name">{product.title}</h4>
                    <div className="good__price-wrapper">
                        {product.discount?
                                <>
                                    <span  className="good__price good__price_new">{discounted} р.</span>
                                    <span  className="good__price good__price_old">{product.price} р.</span>
                                    <span  className="good__discount">Скидка {product.discount}%</span>
                                </>
                                 : <span  className="good__price">{product.price} р.</span>
                        }   
                    </div>
                </div>
                <div className="good__hover">
                    <form method="post" action="" className="form good__order">
                        <div className="good__order-row">
                            <label className="good__order-label">Выберите размер</label>
                            {product.sizes.map(el => {
                                return (
                                    <div key={el.id} className="checkbox-tile">
                                        <input
                                            onClick={(e)=>setProductSize(e.target.value)} 
                                            disabled={!el.available} 
                                            id={`good${product.id-1}-size${el.id-1}`} 
                                            name="Good[size]" type="radio" 
                                            value={el.num} 
                                            required 
                                            className="checkbox-tile__elem" />
                                        <label htmlFor={`good${product.id-1}-size${el.id-1}`} className="checkbox-tile__label">{el.num}</label>
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
                            disabled={!count || !productSize}
                            style={!count || !productSize?{backgroundColor:"gray"}:{backgroundColor:"#0076bd"}} 
                            className="btn">{!productSize?"Выберите размер":"Добавить в корзину"}</button>
                    </form>
                </div>
            </article>
        </li>
    )
}

export default ProductCard;