
const defaultState = {
    products: []
}

const ADD_PRODUCTS = "ADD_PRODUCTS";

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return { ...state, products: [...action.payload]}
        default: return state;
    }
}

export const addProductsAction = (payload) =>{
    return {type: ADD_PRODUCTS, payload}
}