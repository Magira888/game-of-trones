import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: JSON.parse(localStorage.getItem("comments")),
};

export const commentsSlice = createSlice({
  name: "@comments",
  initialState,
  reducers: {
    getComm(state, action) {
      state.comments = action.payload;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { getComm } = commentsSlice.actions;
