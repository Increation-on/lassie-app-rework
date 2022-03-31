import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDisplayNumAction, changeSortCategoryAction, sortingByCategoryProductsAction } from "../../store/reducers/sortReducer";
import { fetchUnsortedProducts } from "../../store/asyncActions/asyncUnsortProducts";

const CatalogSort = () => {

    const displayNum = useSelector(state => state.productDisplayNum.productDisplayNum);
    // const sortCategory = useSelector(state => state.productSortCategory.productSortCategory);
    const unsortedProducts = useSelector(state => state.unsortedProducts.unsortedProducts);
    const products = useSelector(state => state.products.products);
    const sortedProducts = useSelector(state => state.sortedProducts.sortedProducts);
    const dispatch = useDispatch();



    const [category, setCategory] = useState("popular");

    useEffect(() => {
        dispatch(fetchUnsortedProducts());
    }, []);

    const handleChangeSortCategory = (value) => {
        setCategory(value)
        dispatch(sortingByCategoryProductsAction(value));
    }

   
    // console.log(category);
    // console.log("unsorted: ", unsortedProducts);
    // console.log("sorted: ", sortedProducts)

    const sortByPrice = (arr) => {
        arr.sort((a, b)=> a.price > b.price ? 1 : -1);
    }

    


    return  (
        <div className="catalog__sort">
            <div className="catalog__sort-group"><span className="catalog__sort-text text">Сортировать по:</span>
                <select value={category} onChange={(e)=>handleChangeSortCategory(e.target.value)} name="sort" className="js-select select">
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