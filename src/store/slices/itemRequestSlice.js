import { createSlice } from "@reduxjs/toolkit";
import { getItemRequests } from "../asyncThunk/requestThunk";

const itemRequestInitialState = {
  requests: [],
  loading: false,
  error: false,
  errorMessage: "",
};

const itemRequests = createSlice({
  name: "itemRequests",
  initialState: itemRequestInitialState,
  extraReducers: {
    [getItemRequests.fulfilled]: (state, action) => {
      return { loading: false, error: false, errorMessage: "", requests: action.payload };
    },
    [getItemRequests.pending]: (state, action) => {
      return { ...state, loading: true, error: false, errorMessage: "" };
    },
    [getItemRequests.rejected]: (state, action) => {
      const [errorMessages] = action.payload;
      const { messages } = errorMessages;
      return { ...state, loading: false, error: true, errorMessage: messages[0].message };
    },
  },
});
export default itemRequests.reducer;
