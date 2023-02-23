import { createSlice } from "@reduxjs/toolkit";
import boys from "../../data/boys.json";

const boysSlice = createSlice({
  name: "boys",
  initialState: { items: boys },
  reducers: {
    deleteAction(state, action) {
      // console.log(action)
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
  },
});

export const { deleteAction } = boysSlice.actions;
export const boysReducer = boysSlice.reducer;
