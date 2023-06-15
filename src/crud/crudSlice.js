import { createSlice } from "@reduxjs/toolkit";
import { create, deleter, editer, getOneProduct, read } from "./crudAction";

const initialState = {
  products: [],
  oneProduct: null,
};

export const crudSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(read.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleter.fulfilled, (state, action) => {
        state.products = state.products.filter((e) => e.id !== action.payload);
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
      })
      .addCase(editer.fulfilled, (state, action) => {
        state.products.map((elem) => {
          return elem.id === action.payload.id
            ? (state.products = action.payload)
            : state.products;
        });
      });
  },
});

export const crudReducer = crudSlice.reducer;
// export const crudAction = crudSlice.actions;
