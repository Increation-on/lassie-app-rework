
const initialState = {
    amount: 0,
    price: 0,
    totalPrice: 0,
    totalAmount: 0,
}


const INCREMENT_PRODUCT_COUNT = "INCREMENT_PRODUCT_COUNT";
const DECREMENT_PRODUCT_COUNT = "DECREMENT_PRODUCT_COUNT";
const SUM_TOTAL_PRICE = "SUM_TOTAL_PRICE";
const SUM_TOTAL_AMOUNT = "SUM_TOTAL_AMOUNT";

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_PRODUCT_COUNT:
            return { ...state, amount: state.amount + 1, price: state.price + action.payload }
        case DECREMENT_PRODUCT_COUNT:
            return state.amount <= 0 ? {...state, amount: 0} : { ...state, amount: state.amount - 1, price: state.price - action.payload }
        case SUM_TOTAL_PRICE:
            return {...state, totalPrice: state.totalPrice + action.payload}
        case SUM_TOTAL_AMOUNT:
            return {...state, totalAmount: state.totalAmount + action.payload }         
        default:
            return state
    }
}



export const incrementProductCountAction = (payload) => {
    return { type: INCREMENT_PRODUCT_COUNT, payload }
}

export const decrementProductCountAction = () => {
    return { type: DECREMENT_PRODUCT_COUNT }
}

export const addSumTotalPriceAction = (payload) => {
    return { type: SUM_TOTAL_PRICE, payload }
}

export const addSumTotalAmountAction = (payload) => {
    return { type: SUM_TOTAL_AMOUNT, payload }
}

