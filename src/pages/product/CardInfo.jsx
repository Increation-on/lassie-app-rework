import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
        addSumTotalAmountAction,
        addSumTotalPriceAction, 
        addProductInfoAction,
    } from '../../store/reducers/productInfoReducer';

const CardInfo = (props) => {

    const dispatch = useDispatch();
    const product = props.prod;

    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productSize, setProductSize] = useState(null);

    const totalPrice = useSelector(state => state.totalPrice.totalPrice);
    const totalAmount = useSelector(state => state.totalAmount.totalAmount);

    
    

    const increment = () => {
        setCount(count + 1);
        product.discount ? setProductPrice(productPrice + discounted) : setProductPrice(productPrice + product.price);
    }

    const decrement = () => {
        setCount(count - 1);
        setProductPrice(productPrice - product.price);
        if (count <= 0) {
            setCount(0);
            setProductPrice(null)
        }
    }

    const setBasket = (price, amount, size, title=product.title, image=product.img, currentPrice = product.price, code=product.code, discount=product.discount) => {
        dispatch(addSumTotalPriceAction(price));
        dispatch(addSumTotalAmountAction(amount));
        

        const prodInfo = {
            price: cancelIdleCallback,
            amount: amount,
            size: size,
            title: title,
            image: image,
            currentPrice: currentPrice,
            code: code,
            discount: discount,
        }
        dispatch(addProductInfoAction(prodInfo));
        

        setProductSize(null);
        setCount(0);
        setProductPrice(null);
    }
    
    let discounted;
    if(product && product.discount){
        discounted = Math.trunc(product.price - (product.price * (product.discount/100)));
    }


    return product ? (
        <div className="card__info"> 
            <header className="card__info-header">
                {product.mark.map(el => {
                    return el.new ?
                        <span key={el.id} className="flag flag_type_new">new</span> :
                        el.hit ?
                            <span key={el.id} className="flag flag_type_hit">hit</span> :
                            el.sale ?
                                <span key={el.id} className="flag flag_type_sale">sale</span> :
                                null
                })}
                <h1 className="card__name">{product.title}</h1>
                <div className="card__id text">{product.code}</div>
            </header>
            <div className="card__content-block">
                <div className="card__content-row">
                    {product.discount ? <div className="card__price card__price_new">{product.price - Math.trunc((product.price * (product.discount / 100)))} р.</div> : null}
                    {product.discount ? <div className="card__price card__price_old">{product.price} р.</div>:<div className="card__price">{product.price} р.</div>}
                </div>
                {product.discount ? <div className="card__discount text">Скидка: {product.discount}%</div> : null}
            </div>
            <div className="card__content-block">
                <div className="card__subtitle text">Материал:</div>
                {product.material.map(el=>{
                    return <div key={el.id} className="text">{el.title}</div>
                })}
            </div>
            <form method="post" action="" className="form">
                <div className="card__content-block">
                    <div className="card__subtitle text">Выберите размер:</div>
                    <div className="card__content-row card__content-row_checkboxes">
                        {product.sizes.map(el => {
                            return <div key={el.id} className="checkbox-tile checkbox-tile_size_extra">
                                <input  disabled={!el.available} 
                                        onClick={(e)=>{setProductSize(e.target.value)}} 
                                        id={`card-size-${el.id}`} 
                                        name="Card[size]" type="radio" 
                                        value={el.num} required 
                                        className="checkbox-tile__elem" />
                                <label htmlFor={`card-size-${el.id}`} className="checkbox-tile__label">{el.num}</label>
                            </div>
                        })}
                    </div>
                    <a href="#" className="link text">Сообщить о поступлении размера</a>
                </div>
                <div className="card__content-block card__content-block_margin_30">
                    <div className="card__subtitle text">Количество:</div>
                    <div className="card__content-row">
                        <div className="card__number input-number">
                            <input id="card-num" disabled={true} onChange={e => e.target.value} value={count} name="Card[number]" type="number" step="1" min="1" required className="input-number__elem" />
                            <div className="input-number__counter">
                                <span onClick={increment} className="input-number__counter-spin input-number__counter-spin_more">Больше</span>
                                <span onClick={decrement}  className="input-number__counter-spin input-number__counter-spin_less">Меньше</span>
                            </div>
                        </div>
                        <div className="card__avaible text">Есть в наличии</div>
                    </div>
                </div>
                <button  
                        onClick={() => setBasket(productPrice, count, productSize)}
                        disabled={!productSize}
                        type="button" 
                        data-popup="good" 
                        className="btn form__btn js-popup-open">
                        {!productSize?<span>Выберите размер</span>:<span>Добавить в корзину</span>}
                </button>
            </form>
        </div>
    ) : null
}

export default CardInfo;