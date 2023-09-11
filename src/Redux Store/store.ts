import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux Slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})