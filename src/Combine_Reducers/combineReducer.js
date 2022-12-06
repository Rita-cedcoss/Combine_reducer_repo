import { combineReducers } from "redux";
import { addReducer } from "./reducer";
import { subtractReducer } from "./reducer";
import { multiplytractReducer } from "./reducer";
import { divisionReducer } from "./reducer";
export const combinereducer=combineReducers(
    {
      addReducer,
      subtractReducer,
      multiplytractReducer,
      divisionReducer, 
    }
)