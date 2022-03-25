import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { productInfoReducer } from './reducers/productInfoReducer';
import { sortReducer } from './reducers/sortReducer';
import {filterReducer } from './reducers/filterReducer';
import { catalogReducer } from './reducers/catalogReducer';


const persistConfig = {
    key: 'root',
    storage: storage,
  }


const rootReducer = combineReducers({
    // collection: filterReducer,
    // season: filterReducer,
    // color: filterReducer,
    // size: filterReducer,
    // gender: filterReducer,
    productSortCategory: sortReducer,
    productDisplayNum: sortReducer,
    products: productReducer,
    totalPrice: productInfoReducer,
    totalAmount: productInfoReducer,    
    productInfo: productInfoReducer,
    category: catalogReducer,
    description: catalogReducer,

});

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store); 



