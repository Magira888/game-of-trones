import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../crud/crudAction";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInput() {
    let obj = {
      title,
      price,
      image,
      type,
    };
    dispatch(create(obj));
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "100px",
          gap: "10px",
        }}
      >
        <Typography variant="h3" sx={{ mb: "50px", fontWeight: "600" }}>
          Add your product
        </Typography>
        <TextField label="title" onChange={(e) => setTitle(e.target.value)} />
        <TextField label="price" onChange={(e) => setPrice(e.target.value)} />
        <TextField label="image" onChange={(e) => setImage(e.target.value)} />
        <TextField label="type" onChange={(e) => setType(e.target.value)} />
        <Button
          variant="contained"
          onClick={() => {
            handleInput();
            navigate("/shop");
          }}
        >
          ADD
        </Button>
      </Box>
    </>
  );
};

export default Admin;