import { combineReducers } from "redux";
import { addCounterReducer } from "./CounterReducers";
import { GetProductReducer } from "./ProductsReducer"


const combineReducer =combineReducers({
    addCounterReducer : addCounterReducer,
    GetProductReducer :GetProductReducer,
});
export default combineReducer;