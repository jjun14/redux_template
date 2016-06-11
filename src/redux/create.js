import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/reducer';

const initialState = {};

export default function createStore(){
  const store = _createStore(rootReducer, initialState);

  if(module.hot){
    module.hot.accept('./modules/reducer', () => {
       const nextRootReducer = require('./modules/reducer').default;
       store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}