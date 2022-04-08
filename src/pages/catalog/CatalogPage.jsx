import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import ProductCard from "../main/Content/ProductCard";
import CatalogSort from "./CatalogSort";
import Filter from "./Filter";
import FilterTest from "./FilterTest";
import { fetchFilter } from "../../store/asyncActions/asyncFilter";
import { showAllGoodsAction, showMoreGoodsAction } from "../../store/reducers/sortReducer";
import { Link, useLocation } from 'react-router-dom';
import { fetchSortedByPriceProducts, fetchSortedByPopularProducts, fetchSortedByNewProducts, fetchSortedByAvailableProducts } from './../../store/asyncActions/asyncSorting';

const CatalogPage = () => {

    const products = useSelector(state => state.products.products);
    const goodsNumber = useSelector(state => state.productDisplayNum.productDisplayNum);
    const sortCategory = useSelector(state => state.productSortCategory.productSortCategory);
    const catalogHead = useSelector(state => state.category.category);
    const description = useSelector(state => state.description.description);
    const filterItems = useSelector(state => state.filterItems.filterItems);

    // useEffect(() => {
    //     dispatch(fetchFilter());
    // }, [])

    const dispatch = useDispatch();

    const sortedByPrice = useSelector(state => state.sortedByPriceProducts.sortedByPriceProducts);
    const sortedByPopular = useSelector(state => state.sortedByPopularProducts.sortedByPopularProducts);
    const sortedByNew = useSelector(state => state.sortedByNewProducts.sortedByNewProducts);
    const sortedByAvailability = useSelector(state => state.sortedByAvailableProducts.sortedByAvailableProducts);

    const [seasonValue, setSeasonValue] = useState([]);
    const [collectionValue, setCollectionValue] = useState([]);
    const [genderValue, setGenderValue] = useState([]);
    const [sizeValue, setSizeValue] = useState([]);
    const [colorValue, setColorValue] = useState([]);
    const [availableValue, setAvailableValue] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const [generalFilter, setGeneralFilter] = useState({});
    
    // let convertValueToObject = (arr) => {
    //     let newObj={};
    //     let objArr=[];
    //     if(arr.length === 2){
    //         newObj[arr[0]] = arr[1];
    //     } else {
    //         for(let i = 1; i<arr.length; i++){
    //             objArr.push(arr[i])
    //         }
    //         newObj[arr[0]] = objArr;
    //     }
    //     return newObj;
    // }

    let convertValue = (arr) => {
        let objArr=[];
        let str = "";
        if(arr.length === 2){
            return str = arr[1];
        } else {
            for(let i = 1; i<arr.length; i++){
                objArr.push(arr[i])
            }
        return objArr;
        }
    }

    

    const getFilterValue = (val) => {
        switch(val[0]) {
            case "season":
                setSeasonValue(convertValue(val))
                break
            case "collection":
                setCollectionValue(convertValue(val))
                break
            case "gender":
                setGenderValue(convertValue(val))
                break
            case "size": 
                setSizeValue(convertValue(val))
                break
            case "color":
                setColorValue(convertValue(val))
                break
            case "availability":
                setAvailableValue(convertValue(val))
                break
            default:
                return                        
        }
       
    }

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchSortedByPriceProducts());
        dispatch(fetchSortedByPopularProducts());
        dispatch(fetchSortedByNewProducts());
        dispatch(fetchSortedByAvailableProducts());
    }, []);


    useEffect(() => {
       setGeneralFilter({
           season: seasonValue, 
           collection:collectionValue, 
           gender: genderValue, 
           size: sizeValue, 
           available: availableValue, 
           color: colorValue,
           minPrice: Number(minPrice),
           maxPrice: Number(maxPrice)
        });
    }, [seasonValue, collectionValue, genderValue, sizeValue, availableValue, colorValue, minPrice, maxPrice]);

    // useEffect(() => {
    //     console.log(generalFilter)
    // }, [generalFilter]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(generalFilter))
    }

    return (
        <main className="content catalog-page">
            <div className="container">
                <h1>{catalogHead}</h1>
                <p data-block='0' className="catalog-page__text">{description}</p>
                <a href="#" data-btn='0' data-text="Скрыть текст" className="js-block-show link text">Читать далее</a>
                <a href="#" data-btn='1' data-text="Скрыть фильтр" className="js-block-show link text">Показать фильтр</a>
                <div className="catalog catalog-page__catalog">
                    <form onSubmit={handleSubmit} method="post" data-block='1' className="catalog-page__filter catalog__filter form">
                        <fieldset className="form__fieldset">
                            <legend className="form__title form__title_align_center">Фильтр</legend>
                            {filterItems.map((el) => {
                                return <FilterTest getFilterValue={getFilterValue} key={el.id} filterItems={filterItems[el.id - 1]}/>
                            })}
                             <div className="form__row form__row_direction_column">
                            <label className="form__label">Цена, руб.</label>
                            <div className="range-slider">
                                <input className="range-slider__elem" type="text" />
                                <div className="range-slider__output-row">
                                    от<input onChange={(e)=>{setMinPrice(e.target.value)}} name="Filter[price-min]" data-type="min" className="input range-slider__output" type="number" />
                                    до<input onChange={(e)=>{setMaxPrice(e.target.value)}} name="Filter[price-max]" data-type="max" className="input range-slider__output" type="number" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn">Показать товары</button>
                        </fieldset>
                    </form>
                    {/* <Filter filterItems = {filterItems}/> */}
                    <div className="catalog__main">
                        <CatalogSort />
                        <div className="catalog__goods-wrapper">
                            <ul className="goods">
                                {products.map((el) => {
                                    while (el.id <= goodsNumber) {
                                        return <ProductCard
                                            key={el.id}
                                            productData={
                                                sortCategory === "price" ?
                                                    sortedByPrice[el.id - 1] :
                                                    sortCategory === "popular" ?
                                                        sortedByPopular[el.id - 1] :
                                                        sortCategory === "new" ?
                                                            sortedByNew[el.id - 1] :
                                                            sortCategory === "available" ?
                                                                sortedByAvailability[el.id - 1] :
                                                                products[el.id - 1]
                                            }
                                        />
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="catalog__more">
                            <span onClick={() => dispatch(showMoreGoodsAction(goodsNumber + 12))} style={{ cursor: "pointer" }} className="catalog__more-btn link">
                                <span className="icon-load"></span>
                                Загрузить еще 12 товаров
                            </span>
                            <span onClick={() => dispatch(showAllGoodsAction(products.length))} style={{ cursor: 'pointer' }} className="link text">Показать все</span>
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