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
      const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id)

      if(existingProductIndex !== -1){
        state.products[existingProductIndex].quantity += 1;
      } else{
        state.products.push({...action.payload, quantity: 1});
      }

      const newTotal = Number((state.totalPrice + action.payload.price).toFixed(2));
      state.totalPrice = newTotal;
    },
    remove: (state, action) => {
     
      // Get the position of the first occurence of the object to be deleted
      const pos = state.products.map( product => product.id).indexOf(action.payload.id);

      // Subtract the value of that item from the total price
      const newTotal = Number((state.totalPrice - (state.products[pos].price * state.products[pos].quantity)).toFixed(2));
      state.totalPrice = newTotal;
      console.log("Total Price:", state.totalPrice);

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