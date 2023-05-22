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
    remove: (state) => {
      state.pop();
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove} = cartSlice.actions

export default cartSlice.reducer