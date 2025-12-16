import { createSlice, nanoid } from "@reduxjs/toolkit";

const drinksSlice = createSlice({
  name: "drinks",
  initialState: [],
  reducers: {
    addDrink: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(drink) {
        return {
          payload: {
            id: nanoid(),
            ...drink,
          },
        };
      },
    },
    removeDrink(state, action) {
      const id = action.payload;
      return state.filter(d => d.id !== id);
    }
  },
});

export const { addDrink, removeDrink } = drinksSlice.actions
export default drinksSlice.reducer
