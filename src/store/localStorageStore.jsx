import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { productInfoReducer } from './reducers/productInfoReducer';
import { sortReducer } from './reducers/sortReducer';
import { filterReducer } from './reducers/filterReducer';
import { catalogReducer } from './reducers/catalogReducer';
import { orderReducer } from './reducers/orderReducer';


const persistConfig = {
    key: 'root',
    storage: storage,
  }


const rootReducer = combineReducers({

    productSortCategory: sortReducer,
    productDisplayNum: sortReducer,
    sortedByPriceProducts: sortReducer,
    sortedByPopularProducts: sortReducer,
    sortedByNewProducts: sortReducer,
    sortedByAvailableProducts: sortReducer,
    sortedProducts: sortReducer,
    

    products: productInfoReducer,
    totalPrice: productInfoReducer,
    totalAmount: productInfoReducer,    
    productInfo: productInfoReducer,
    location: productInfoReducer,

    category: catalogReducer,
    description: catalogReducer,

    orderInfo: orderReducer,

    filterItems: filterReducer,
    filterInfo: filterReducer,
    filteredProducts: filterReducer,
    displayFilteredProducts: filterReducer
});

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store); 



