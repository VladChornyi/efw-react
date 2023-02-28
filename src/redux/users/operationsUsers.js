import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";

export const fetchUsers = createAsyncThunk(
  "users/getAll",
  async (data, thunkAPI) => {
    try {
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
