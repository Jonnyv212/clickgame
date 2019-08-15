import getDataReducers from "./reducers/getDataReducers";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  dataStates: getDataReducers
});

export default createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));