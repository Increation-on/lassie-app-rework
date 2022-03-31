import axios from "axios";
import { getUnsortedProductsAction } from "../reducers/sortReducer";

export const fetchUnsortedProducts = () => {
    return  (dispatch) => {
         axios.get('/mocks/products.json').then((response) => {
            const data = response.data;
            dispatch(getUnsortedProductsAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}