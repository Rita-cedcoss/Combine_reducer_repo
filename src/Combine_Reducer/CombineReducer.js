import { combineReducers } from "redux"
import { cakeReducer } from "./reducers"
import { iceCreameReducer } from "./reducers"
import { chocolatesReducer } from "./reducers"
//combine Reducer
const combineReducer=combineReducers({
    cakeReducer,
    iceCreameReducer,
    chocolatesReducer  
})
export default combineReducer
