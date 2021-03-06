
const initialState = {
    filterItems: [],
    filterInfo:[],
    filteredProducts: [],
    displayFilteredProducts: false
}

const ADD_FILTER_ITEMS = "ADD_FILTER_ITEMS";
const ADD_FILTER_INFO = "ADD_FILTER_INFO";
const ADD_FILTERED_PRODUCTS = "ADD_FILTERED_PRODUCTS";
const DISPLAY_FILTERED_PRODUCTS = "DISPLAY_FILTERED_PRODUCTS";

export const filterReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_FILTER_ITEMS:
            return {...state, filterItems: [...action.payload] }
        case ADD_FILTER_INFO:
            return {...state, filterInfo: [...state.filterInfo, action.payload]}
        case ADD_FILTERED_PRODUCTS: 
            return {...state, filteredProducts: [...action.payload]}
        case DISPLAY_FILTERED_PRODUCTS:
            return {...state, displayFilteredProducts: action.payload}               
        default:
            return state                
    }
}


export const addFiltersAction = (payload) =>{
    return {type: ADD_FILTER_ITEMS, payload}
}

export const addFilterInfoAction = (payload) =>{
    return {type: ADD_FILTER_INFO, payload }
}

export const addFilteredProductsAction = (payload) =>{
    return {type: ADD_FILTERED_PRODUCTS, payload}
}

export const displayFilteredProductsAction = (payload) => {
    return {type: DISPLAY_FILTERED_PRODUCTS, payload}
}