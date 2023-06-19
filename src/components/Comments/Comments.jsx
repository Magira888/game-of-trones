import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComm } from "../../comments/commentsSlice";

const Comments = () => {
  const { characters } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [comment, setComm] = useState([]);

  const comments = useSelector((state) => state.comments.comments);

  useEffect(function setItemToStorage() {
    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", "[]");
    }
    let newData = JSON.parse(localStorage.getItem("comments"));
    dispatch(getComm(newData));
  }, []);

  function create() {
    let obj = [comment];
    let data = JSON.parse(localStorage.getItem("comments"));
    data.push(obj);
    localStorage.setItem("comments", JSON.stringify(data));
  }

  return (
    <>
      <Box>
        <TextField
          label="Добавьте комментарий"
          onChange={(e) => setComm(e.target.value)}
        />
        <Button onClick={create}>Опубликовать</Button>
        {comments.map((elem) => (
          <h1>{elem}</h1>
        ))}
      </Box>
    </>
  );
};

export default Comments;
