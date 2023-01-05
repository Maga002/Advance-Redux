import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalQuantity:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=> item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    quantity:1,
                    totalPrice:newItem.price,
                    price:newItem.price
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state,action){
           const itemId = action.payload
           const existingItem = state.items.find(item=> item.id === itemId.id)
           state.totalQuantity--
           
           if(existingItem.quantity === 1){
            state.items=state.items.filter(item=> item.id !== itemId.id)
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            existingItem.quantity--
           }else{
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            existingItem.quantity--
           }
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice