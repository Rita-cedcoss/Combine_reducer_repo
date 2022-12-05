import { Cake_Order } from "./action"
import { Ice_Creame_Order } from "./action"
import { Chocolates_Order } from "./action"
//initial State 
const initialState={
    cakeQuantity:10,
    icecreamQuantity:15,
    chocolatesQuantity:20,
}
//Reducer For Buy Cake
export const cakeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Cake_Order:{
            return {...state, cakeQuantity:parseInt(state.cakeQuantity)-parseInt(action.value)
        }}
        default:
           return {...state}
      }
} 
//Reducer For Buy Ice_cream  
export const iceCreameReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Ice_Creame_Order:{
            console.log(state.icecreamQuantity)
            return{
                ...state, icecreamQuantity:parseInt(state.icecreamQuantity)-parseInt(action.value)
            }}
            default:return {...state}
    }
}
//Reducer For Buy Chocolates
export const chocolatesReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Chocolates_Order:{
            return{
                ...state, chocolatesQuantity:parseInt(state.chocolatesQuantity)-parseInt(action.value)
            }}
        default:return {...state}   
    }
}
