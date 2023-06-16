import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editer, getOneProduct, oneProduct } from "../../crud/crudAction";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { oneProduct } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
      setType(oneProduct.type);
    }
  }, [oneProduct]);

  function handleInput() {
    let editedObj = {
      title,
      price,
      image,
      type,
      id,
    };
    dispatch(editer(editedObj));
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
          Add your changes
        </Typography>
        <TextField
          label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          label="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleInput();
            navigate("/shop");
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default Edit;
