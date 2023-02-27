import { createAsyncThunk } from "@reduxjs/toolkit";
import { starWarsDataFetch } from "../../services/starWars";

export const getStarWars = createAsyncThunk(
  "starWars/getByQuary",
  async (data, thunkAPI) => {
    try {
      const result = await starWarsDataFetch(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
