import CardInfo from "./CardInfo"
import CardTabs from "./CardTabs";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../main/Content/ProductCard";
import Popup from "./Popup";


const ProductPage = () => {

    const products = useSelector(state => state.products.products);
    const currentPath = useSelector(state => state.location.location);
    const sortedProducts = useSelector(state => state.sortedProducts.sortedProducts);
    const displayFilteredProducts = useSelector(state => state.displayFilteredProducts.displayFilteredProducts);

    const filteredProducts = useSelector(state => state.filteredProducts.filteredProducts);

    const dispatch = useDispatch();

    const params = useParams();
    const paramsId = Number(params.id);

    // useEffect(()=>{
    //     console.log(params)
    // }, [params])

    // useEffect(()=>{
    //     console.log("from: ", currentPath.from)
    //     console.log("to: ", currentPath.to)
    // },[currentPath.from])

    return products ? (
        <main className="content product-page">
            <div className="container">
                <div className="card product-page__card">
                    <div className="card__top">
                        {currentPath.from === "/catalog" && currentPath.from === `/product/${paramsId}`? 
                            <Gallery prod={displayFilteredProducts ? filteredProducts[paramsId-1] : sortedProducts[paramsId-1]} /> :
                            <Gallery prod={products[paramsId - 1]} />
                        }
                        {currentPath.from === "/catalog" && currentPath.from === `/product/${paramsId}` ? 
                            <CardInfo prod={displayFilteredProducts ? filteredProducts[paramsId-1] : sortedProducts[paramsId-1]} /> :
                            <CardInfo prod={products[paramsId - 1]} />
                        }
                    </div>
                        {currentPath.from === "/catalog" && currentPath.from === `/product/${paramsId}` ?  
                            <CardTabs prod={displayFilteredProducts ? filteredProducts[paramsId-1] : sortedProducts[paramsId-1]} /> :
                            <CardTabs prod={products[paramsId - 1]} />
                        }
                </div>
                <article className="product-page__section">
                        <h2 className="heading product-page__title">
                            <span className="heading__text">С этим товаром покупают</span>
                        </h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 5) {
                                    return <ProductCard
                                                key={el.id}
                                                productData={products[el.id - 1]} 
                                            />
                                }
                            })}
                        </ul>
                    </article>
                    <article className="product-page__section">
                        <h2 className="heading product-page__title">
                            <span className="heading__text">Рекомендуем</span>
                        </h2>
                        <ul className="goods product-page__goods">
                            {products.map((el) => {
                                while (el.id <= 5) {
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
        </main>
    ) : <div>Loading...</div>

}

export default ProductPage;