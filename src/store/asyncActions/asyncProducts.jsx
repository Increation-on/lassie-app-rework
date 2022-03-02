import axios from "axios";
import { addProductsAction } from "../reducers/productReducer";

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/products').then((response) => {
            const data = response.data;
            dispatch(addProductsAction(data));
        }).catch(err=> alert(err + ' - something went wrong'));
    }
}