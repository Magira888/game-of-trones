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
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInput() {
    if (!title.trim() || !price.trim() || !image.trim() || !type.trim()) {
      setShowError(true);
      return;
    }
    let obj = {
      title,
      price,
      image,
      type,
    };
    dispatch(create(obj));
    navigate("/shop");
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url(https://images7.alphacoders.com/399/399339.jpg)",
          marginTop: "65px",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "400px",
            backgroundColor: "rgb(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "600px",
            gap: "20px",
            color: "white",
            borderRadius: "40px",
            mt: "100px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: "50px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Add your product
          </Typography>
          <TextField
            label="title"
            onChange={(e) => setTitle(e.target.value)}
            sx={{ backgroundColor: "#f0f0f0" }}
          />
          <TextField
            label="price"
            onChange={(e) => setPrice(e.target.value)}
            sx={{ backgroundColor: "#f0f0f0" }}
          />
          <TextField
            label="image"
            onChange={(e) => setImage(e.target.value)}
            sx={{ backgroundColor: "#f0f0f0" }}
          />
          <TextField
            label="type"
            onChange={(e) => setType(e.target.value)}
            sx={{ backgroundColor: "#f0f0f0" }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={() => {
              handleInput();
            }}
          >
            ADD
          </Button>
          {showError ? (
            <Typography variant="h6" sx={{ color: "red" }}>
              Заполните все поля
            </Typography>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Admin;
