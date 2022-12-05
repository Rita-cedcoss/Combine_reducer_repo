import { createStore } from "redux";
import combineReducer from "./CombineReducer";
//store for combine reducer
const store=createStore(combineReducer)
export default store;