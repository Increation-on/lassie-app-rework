import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { productInfoReducer } from './reducers/productInfoReducer';
import { sortReducer } from './reducers/sortReducer';
import {filterReducer } from './reducers/filterReducer'

const rootReducer = combineReducers({
    collection: filterReducer,
    season: filterReducer,
    color: filterReducer,
    size: filterReducer,
    gender: filterReducer,
    productSortCategory: sortReducer,
    productDisplayNum: sortReducer,
    products: productReducer,
    totalPrice: productInfoReducer,
    totalAmount: productInfoReducer,    
    productInfo: productInfoReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));