// Create a general redux store, returns a list of products 
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {data} from './data';
import { productDetailsReducer } from './reducers/productDetailsReducer';
import { productListReducer } from  './reducers/productReducer';


// 1.Initial state
const initialState = {};
// 2. Reducer
const reducer = combineReducers({ 
  productList: productListReducer,
  productDetails: productDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 3.) create a store
const store = createStore(
  reducer, 
  initialState, 
  composeEnhancer(applyMiddleware(thunk))
);

export default store;