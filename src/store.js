import { configureStore } from "@reduxjs/toolkit";
import { crudReducer } from "./crud/crudSlice";
import { authReducer } from "./auth/auth-slice";
import { cartReducer } from "./store/cartSlice";

export const store = configureStore({
  reducer: {
    products: crudReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
