import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const defaultParams = {
  status: null,
  updatedAt: null,
  start: 0,
  limit: 10,
  sort: null,
  includeCount: true,
};
export const getAllOrders = createAsyncThunk("orders/getOrders", async (requestObject, thunkAPI) => {
  const { status, updatedAt, start, limit, sort, includeCount } = { ...defaultParams, ...requestObject };
  try {
    const token = thunkAPI.getState().user.token;
    const result = await axios({
      method: "GET",
      url: `/orders?includeCount=${includeCount}&_start=${start}&_limit=${limit}${status ? "&status=" + status : ""}${
        updatedAt ? "&updatedAt_gt=" + updatedAt : ""
      }${sort ? "&_sort=" + sort : ""}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// `/orders?includeCount=${includeCount}&_start=${start}&_limit=${limit}${status && "&status=" + status}`
