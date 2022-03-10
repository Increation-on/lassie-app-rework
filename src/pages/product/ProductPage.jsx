import Card from "../main/Content/Card";
import CardInfo from "./CardInfo"
import CardTabs from "./CardTabs";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import { Link } from "react-router-dom";


const ProductPage = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    return (
        <main className="content product-page">
            <div className="container">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item"><Link to="/main" className="breadcrumbs__name">Главная</Link>
                    </li>
                    <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Аксессуары</a>
                    </li>
                    <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Головные уборы</a>
                    </li>
                </ul>
                <div className="card product-page__card">
                    <div className="card__top">
                        <Gallery prod = {products} />
                        <CardInfo sizes = {products.map(el=>{
                            return el.sizes
                        })} />
                    </div>
                    <CardTabs />
                    <article className="product-page__section">
                        <h2 className="heading product-page__title"><span className="heading__text">С этим товаром покупают</span></h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 4) {
                                    return <Card key={el.id} price={el.price} name={el.title} img={el.img} sizes={el.sizes} />
                                }
                            })}
                        </ul>
                    </article>
                    <article className="product-page__section">
                        <h2 className="heading product-page__title"><span className="heading__text">Рекомендуем</span></h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 4) {
                                    return <Card key={el.id} price={el.price} name={el.title} img={el.img} sizes={el.sizes}/>
                                }
                            })}
                        </ul>
                    </article>
                    <div data-popup="good" className="popup">
                        <div className="popup-good popup__content">
                            <div className="popup-good__title">Товар добавлен в корзину</div>
                            <img src="assets/images/popup-1.jpg" alt="Фото товара" className="popup-good__img" title="" />
                            <p className="popup-good__desc text">Шапка-бини для новорожденных Nokoset</p>
                            <div className="popup-good__row"><a href="#" className="btn btn_border js-popup-close popup-good__btn">Вернуться в каталог</a><a href="#" className="btn popup-good__btn">Оформить заказ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage;