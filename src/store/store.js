import { configureStore } from "@reduxjs/toolkit";
import AddReducer from "./reducers/add";

export const store = configureStore({
  reducer: {
    add: AddReducer,
  },
});
