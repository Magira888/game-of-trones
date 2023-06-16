import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, CHAR } from "../helpers/consts";
import { setCharacters } from "./crudSlice";

export const read = createAsyncThunk("@products/read", async () => {
  let { data } = await axios(API);
  return data;
});

export const create = createAsyncThunk(
  "@products/create",
  async (obj, { dispatch }) => {
    await axios.post(API, obj);
    dispatch(read());
    return obj;
  }
);

export const deleter = createAsyncThunk(
  "@products/deleter",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(read());
  }
);

export const getOneProduct = createAsyncThunk(
  "@products/oneProduct",
  async (id) => {
    let { data } = await axios(`${API}/${id}`);
    return data;
  }
);

export const editer = createAsyncThunk(
  "@products/editer",
  async (editedObj, { dispatch }) => {
    await axios.patch(`${API}/${editedObj.id}`, editedObj);
    dispatch(read());
    return editedObj;
  }
);

export const getDatas = createAsyncThunk("@characters/getDatas", async () => {
  let { data } = await axios(CHAR);
  return data;
});
