
const initialState = {
    amount: 0,
    totalPrice: 0
}


const ADD_TOTAL_AMOUNT ="ADD_AMOUNT";
const ADD_TOTAL_PRICE ="ADD_TOTAL_PRICE";

export const basketReducer = (state = initialState, action) => {
    switch(action.type) {
       case ADD_TOTAL_AMOUNT:
            return {...state, amount: state.amount + action.payload}
       case ADD_TOTAL_PRICE:
            return {...state, totalPrice: state.totalPrice + action.payload}
       default:
            return state  
    }
}


export const addAmountAction = (payload) =>{
    return {type: ADD_TOTAL_AMOUNT, payload}
}

export const addPriceAction = (payload) =>{
    return {type: ADD_TOTAL_PRICE, payload}
}