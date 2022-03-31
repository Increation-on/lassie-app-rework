

const initialState = {
    orderInfo: []
}


const ADD_ORDER_INFO = "ADD_ORDER_INFO";

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER_INFO:
            return {...state, orderInfo: [...state.orderInfo, action.payload] }
        default: 
            return state    
    }
}


export const addOrderInfoAction = (payload) => {
    return {type: ADD_ORDER_INFO, payload}
}