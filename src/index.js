import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import {store} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/localStorageStore';
import './style/app.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);