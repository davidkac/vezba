import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state,action){
            const newItem = action.payload;
            const exitingItem = state.items.find((item) => item.id === newItem);
            state.totalQuantity++
            if(!exitingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    brand: newItem.brand,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                });
            } else {
                exitingItem.totalQuantity++
                exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state,action) {
            const prodId = action.payload;
            const exitingItem = state.items.find((item) => item.id === prodId);
            state.totalQuantity--
            if(exitingItem === 1){
            state.items =  state.items.filter((item) => item.id !== prodId);
            } else {
                exitingItem.quantity--;
                exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price
            }
        }
    }

})

export const cartActions = cartSlice.actions;

export default cartSlice;