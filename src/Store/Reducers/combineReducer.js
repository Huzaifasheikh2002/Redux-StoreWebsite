import { combineReducers } from "redux";
import { addCounterReducer } from "./CounterReducers";


const combineReducer =combineReducers({
    addCounterReducer : addCounterReducer,
});
export default combineReducer;