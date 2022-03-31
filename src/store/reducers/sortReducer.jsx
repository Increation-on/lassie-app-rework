
const initialState = {
    productDisplayNum: 12,
    unsortedProducts: [],
}

const CHANGE_DISPLAY_NUM = "CHANGE_DISPLAY_NUM";
const SHOW_ALL_GOODS = "SHOW_ALL_GOODS";
const SHOW_MORE_GOODS = "SHOW_MORE_GOODS";
const SORTING_BY_CATEGORY = "CHANGE_SORT_CATEGORY";
const GET_UNSORTED_PRODUCTS = "GET_UNSORTED_PRODUCTS";
const CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY";

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DISPLAY_NUM:
            return { ...state, productDisplayNum: action.payload }
        case SHOW_ALL_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case SHOW_MORE_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case GET_UNSORTED_PRODUCTS:
            return { ...state, unsortedProducts: [...action.payload] }
        case SORTING_BY_CATEGORY:
            switch(action.payload){
                case "price":
                    return {...state, sortedProducts: [...state.unsortedProducts.sort((a,b)=> a.price > b.price ? 1 : -1)]}
                case "popular":
                    return {...state, sortedProducts: [...state.unsortedProducts] }
                case "new":
                    return {...state, sortedProducts: [...state.unsortedProducts] }
                case "available":
                        return {...state, sortedProducts: [...state.unsortedProducts] }          
                default:    
                    return {...state, sortedProducts: [...state.unsortedProducts] }    
            }
        default:
            return state
    }
}


export const changeDisplayNumAction = (payload) => {
    return { type: CHANGE_DISPLAY_NUM, payload }
}

export const showAllGoodsAction = (payload) => {
    return { type: SHOW_ALL_GOODS, payload }
}
export const showMoreGoodsAction = (payload) => {
    return { type: SHOW_ALL_GOODS, payload }
}

export const getUnsortedProductsAction = (payload) => {
    return { type: GET_UNSORTED_PRODUCTS, payload }
}

export const changeSortCategoryAction = (payload) => {
    return { type: CHANGE_SORT_CATEGORY, payload }
}

export const sortingByCategoryProductsAction = (payload) => {
    return { type: SORTING_BY_CATEGORY, payload }
}