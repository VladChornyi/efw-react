import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operationsUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const usersReducer = usersSlice.reducer;
