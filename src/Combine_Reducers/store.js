import { createStore } from "redux";
import { combinereducer } from "./combineReducer";
const store=createStore(combinereducer)
export default store