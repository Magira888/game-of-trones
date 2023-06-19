import { configureStore } from "@reduxjs/toolkit";
import { crudReducer } from "./crud/crudSlice";
import { authReducer } from "./auth/auth-slice";
import { commentsReducer } from "./comments/commentsSlice";

export const store = configureStore({
  reducer: {
    products: crudReducer,
    auth: authReducer,
    comments: commentsReducer,
  },
});
