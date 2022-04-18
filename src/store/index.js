import { configureStore } from "@reduxjs/toolkit";
import itemRequestSlice from "./slices/itemRequestSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
  reducer: {
    items: itemRequestSlice,
    orders: orderSlice,
    user: userSlice,
  },
  devTools: true,
});
