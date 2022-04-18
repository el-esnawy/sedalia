import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../asyncThunk/orderThunk";

const ordersInitialState = {
  orders: [],
  loading: false,
  error: false,
  errorMessage: "",
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: ordersInitialState,
  extraReducers: {
    [getAllOrders.fulfilled]: (state, action) => {
      return { loading: false, error: false, errorMessage: "", orders: action.payload };
    },
    [getAllOrders.pending]: (state, action) => {
      return { ...state, loading: true, error: false, errorMessage: "" };
    },
    [getAllOrders.rejected]: (state, action) => {
      console.log(action);
      // console.log(action.payload);
      // const [errorMessages] = action.payload;
      // const { messages } = errorMessages;
      // return { ...state, loading: false, error: true, errorMessage: messages[0].message };
    },
  },
});
export default orderSlice.reducer;
