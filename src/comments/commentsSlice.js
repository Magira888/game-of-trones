import { createSlice } from "@reduxjs/toolkit";
import { oneCharacter } from "./commentsAction.js";

const initialState = {
  comments: JSON.parse(localStorage.getItem("comments")),
  char: [],
};

export const commentsSlice = createSlice({
  name: "@comments",
  initialState,
  reducers: {
    getComm(state, action) {
      state.comments = action.payload;
    },
  },
  extraReducers: (b) => {
    b.addCase(oneCharacter.fulfilled, (state, action) => {
      state.char = action.payload;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { getComm } = commentsSlice.actions;
