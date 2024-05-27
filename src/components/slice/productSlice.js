import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: 0,
  },
  reducers: {
    addToCart: (state,action) => {
        console.log(action);
    },

  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer