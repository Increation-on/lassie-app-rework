
const initialState = {
    totalPrice: 0,
    totalAmount: 0,
    productInfo: []

}

const SUM_TOTAL_PRICE = "SUM_TOTAL_PRICE";
const SUM_TOTAL_AMOUNT = "SUM_TOTAL_AMOUNT";
const ADD_PRODUCT_INFO = "ADD_PRODUCT_INFO";

export const productInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUM_TOTAL_PRICE:
            return {...state, totalPrice: state.totalPrice + action.payload }
        case SUM_TOTAL_AMOUNT:
            return {...state, totalAmount: state.totalAmount + action.payload }
        case ADD_PRODUCT_INFO: 
            return {...state, productInfo: [...state.productInfo, action.payload] }                                 
        default:
            return state
    }
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

