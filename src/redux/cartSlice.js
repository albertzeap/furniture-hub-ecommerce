import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalPrice: 0
}


export const cartSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.totalPrice += action.payload.price;
      state.products.push(action.payload);
    },
    remove: (state, action) => {
     
      // Get the position of the first occurence of the object to be deleted
      const pos = state.products.map( product => product.id).indexOf(action.payload.id);

      // Subtract the value of that item from the total price
      state.totalPrice -= state.products[pos].price;

      // Remove it from the cart 
      state.products.splice(pos, 1);
    },

    empty: (state) => {
      state.products = []
      state.totalPrice = 0;
    }

  },
})

// Action creators are generated for each case reducer function
export const { add, remove, empty} = cartSlice.actions

export default cartSlice.reducer