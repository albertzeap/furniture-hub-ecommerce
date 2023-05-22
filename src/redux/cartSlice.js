import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    remove: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove} = cartSlice.actions

export default cartSlice.reducer