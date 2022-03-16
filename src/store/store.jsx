import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { productInfoReducer } from './reducers/productInfoReducer';
import { sortReducer } from './reducers/sortReducer';

const rootReducer = combineReducers({
    productSortCategory: sortReducer,
    productDisplayNum: sortReducer,
    products: productReducer,
    totalPrice: productInfoReducer,
    totalAmount: productInfoReducer,    
    productInfo: productInfoReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));