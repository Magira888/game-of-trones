import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHAR } from "../helpers/consts";

export const oneCharacter = createAsyncThunk(
  "@char/oneCharacter",
  async (id) => {
    let { data } = await axios.get(`${CHAR}/${id}`);
    return data;
  }
);
