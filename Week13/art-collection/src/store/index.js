import { configureStore } from "@reduxjs/toolkit";
import {
  artReducer,
  addArt,
  removeArt,
  changeSearchTerm
} from './slices/artSlice'
import { formReducer, changeName, changePrice } from "./slices/formSlice";

// combine slices into store
const store = configureStore({
  reducer: {
    art: artReducer,
    form: formReducer,
  },
})

console.log(store.getState())

// this is the ONLY access point for all import from store
export { store, changeName, changePrice, addArt, removeArt, changeSearchTerm }