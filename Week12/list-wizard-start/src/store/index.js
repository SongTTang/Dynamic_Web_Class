import {configureStore, createSlice} from '@reduxjs/toolkit'
import { songsReducer, addSong, removeSong } from './slices/songSlice'
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice'
import { reset } from './actions'

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
})

export {store, addSong, removeSong, addMovie, removeMovie}

/*
const startingState = store.getState()
console.log(JSON.stringify(startingState))

store.dispatch({type: 'song/addSong', payload: 'Where is my mind?'})

console.log(JSON.stringify(store.getState()))

// view an action creator from slice
console.log(songSlice.actions.addSong('ceremony'))


// dispatch an action creator from the slice object
store.dispatch(songSlice.actions.addSong('ceremony'))

console.log(JSON.stringify(store.getState()))
*/