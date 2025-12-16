import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    start: "",
    end: "",
    types: [],
  },

  reducers: {
    setStart(state, action) {
      state.start = action.payload;
    },

    setEnd(state, action) {
      state.end = action.payload;
    },

    toggleType(state, action) {
      const t = action.payload;
      if (state.types.includes(t)) {
        state.types = state.types.filter((x) => x !== t);
      } else {
        state.types.push(t);
      }
    },

    clearFilters(state) {
      state.start = "";
      state.end = "";
      state.types = [];
    },
  },
});

export const {
  setStart,
  setEnd,
  toggleType,
  clearFilters
} = filterSlice.actions;

export default filterSlice.reducer