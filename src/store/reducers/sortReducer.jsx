
const initialState = {
    productDisplayNum: 12,
    productSortCategory: "popular"
}

const CHANGE_DISPLAY_NUM = "CHANGE_DISPLAY_NUM";
const SHOW_ALL_GOODS ="SHOW_ALL_GOODS";
const SHOW_MORE_GOODS = "SHOW_MORE_GOODS";
const CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY";

export const sortReducer = ( state=initialState, action ) => {
    switch(action.type){
        case CHANGE_DISPLAY_NUM:
            return {...state, productDisplayNum: action.payload}
        case SHOW_ALL_GOODS:
            return {...state, productDisplayNum: action.payload}
        case SHOW_MORE_GOODS:
            return {...state, productDisplayNum: action.payload}
        case CHANGE_SORT_CATEGORY:
            return {...state, productSortCategory: action.payload}            
        default:
            return state    
    }
}


export const changeDisplayNumAction = (payload) => {
    return {type: CHANGE_DISPLAY_NUM, payload}
}

export const showAllGoodsAction = (payload) => {
    return {type: SHOW_ALL_GOODS, payload}
}
export const showMoreGoodsAction = (payload) => {
    return {type: SHOW_ALL_GOODS, payload}
}

export const changeSortCategoryAction = (payload) => {
    return {type: CHANGE_SORT_CATEGORY, payload}
}