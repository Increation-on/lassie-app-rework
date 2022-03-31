import axios from "axios";
import { addFiltersAction } from "../reducers/filterReducer";

export const fetchFilter = () => {
    return (dispatch) => {
         axios.get('/mocks/filter.json').then((response) => {
            const data = response.data;
            dispatch(addFiltersAction(data));
        }).catch(err => alert(err + ' - something went wrong'));
    }
}