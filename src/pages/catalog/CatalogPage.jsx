import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";
import ProductCard from "../main/Content/ProductCard";
import CatalogSort from "./CatalogSort";
import Filter from "./Filter";
import FilterTest from "./FilterTest";
import { fetchFilter, fetchFilteredProducts } from "../../store/asyncActions/asyncFilter";
import { showAllGoodsAction, showMoreGoodsAction, sortProductsAction } from "../../store/reducers/sortReducer";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchUnsortedProducts, fetchSortedByPriceProducts, fetchSortedByPopularProducts, fetchSortedByNewProducts, fetchSortedByAvailableProducts } from './../../store/asyncActions/asyncSorting';
import RequestService from './../../api/RequestService';
import { displayFilteredProductsAction } from './../../store/reducers/filterReducer';

const CatalogPage = () => {

    const products = useSelector(state => state.products.products);
    const goodsNumber = useSelector(state => state.productDisplayNum.productDisplayNum);
    const sortCategory = useSelector(state => state.productSortCategory.productSortCategory);
    const catalogHead = useSelector(state => state.category.category);
    const description = useSelector(state => state.description.description);
    const filterItems = useSelector(state => state.filterItems.filterItems);
    const displayFilteredProducts = useSelector(state => state.displayFilteredProducts.displayFilteredProducts)

    const dispatch = useDispatch();

    const sortedProducts = useSelector(state => state.sortedProducts.sortedProducts);

    const filteredProducts = useSelector(state => state.filteredProducts.filteredProducts);

    const [seasonValue, setSeasonValue] = useState([]);
    const [collectionValue, setCollectionValue] = useState([]);
    const [genderValue, setGenderValue] = useState([]);
    const [sizeValue, setSizeValue] = useState([]);
    const [colorValue, setColorValue] = useState([]);
    const [availableValue, setAvailableValue] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [generalFilter, setGeneralFilter] = useState({});
    

    let convertValue = (arr) => {
        let objArr=[];
        let str="";
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
                if(convertValue(val).length === 0 ){
                    setSeasonValue("")
                } else {
                    setSeasonValue(convertValue(val))
                }
                break
            case "collection":
                if(convertValue(val).length === 0 ){
                    setCollectionValue("")
                } else {
                    setCollectionValue(convertValue(val))
                }
                break
            case "gender":
                if(convertValue(val).length === 0 ){
                    setGenderValue("")
                } else
                setGenderValue(convertValue(val))
                break
            case "size":
                if(convertValue(val).length === 0 ){
                    setSizeValue("")
                } else 
                setSizeValue(convertValue(val))
                break
            case "color":
                if(convertValue(val).length === 0 ){
                    setColorValue("")
                } else
                setColorValue(convertValue(val))
                break
            case "availability":
                if(convertValue(val).length === 0 ){
                    setAvailableValue("")
                } else
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
        dispatch(fetchUnsortedProducts());
        dispatch(fetchFilteredProducts());
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



    useEffect(() => {
        dispatch(sortProductsAction(sortCategory));
    }, [sortCategory]);



    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(generalFilter))
    }

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const response = await RequestService.postFilterData(generalFilter);
        const data = await response;
        console.log(data)
        if(data){
            dispatch(displayFilteredProductsAction(true))
        } else {
            navigate("/error");
        }
      };

    const [showFilter, setShowFilter] = useState(false);
    const [showText, setShowText] = useState(false);

    return (
        <main className="content catalog-page">
            <div className="container">
                <h1>{catalogHead}</h1>
                <p data-block='0' className={showText?"catalog-page__text block-show":"catalog-page__text"}>{description}</p>
                <a style={{cursor:"pointer"}} onClick={()=>setShowText(!showText)} data-btn='0' data-text="???????????? ??????????" className="js-block-show link text">{showText?"???????????? ??????????":"???????????? ??????????"}</a>
                <a style={{cursor:"pointer"}} onClick={()=>setShowFilter(!showFilter)}  data-btn='1' data-text="???????????? ????????????" className="js-block-show link text">{showFilter?"???????????? ????????????":"???????????????? ????????????"}</a>
                <div className="catalog catalog-page__catalog">
                    <form onSubmit={onFormSubmit} method="post" data-block='1' 
                            className={showFilter?"catalog-page__filter catalog__filter form block-show":"catalog-page__filter catalog__filter form"}>
                        <fieldset className="form__fieldset">
                            <legend className="form__title form__title_align_center">????????????</legend>
                            {filterItems.map((el) => {
                                return <FilterTest getFilterValue={getFilterValue} key={el.id} filterItems={filterItems[el.id - 1]}/>
                            })}
                             <div className="form__row form__row_direction_column">
                            <label className="form__label">????????, ??????.</label>
                            <div className="range-slider">
                                <input className="range-slider__elem" type="text" />
                                <div className="range-slider__output-row">
                                    ????<input onChange={(e)=>{setMinPrice(e.target.value)}} name="Filter[price-min]" data-type="min" className="input range-slider__output" type="number" />
                                    ????<input onChange={(e)=>{setMaxPrice(e.target.value)}} name="Filter[price-max]" data-type="max" className="input range-slider__output" type="number" />
                                </div>
                            </div>
                        </div>
                        <button disabled={!minPrice && !maxPrice && !seasonValue.length && !collectionValue.length && !genderValue.length && !colorValue.length && !sizeValue.length && !availableValue.length}
                                style={!minPrice && !maxPrice && !seasonValue.length && !collectionValue.length && !genderValue.length && !colorValue.length && !sizeValue.length && !availableValue.length ? {backgroundColor:"gray"} : {backgroundColor:"#0076bd"}} 
                                // onClick={()=>dispatch(displayFilteredProductsAction(true))}  
                                type="submit" className="btn">???????????????? ????????????</button>
                        </fieldset>
                    </form>
                    <div className="catalog__main">
                        <CatalogSort/>
                        <div className="catalog__goods-wrapper">
                            <ul className="goods">
                                {displayFilteredProducts ? 
                                    filteredProducts.map((el) => {
                                        while (el.id <= goodsNumber) {
                                            return <ProductCard
                                                key={el.id}
                                                productData={filteredProducts[el.id-1]}
                                            />
                                        }
                                    })
                                : 
                                sortCategory ?
                                sortedProducts.map(el=>{
                                    while(el.id <= goodsNumber){
                                        return <ProductCard key={el.id} productData={sortedProducts[el.id -1]}/>
                                    }
                                }):
                                products.map(el=>{
                                        while(el.id <= goodsNumber){
                                            return <ProductCard key={el.id} productData={products[el.id-1]}/>
                                        }
                                    })         
                                }
                            </ul>
                        </div>
                        <div className="catalog__more">
                            <span onClick={() => dispatch(showMoreGoodsAction(goodsNumber + 12))} style={{ cursor: "pointer" }} className="catalog__more-btn link">
                                <span className="icon-load"></span>
                                ?????????????????? ?????? 12 ??????????????
                            </span>
                            <span onClick={() => dispatch(showAllGoodsAction(products.length))} style={{ cursor: 'pointer' }} className="link text">???????????????? ??????</span>
                        </div>
                    </div>
                </div>
                <p data-block='2' className="catalog-page__text">
                    ??????????????, ?????????? ?? ?????????? Lassie?? ???????????????? ?????????????? ??????. ?????????????????? ???????????????????? ???????????????? ????????: ???????????? ?? ???????????? ?????? ?????????? ?? ?????????????????? ???? ????????, ?????????????????? ?????????????? ?????? ?????????????????? ???? ?????????? ?????? ??????????, ?? ?????????? ?? ???????????????????? ???? ?????????? ?????? ???????????? ???? ????????. ???????????? ????????
                    ?????????????? ?????????? ?????????????????????? ???????????????????????????????????? ?????????????? ?? ?????????????? ???????? ?????? ???????????????????????????? ????????????. ?????? ?????????? ?????????????????? ???????????? ?????????????? ???? ?????????? ???????????? ?? ?????????????? ???????? ???????????? ???????? ?????????????????????????? ???????????? ?????????? ?????? ?????????? ???? ???????????????????????????? ????????.</p>
                    <a href="#" data-btn='2' data-text="???????????? ??????????" className="js-block-show link text">???????????? ??????????</a>
            </div>
        </main>
    )
}

export default CatalogPage;