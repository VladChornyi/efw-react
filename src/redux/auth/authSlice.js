import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authOperation";

const initialState = {
  access_token: "string",
  token_type: "string",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.access_token = action.payload.access_token;
        state.token_type = action.payload.token_type;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
