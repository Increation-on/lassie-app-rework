import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { basketReducer } from './reducers/basketReducer';

const rootReducer = combineReducers({
    products: productReducer,
    amount: basketReducer,
    totalPrice: basketReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));