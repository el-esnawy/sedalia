import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getAllOrders = createAsyncThunk("orders/getOrders", async ({ start = 0, limit = 10 }, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.token;
    const result = await axios({
      method: "GET",
      url: `orders?includeCount=true&_start=${start}&_limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    // console.log(error.response);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
