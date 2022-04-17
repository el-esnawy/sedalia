import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getItemRequests = createAsyncThunk("items/getRequests", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.token;
    const result = await axios({
      method: "GET",
      url: "/item-requests",
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
