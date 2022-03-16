import CardInfo from "./CardInfo"
import CardTabs from "./CardTabs";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../main/Content/ProductCard";
import Popup from "./Popup";


const ProductPage = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    

    const params = useParams();
    const paramsId = Number(params.id);
   


    return products? (
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
                        <Gallery prod={products[paramsId-1]} />
                        <CardInfo prod={products[paramsId-1]}/>
                    </div>
                    <CardTabs prod ={products[paramsId-1]} />
                    <article className="product-page__section">
                        <h2 className="heading product-page__title"><span className="heading__text">С этим товаром покупают</span></h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 4) {
                                    return <ProductCard
                                        key={el.id}
                                        id={el.id}
                                        price={el.price}
                                        name={el.title}
                                        img={el.img}
                                        url={el.url}
                                        sizes={el.sizes}
                                        mark={el.mark}
                                        discount={el.discount} />
                                        
                                }
                            })}
                        </ul>
                    </article>
                    <article className="product-page__section">
                        <h2 className="heading product-page__title"><span className="heading__text">Рекомендуем</span></h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 4) {
                                    return <ProductCard
                                        key={el.id}
                                        id={el.id}
                                        price={el.price}
                                        name={el.title}
                                        img={el.img}
                                        url={el.url}
                                        sizes={el.sizes}
                                        mark={el.mark}
                                        discount={el.discount} />
                                }
                            })}
                        </ul>
                    </article>
                    <Popup prod={products[paramsId-1]}/>
                </div>
            </div>
        </main>
    ) : <div>Loading...</div>

}

export default ProductPage;