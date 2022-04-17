import { configureStore } from "@reduxjs/toolkit";
import itemRequestSlice from "./slices/itemRequestSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
  reducer: {
    items: itemRequestSlice,
    user: userSlice,
  },
  devTools: true,
});
