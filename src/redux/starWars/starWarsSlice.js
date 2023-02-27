import { createSlice } from "@reduxjs/toolkit";
import { getStarWars } from "./starWarsOperations";

const starWarsSlice = createSlice({
  name: "starWars",
  initialState: {
    starWarsData: null,
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStarWars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStarWars.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.starWarsData = action.payload;
      })
      .addCase(getStarWars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const starWarsReducer = starWarsSlice.reducer;
