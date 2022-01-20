import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartQuantity: 0,    
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state,action) => {
            state.products.push(action.payload);
            state.cartQuantity = state.products.length;
            state.totalPrice += action.payload.price * action.payload.quantity;
            // state.totalPrice = state.products.reduce((total,item) => total + item.price * item.quantity);
          },
          updateProduct: (state, action) => {
            state.products[action.payload.duplicateItem].quantity += action.payload.quantity;
            state.cartQuantity = state.products.length;
            state.totalPrice += action.payload.price * action.payload.quantity;
          },
          removeProduct: (state, action) => {
            state.products.splice(action.payload.index, 1);
            state.cartQuantity = state.products.length;
            state.totalPrice -= action.payload.price;
          }
    }
})

export const { addProduct, removeProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer ;