
const initialState = {
    products: [],
    totalPrice: 0,
    totalAmount: 0,
    productInfo: [],
    likes: 0,
    location: ""
}

const SUM_TOTAL_PRICE = "SUM_TOTAL_PRICE";
const SUM_TOTAL_AMOUNT = "SUM_TOTAL_AMOUNT";
const ADD_PRODUCT_INFO = "ADD_PRODUCT_INFO";
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_LOCATION = "ADD_LOCATION";
const SET_LIKES = "SET_LIKES";
const RESET_TOTAL_PRICE = "RESET_TOTAL_PRICE";
const RESET_TOTAL_AMOUNT = "RESET_TOTAL_AMOUNT";
const RESET_PRODUCT_INFO = "RESET_PRODUCT_INFO";

export const productInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: [...action.payload] }
        case SUM_TOTAL_PRICE:
            return {...state, totalPrice: state.totalPrice + action.payload }
        case SUM_TOTAL_AMOUNT:
            return {...state, totalAmount: state.totalAmount + action.payload }
        case RESET_TOTAL_PRICE:
            return {...state, totalPrice: 0}
        case RESET_TOTAL_AMOUNT:
            return {...state, totalAmount: 0}
        case RESET_PRODUCT_INFO:
            return {...state, productInfo: []}           
        case ADD_PRODUCT_INFO: 
            return {...state, productInfo: [...state.productInfo, action.payload] }
        case ADD_LOCATION: 
            return {...state, location: action.payload } 
        case SET_LIKES:
            return {...state, likes: state.likes + action.payload}                                         
        default:
            return state
    }
}


export const getProductsAction = (payload) =>{
    return {type: GET_PRODUCTS, payload}
}

export const addSumTotalPriceAction = (payload) => {
    return { type: SUM_TOTAL_PRICE, payload }
}

export const addSumTotalAmountAction = (payload) => {
    return { type: SUM_TOTAL_AMOUNT, payload }
}

export const addProductInfoAction = (payload) => {
    return {type: ADD_PRODUCT_INFO, payload}
}

export const addLocationAction = (payload) => {
    return {type: ADD_LOCATION, payload}
}

export const setLikesAction = (payload) => {
    return {type: SET_LIKES, payload}
}

export const resetTotalPriceAction = () => {
    return {type: RESET_TOTAL_PRICE}
}

export const resetTotalAmountAction = () => {
    return {type: RESET_TOTAL_AMOUNT}
}

export const resetProductInfoAction = () => {
    return {type: RESET_PRODUCT_INFO}
}

