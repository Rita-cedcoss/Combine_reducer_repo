export const Add_Value="Add_Value"
export const Substract_Value="Substract_Value"
export const Multiply_Value="Multiply_Value"
export const Division_Value="Division_Value"
export const Clear_Result="Clear_Result"
export const addition=(val1,val2)=>{
    return{
        type:Add_Value,
        value1:val1,
        value2:val2,
    }
}
export const subsTraction=(val1,val2)=>{
    return{
        type:Substract_Value,
        value1:val1,
        value2:val2,
    }
}
export const multiplication=(val1,val2)=>{
    return{
        type:Multiply_Value,
        value1:val1,
        value2:val2,
    }
}
export const division=(val1,val2)=>{
    return{
        type:Division_Value,
        value1:val1,
        value2:val2,
    }
}
export const clearResult=()=>{
 return{
    type:Clear_Result,
    
    
 }
}