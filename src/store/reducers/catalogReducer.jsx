
const initialState = {
    category:"",
    description:"",
}

const GET_CATALOG_NAME = "GET_CATALOG_NAME";
const GET_PRODUCT_DESCRIPTION = "GET_PRODUCT_DESCRIPTION";

export const catalogReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_CATALOG_NAME:
            return {...state, category: action.payload};
        case GET_PRODUCT_DESCRIPTION:
            return {...state, description: action.payload};    
        default: 
            return state    
    }
}


export const getCatalogName = (payload) => {
    return {type: GET_CATALOG_NAME, payload}
}


export const getProductDescription = (payload) => {
    return {type: GET_PRODUCT_DESCRIPTION, payload}
}

