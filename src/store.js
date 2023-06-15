import { configureStore } from "@reduxjs/toolkit";
import { crudReducer } from "./crud/crudSlice";
import { authReducer } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    products: crudReducer,
    auth: authReducer,
  },
});
