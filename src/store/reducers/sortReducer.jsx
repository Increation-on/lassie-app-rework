
const initialState = {
    productDisplayNum: 12,
    productSortCategory:"",
    sortedByPriceProducts: [],
    sortedByPopularProducts: [],
    sortedByNewProducts: [],
    sortedByAvailableProducts: [],

}

const CHANGE_DISPLAY_NUM = "CHANGE_DISPLAY_NUM";
const SHOW_ALL_GOODS = "SHOW_ALL_GOODS";
const SHOW_MORE_GOODS = "SHOW_MORE_GOODS";
const CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY";


const GET_SORT_BY_PRICE = "GET_SORT_BY_PRICE_PRODUCTS";
const GET_SORT_BY_POPULAR = "GET_SORT_BY_POPULAR";
const GET_SORT_BY_NEW = "GET_SORT_BY_NEW";
const GET_SORT_BY_AVAILABLE = "GET_SORT_BY_AVAILABLE";


export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DISPLAY_NUM:
            return { ...state, productDisplayNum: action.payload }
        case SHOW_ALL_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case SHOW_MORE_GOODS:
            return { ...state, productDisplayNum: action.payload }
        case CHANGE_SORT_CATEGORY:
            return {...state, productSortCategory: action.payload }
        case GET_SORT_BY_PRICE:
            return { ...state, sortedByPriceProducts: [...action.payload] }
        case GET_SORT_BY_POPULAR:
            return {...state, sortedByPopularProducts: [...action.payload] }
        case GET_SORT_BY_NEW:
            return {...state, sortedByNewProducts: [...action.payload] }
        case GET_SORT_BY_AVAILABLE:
            return {...state, sortedByAvailableProducts: [...action.payload] }             
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

export const changeSortCategoryAction = (payload) => {
    return { type: CHANGE_SORT_CATEGORY, payload }
}

export const getSortByPriceProductsAction = (payload) => {
    return { type: GET_SORT_BY_PRICE, payload }
}

export const getSortByPopularProductsAction = (payload) => {
    return { type: GET_SORT_BY_POPULAR, payload }
}

export const getSortByNewProductsAction = (payload) => {
    return { type: GET_SORT_BY_NEW, payload }
}

export const getSortByAvailableProductsAction = (payload) => {
    return { type: GET_SORT_BY_AVAILABLE, payload }
}
