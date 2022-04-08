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

    return products ? (
        <main className="content product-page">
            <div className="container">
                <div className="card product-page__card">
                    <div className="card__top">
                        <Gallery prod={products[paramsId - 1]} />
                        <CardInfo prod={products[paramsId - 1]} />
                    </div>
                    <CardTabs prod={products[paramsId - 1]} />
                    <article className="product-page__section">
                        <h2 className="heading product-page__title"><span className="heading__text">С этим товаром покупают</span></h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 4) {
                                    return <ProductCard
                                                key={el.id}
                                                productData={products[el.id - 1]} 
                                            />
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
                                                productData={products[el.id - 1]}
                                            />
                                }
                            })}
                        </ul>
                    </article>
                    <Popup prod={products[paramsId - 1]} />
                </div>
            </div>
        </main>
    ) : <div>Loading...</div>

}

export default ProductPage;