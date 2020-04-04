import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import combineReducers from './reducers'
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(combineReducers,initialState, composeEnhancers(applyMiddleware(thunk)));
export default Store