import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const userLogin = createAsyncThunk("users/userLogin", async ({ identifier, password }, thunkAPI) => {
  try {
    const result = await axios.post("/auth/local", {
      identifier,
      password,
    });

    return result.data;
  } catch (error) {
    // console.log(error.response);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
