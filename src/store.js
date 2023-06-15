import { configureStore } from "@reduxjs/toolkit";
import { crudReducer } from "./crud/crudSlice";

export const store = configureStore({
  reducer: {
    products: crudReducer,
  },
});
