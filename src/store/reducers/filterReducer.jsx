
const initialState = {
    filterItems: [],
    filterInfo:[]
}

const ADD_FILTER_ITEMS = "ADD_FILTER_ITEMS";
const ADD_FILTER_INFO = "ADD_FILTER_INFO";

export const filterReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_FILTER_ITEMS:
            return {...state, filterItems: [...action.payload] }
        case ADD_FILTER_INFO:
            return {...state, filterInfo: [...state.filterInfo, action.payload]}       
        default:
            return state                
    }
}


export const addFiltersAction = (payload) =>{
    return {type: ADD_FILTER_ITEMS, payload}
}

export const addFilterInfoAction = (payload) =>{
    return {type: ADD_FILTER_INFO, payload }
}
