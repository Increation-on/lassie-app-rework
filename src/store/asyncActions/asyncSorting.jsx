import axios from "axios";
import {
            getUnsortedProductsAction,  
            getSortByPriceProductsAction, 
            getSortByPopularProductsAction,
            getSortByNewProductsAction, 
            getSortByAvailableProductsAction 
        } from "../reducers/sortReducer";

export const fetchSortedByPriceProducts = () => {
    return async  (dispatch) => {
       await axios.get('/mocks/productsSortedByPrice.json').then((response) => {
            const data = response.data;
            dispatch(getSortByPriceProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}

export const fetchSortedByPopularProducts = () => {
    return async  (dispatch) => {
       await axios.get('/mocks/productSortedByPopular.json').then((response) => {
            const data = response.data;
            dispatch(getSortByPopularProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}

export const fetchSortedByNewProducts = () => {
    return async  (dispatch) => {
       await axios.get('/mocks/productsSortedByNew.json').then((response) => {
            const data = response.data;
            dispatch(getSortByNewProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}

export const fetchSortedByAvailableProducts = () => {
    return async  (dispatch) => {
       await axios.get('/mocks/productsSortedByAvailable.json').then((response) => {
            const data = response.data;
            dispatch(getSortByAvailableProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}

export const fetchUnsortedProducts = () => {
    return async (dispatch) => {
        await axios.get('/mocks/products.json').then((response) => {
            const data = response.data;
            dispatch(getUnsortedProductsAction(data))
        }).catch(err => alert(err + ` - something went wrong`));
    }
}