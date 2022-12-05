import { type } from "@testing-library/user-event/dist/type"

export const Cake_Order="Cake_Order"
export const Ice_Creame_Order="Ice_Creame_Order"
export const Chocolates_Order="Chocolates_Order"
// Action for Buy Cake
export  const cakeOrder=(inpValue)=>{
    return{
      type:Cake_Order,
      value:inpValue
    }
}
//Action For Buy IceCreame
export const iceCreameOrder=(inpValue)=>{
    return{
        type:Ice_Creame_Order,
        value:inpValue
    }
}
//Action For Buy Chocolates
export const chocolatesOrder=(inpValue)=>{
    return{
         type:Chocolates_Order,
         value:inpValue
    }
}