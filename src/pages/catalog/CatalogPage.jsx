import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import ProductCard from "../main/Content/ProductCard";
import CatalogSort from "./CatalogSort";
import Filter from "./Filter";
import { showAllGoodsAction, showMoreGoodsAction } from "../../store/reducers/sortReducer";
import { Link, useLocation  } from 'react-router-dom';

const CatalogPage = () => {

    const products = useSelector(state => state.products.products);
    const goodsNumber = useSelector(state => state.productDisplayNum.productDisplayNum);
    const sortCategory = useSelector(state => state.productSortCategory.productSortCategory);
    const catalogHead = useSelector(state=> state.category.category);
    const description = useSelector(state=> state.description.description);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const sortByPrice = (arr) => {
        arr.sort((a, b)=> a.price > b.price ? 1 : -1);
    }

    switch(sortCategory){
        case "price":
            sortByPrice(products);
            break;
        default: 
           dispatch(fetchProducts());     
    }

    

    return (
        <main className="content catalog-page">
            
            <div className="container">
                {/* <ul className="breadcrumbs">
                    <li className="breadcrumbs__item">
                        <Link to="/main" className="breadcrumbs__name">Главная</Link>
                    </li>
                    <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Аксессуары</a>
                    </li>
                </ul> */}
                <h1>{catalogHead}</h1>
                <p data-block='0' className="catalog-page__text">{description}</p>
                <a href="#" data-btn='0' data-text="Скрыть текст" className="js-block-show link text">Читать далее</a>
                <a href="#" data-btn='1' data-text="Скрыть фильтр" className="js-block-show link text">Показать фильтр</a>
                <div className="catalog catalog-page__catalog">
                    <Filter />
                    <div className="catalog__main">
                        <CatalogSort />
                        <div className="catalog__goods-wrapper">
                            <ul className="goods">
                                {products.map((el) => {
                                    while(el.id <= goodsNumber){
                                        return <ProductCard 
                                        key={el.id}
                                        id={el.id} 
                                        pPrice={el.price} 
                                        name={el.title} 
                                        img={el.img} 
                                        url={el.url} 
                                        sizes = {el.sizes} 
                                        mark={el.mark}
                                        pDiscount={el.discount}
                                        pCode={el.code} />
                                    }       
                                })}
                            </ul>
                        </div>
                        <div className="catalog__more">
                            <span onClick={()=>dispatch(showMoreGoodsAction(goodsNumber + 12))} style={{cursor:"pointer"}} className="catalog__more-btn link">
                                <span className="icon-load"></span>
                                Загрузить еще 12 товаров
                            </span>
                                <span onClick={()=>dispatch(showAllGoodsAction(products.length))} style={{cursor: 'pointer'}} className="link text">Показать все</span>
                        </div>
                    </div>
                </div>



                <p data-block='2' className="catalog-page__text">Шапочки, кепки и шляпы Lassie® защищают круглый год. Выбирайте подходящий головной убор: шляпку с полями или кепку с козырьком на лето, тоненькую шапочку без подкладки на осень или весну, и шапку с подкладкой из флиса или джерси на зиму. Многие наши
                    шапочки имеют специальные ветронепроницаемые вставки в области ушей для дополнительной защиты. Для самых маленьких лучшим выбором во время метели и снежной бури станут наши ветрозащитные зимние шапки или шапки из искусственного меха.</p><a href="#"
                        data-btn='2' data-text="Скрыть текст" className="js-block-show link text">Читать далее</a>
            </div>
        </main>
    )
}

export default CatalogPage;