import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type initialStateProp = {
    cart: Products[],
}

const initialStateCart: initialStateProp = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",  // name of the reducer
    initialState: initialStateCart,
    reducers: {
        // ADD TO CART FUNCTION
        addToCart: (state: initialStateProp, action: PayloadAction<Products>) => {
            const productToBeAdded: Products = action.payload
            state.cart.push(productToBeAdded);
        },

        // REMOVE FROM CART FUNCTION
        removeFromCart: (state: initialStateProp, action: PayloadAction<Products["id"]>) => {
            const arrayAfterItemRemoved = state.cart.filter((item: Products) => {
                return item.id !== action.payload
            })
            state.cart = arrayAfterItemRemoved
        },

        // REMOVE ALL ITEMS
        removeAllItems: (state: initialStateProp) => {
            state.cart.splice(0, state.cart.length)
        },
    }
})

export const { addToCart, removeAllItems, removeFromCart } = cartSlice.actions

export default cartSlice.reducer