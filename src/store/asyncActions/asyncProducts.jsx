import axios from "axios";
import { getProductsAction } from "../reducers/productInfoReducer";

export const fetchProducts = () => {
    return async (dispatch) => {
        await axios.get('/mocks/products.json').then((response) => {
            const data = response.data;
            dispatch(getProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}