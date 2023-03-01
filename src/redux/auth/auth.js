import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../services/authApi";

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
