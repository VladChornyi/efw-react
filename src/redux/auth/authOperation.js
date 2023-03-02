import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserData,
  login,
  privateHost,
  register,
  token,
} from "../../services/authApi";

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
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    try {
      const { access_token, token_type } = thunkAPI.getState().auth;
      if (!access_token) return thunkAPI.rejectWithValue("no token");
      token.set(access_token, token_type);
      // console.log(privateHost.headers)
      const response = await getUserData();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
