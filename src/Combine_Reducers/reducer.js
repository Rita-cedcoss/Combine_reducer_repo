import { Add_Value, Clear_Result } from "./action";
import { Substract_Value } from "./action";
import { Multiply_Value } from "./action";
import { Division_Value } from "./action";

const initialState={
    result1:0,
    result2:0,
    result3:0,
    result4:0,
    clearRes:0
}
export const addReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Add_Value:
        console.log(action.value1,action.value2);    
        return{
            ...state,
            result1:parseInt(action.value1)+parseInt(action.value2)
        }
        case Clear_Result:return{
            ...state,
            result1:0,
        }
        default:return {...state}
    }
}
export const subtractReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Substract_Value:
        console.log(action.value1,action.value2);    
        return{
            ...state,
            result2:parseInt(action.value1)-parseInt(action.value2)
        }
        case Clear_Result:return{
            ...state,
            result2:0,
        }
        default:return {...state}
    }
}
export const multiplytractReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Multiply_Value:
        console.log(action.value1,action.value2);    
        return{
            ...state,
            result3:parseInt(action.value1)*parseInt(action.value2)
        }
        case Clear_Result:return{
            ...state,
            result3:0,
        }
        default:return {...state}
    }
}
export const divisionReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case Division_Value:
        console.log(action.value1,action.value2);    
        return{
            ...state,
            result4:parseInt(action.value1)/parseInt(action.value2)
        }
        case Clear_Result:return{
            ...state,
            result4:0,
        }
        default:return {...state}
    }
}
// export const clearresultReducer=(state=initialState,action)=>{
//     switch(action.type)
//     {
//         case Clear_Result:
//             console.log(action.stateVal);
//             return{
//                 ...state,
//                result1:0,
                
//                 // result:0
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }