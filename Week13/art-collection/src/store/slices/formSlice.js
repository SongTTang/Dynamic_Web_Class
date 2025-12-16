import { createSlice } from "@reduxjs/toolkit";
import { addArt } from "./artSlice";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    price: 0,
  },
  reducers: {
    // we can make the assumption that the name we want to change or price will come in as action.payload
    changeName(state, action) {
      // toolkit uses immer, so we can directly mutate state inside of ouw action creators
      state.name = action.payload
    },
    changePrice(state, action) {
      state.price = action.payload
    },
  },
  extraReducers(builder){
    builder.addCase(addArt, (state, action) => {
      // we dont need anything from oaylaod for once!
      // we just need to clear out the fomr when we hit submit
      state.name = ''
      state.price = 0
    })
  }
})

export const formReducer = formSlice.reducer
export const {changeName, changePrice} = formSlice.actions // actionCreators