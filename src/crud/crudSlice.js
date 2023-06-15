import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  oneProduct: null,
};

export const crudSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const crudReducer = crudSlice.reducer;
export const crudAction = crudSlice.actions;
