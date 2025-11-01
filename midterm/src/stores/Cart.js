import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  statusTab: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload
      const productId = product.id
      const indextProductId = (state.items).findIndex(item => item.productId === productId)
      
      if (indextProductId >= 0) {
        state.items[indextProductId].quantity += quantity
        state.items[indextProductId].product = product

      } else {
        state.items.push({ productId, quantity, product })

      }
      localStorage.setItem("carts", JSON.stringify(state.items))
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload
      const indexProductId = (state.items).findIndex(item => item.productId === productId)
      
      // ignore it if cant find
      if (indexProductId === -1) return

      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity
      } else {
        // delete state.items[indexProductId]
        state.items = (state.items).filter(item => item.productId !== productId)
      }
      localStorage.setItem("carts", JSON.stringify(state.items))
    },
    toggoleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true
      } else {
        state.statusTab = false
      }
    },
    clearCart(state) {
      state.items = []
      localStorage.removeItem("carts")   // or set to empty array
    }
  }
})

export const { addToCart, changeQuantity, toggoleStatusTab, clearCart } = cartSlice.actions
export default cartSlice.reducer