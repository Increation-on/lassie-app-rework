
const initialState = {
    filterItems: []
}

const ADD_FILTERS = "ADD_FILTERS";

export const filterReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_FILTERS:
            return {...state, filterItems: [...action.payload] }   
        default:
            return state                
    }
}


export const addFiltersAction = (payload) =>{
    return {type: ADD_FILTERS, payload}
}