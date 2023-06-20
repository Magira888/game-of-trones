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
import { ADMIN } from "../../helpers/consts";
import { authListener } from "../../auth/auth-action";

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(authListener());
  }, []);

  const handleAddToCart = (product) => {
    const updatedProductIds = [...selectedProductIds, product.id];
    setSelectedProductIds(updatedProductIds);
    localStorage.setItem(
      "selectedProductIds",
      JSON.stringify(updatedProductIds)
    );
  };

  const handleRemoveFromCart = (productId) => {
    const updatedProductIds = selectedProductIds.filter(
      (id) => id !== productId
    );
    setSelectedProductIds(updatedProductIds);
    localStorage.setItem(
      "selectedProductIds",
      JSON.stringify(updatedProductIds)
    );
  };

  useEffect(() => {
    const storedProductIds =
      JSON.parse(localStorage.getItem("selectedProductIds")) || [];
    setSelectedProductIds(storedProductIds);
  }, []);

  useEffect(() => {
    dispatch(read());
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage:
            "url(https://images5.alphacoders.com/391/391646.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "65px",
        }}
      >
        <Cart
          selectedProductIds={selectedProductIds}
          products={products}
          onRemoveFromCart={handleRemoveFromCart}
        />
        <Box
          sx={{
            display: "flex",
            width: "95%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* мапание карточек начало */}
          {products.map((elem, index) => (
            <Box>
              <Box
                className="card"
                sx={{
                  width: "250px",
                  height: "350px",
                  borderRadius: "20px",
                  background: "rgb(0,0,0,0.7)",
                  position: "relative",
                  padding: "1.8rem",
                  border: "4px solid gray",
                  transition: "0.5s ease-out",
                  overflow: "visible",
                  margin: "10px",
                }}
                key={index}
              >
                <CardMedia
                  sx={{ height: "60%" }}
                  image={elem.image}
                  title="green iguana"
                />
                <Typography
                  sx={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {elem.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Type: {elem.type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Price: {elem.price} $
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  {user === ADMIN && (
                    <Button
                      sx={{ border: "solid teal 3px" }}
                      onClick={() => {
                        navigate(`/edit/${elem.id}`);
                      }}
                    >
                      ✏️
                    </Button>
                  )}
                  {user === ADMIN && (
                    <Button
                      sx={{ border: "solid teal 3px" }}
                      onClick={() => dispatch(deleter(elem.id))}
                    >
                      🗑️
                    </Button>
                  )}
                </Box>

                <Button
                  className="card-button"
                  sx={{
                    transform: "translate(-50%, 125%)",
                    width: "60%",
                    borderRadius: "1rem",
                    border: "none",
                    backgroundColor: "#008bf8",
                    color: "#fff",
                    fontSize: "1rem",
                    padding: ".5rem 1rem",
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    opacity: "0",
                    transition: "0.3s ease-out",
                  }}
                  onClick={() => handleAddToCart(elem)}
                >
                  ADD TO CART
                </Button>
              </Box>
            </Box>
          ))}
          {/* мапание карточек конец */}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
