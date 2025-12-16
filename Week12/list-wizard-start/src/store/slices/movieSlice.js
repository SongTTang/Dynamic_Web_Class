import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    // these are action creators, they generate you action.type and revcieve payload from where you dispatched it
    // name +'/' + functionName
    // 'movie/addMovie'
    addMovie(state, action) {
      // remember we can be bad babies and directly mutate state becuase of toolkit's use of immer
      state.push(action.payload)
    },
    removeMovie(state, action) {
      // action.payload is our movie name string for these reducers
      // get the index of the movie we passed in via payload
      const index = state.indexOf(action.payload)
      // call splice with that index and remoe just the one movie
      state.splice(index, 1)
    },
    // reset(state, action){
    //   // NOPE! state = [] // this isn't updating state its reassigning a 
    //   // return a new empty array so that the reset registers
    //   return []
    // }
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return []
      })
    },
  },
})

export const movieReducer = movieSlice.reducer
export const {addMovie, removeMovie} = movieSlice.actions