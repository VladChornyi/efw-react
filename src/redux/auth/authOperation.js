import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, token } from "../../services/authApi";

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
      thunkAPI.dispatch(
        userLogin({ email: data.email, password: data.password })
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data, thunkAPI) => {
    try {
      const response = await login(data);
      token.set(response.access_token, response.token_type);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
