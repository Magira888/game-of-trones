import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleter, read } from "../../crud/crudAction";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import ShopFillter from "./ShopFillter";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const addProdToCard = (elem) => {
    setCart(elem);
    console.log(cart);
  };

  useEffect(() => {
    dispatch(read());
  }, []);

  return (
    <>
      <ShopFillter />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((elem, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={elem.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.price}
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => {
                        navigate(`/edit/${elem.id}`);
                      }}
                    >
                      ✏️
                    </Button>

                    <Button onClick={() => dispatch(deleter(elem.id))}>
                      🗑️
                    </Button>
                  </Box>
                  <Button onClick={() => addProdToCard(elem)}>
                    <Cart cart={cart} />
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
