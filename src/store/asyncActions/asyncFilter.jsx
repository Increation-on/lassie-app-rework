import axios from "axios";
import { addFilteredProductsAction, addFiltersAction } from "../reducers/filterReducer";

export const fetchFilter = () => {
    return (dispatch) => {
         axios.get('/mocks/filterMenu.json').then((response) => {
            const data = response.data;
            dispatch(addFiltersAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}

export const fetchFilteredProducts = () => {
    return (dispatch) => {
        axios.get('/mocks/filteredProducts.json').then((response)=> {
            const data = response.data;
            dispatch(addFilteredProductsAction(data));
        }).catch(err=> alert(err + ' - something went wrong'));
    }
}