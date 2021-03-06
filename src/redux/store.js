import enemyDataReducers from "./reducers/enemyDataReducers";
import playerDataReducers from "./reducers/playerDataReducers";
import combatReducers from "./reducers/combatReducers";

import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  enemyStates: enemyDataReducers,
  playerStates: playerDataReducers,
  combatStates: combatReducers
});

export default createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk))
);
