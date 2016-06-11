import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers ({
  // other reducers go here
  routing: routerReducer
})

export default rootReducer;
