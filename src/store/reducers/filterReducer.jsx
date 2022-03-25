
// const initialState = {
//     season: "",
//     collection: "",
//     color: [],
//     size: [],
//     gender: ""
// }

// const ADD_SEASON = "ADD_SEASON";
// const ADD_COLLECTION = "ADD_COLLECTION";
// const ADD_COLOR = "ADD_COLOR";
// const ADD_SIZE = "ADD_SIZE";
// const ADD_GENDER = "ADD_GENDER";

// export const filterReducer = (state=initialState, action) =>{
//     switch(action.type){
//         case ADD_SEASON:
//             return {...state, season: action.payload }
//         case ADD_COLLECTION:
//             return {...state, collection: action.payload }
//         case ADD_COLOR:
//             return {...state, color: [...state.color, action.payload] }
//         case ADD_SIZE:
//             return {...state, size: [...state.size, action.payload] }
//         case ADD_GENDER:
//             return {...state, gender: action.payload }
//         default:
//             return state                
//     }
// }



// export const addSeasonAction = (payload) => {
//     return {type: ADD_SEASON, payload}
// }

// export const addColorAction = (payload) => {
//     return {type: ADD_COLOR, payload}
// }

// export const addGenderAction = (payload) => {
//     return {type: ADD_GENDER, payload}
// }

// export const addCollectionAction = (payload) => {
//     return {type: ADD_COLLECTION, payload}
// }

// export const addSizeAction = (payload) => {
//     return {type: ADD_SIZE, payload}
// }