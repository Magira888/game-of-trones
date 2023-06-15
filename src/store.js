import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-slice";
import { crudReducer } from "./crud/crudSlice";

export const store = configureStore({
  reducer: {
    products: crudReducer,
    auth: authReducer,
  },
});
