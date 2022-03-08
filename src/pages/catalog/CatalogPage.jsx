import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import Card from "../main/Content/Card";
import CatalogSort from "./CatalogSort";
import Filter from "./Filter";

const CatalogPage = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    return (
        <main className="content catalog-page">
            <div className="container">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Главная</a>
                    </li>
                    <li className="breadcrumbs__item"><a href="#" className="breadcrumbs__name">Аксессуары</a>
                    </li>
                </ul>
                <h1>Головные уборы</h1>
                <p data-block='0' className="catalog-page__text">Шапочки, кепки и шляпы Lassie® защищают круглый год. Выбирайте подходящий головной убор: шляпку с полями или кепку с козырьком на лето, тоненькую шапочку без подкладки на осень или весну, и шапку с подкладкой из флиса или джерси на зиму. Многие наши
                    шапочки имеют специальные ветронепроницаемые вставки в области ушей для дополнительной защиты. Для самых маленьких лучшим выбором во время метели и снежной бури станут наши ветрозащитные зимние шапки или шапки из искусственного меха.</p><a href="#"
                        data-btn='0' data-text="Скрыть текст" className="js-block-show link text">Читать далее</a><a href="#" data-btn='1' data-text="Скрыть фильтр" className="js-block-show link text">Показать фильтр</a>
                <div className="catalog catalog-page__catalog">
                    <Filter />
                    <div className="catalog__main">
                        <CatalogSort />
                        <div className="catalog__goods-wrapper">
                            <ul className="goods">
                                {products.map((el) => {
                                    return <Card key={el.id} price={el.price} name={el.title} img={el.img} />
                                })}
                            </ul>
                        </div>
                        <div className="catalog__more"><a href="#" className="catalog__more-btn link"><span className="icon-load"></span>Загрузить еще 12 товаров</a><a href="#" className="link text">Показать все</a>
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