import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDisplayNumAction, changeSortCategoryAction } from "../../store/reducers/sortReducer";
import { getSortByPriceProductsAction } from "../../store/asyncActions/asyncSorting";
import { displayFilteredProductsAction } from "../../store/reducers/filterReducer";

const CatalogSort = (props) => {

    const displayNum = useSelector(state => state.productDisplayNum.productDisplayNum);
    const productSortCategory = useSelector(state => state.productSortCategory.productSortCategory)
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(changeSortCategoryAction(value));
        dispatch(displayFilteredProductsAction(false));
    }

    return  (
        <div className="catalog__sort">
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Сортировать по:</span>
                <select value={productSortCategory} onChange={(e)=>handleChange(e.target.value)} name="sort" className="js-select select">
                    <option value="popular">Популярности</option>
                    <option value="price">Цене</option>
                    <option value="new">Новизне</option>
                    <option value="available">Наличию</option>
                </select>
            </div>
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Отображать по:</span>
                <select value={displayNum} onChange={(e)=>{dispatch(changeDisplayNumAction(e.target.value))}} name="display" className="js-select select">
                    <option value={12}>12</option>
                    <option value={9}>9</option>
                    <option value={6}>6</option>
                    <option value={3}>3</option>
                </select>
            </div>
        </div>
    )
}

export default CatalogSort;