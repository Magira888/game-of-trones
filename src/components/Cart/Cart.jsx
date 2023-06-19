import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { Image } from "@mui/icons-material";
import { calcSubPrice } from "../../helpers/functions";

const Cart = ({ selectedProductIds, products, onRemoveFromCart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = useState(1);

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  const handleRemove = (productId) => {
    onRemoveFromCart(productId);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((product) => {
      totalPrice += product.price * counter;
    });
    return totalPrice;
  };

  // ! ======================================================
  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      console.log(count);
      return product;
    });
  };
  changeProductCount();

  // ! ======================================================

  return (
    <>
      <Box>
        <Button onClick={handleOpen}>ADD TO CART</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid white",
              boxShadow: 24,
              p: 4,
              width: "50%",
              backgroundColor: "rgb(0,0,0,0.7)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "500px",
              gap: "20px",
              color: "white",
              borderRadius: "40px",
              overflow: "auto",
            }}
          >
            {" "}
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            {/* ============ начало  одного товара ============ */}
            <Box
              sx={{
                overflow: "auto",
                height: "100%",
                width: "100%",
              }}
            >
              {selectedProducts.map((product) => {
                console.log(product.id);
                return (
                  <Box
                    key={product.id}
                    sx={{
                      display: "flex",
                      width: "90%",
                      justifyContent: "space-around",
                      position: "relative",
                    }}
                  >
                    <Box>
                      <img
                        style={{ height: 140, width: 140 }}
                        src={product.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{product.title}</Typography>
                      <Typography>{product.type}</Typography>
                      <Typography>Price: $ {product.price}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Button
                          size="small"
                          disableElevation
                          variant="contained"
                          onClick={() => setCounter(counter - 1)}
                        >
                          -
                        </Button>
                        {/* ========= */}
                        <Box sx={{ width: "30px", textAlign: "center" }}>
                          {counter}
                        </Box>
                        {/* ========= */}
                        <Button
                          size="small"
                          disableElevation
                          variant="contained"
                          onClick={() => setCounter(counter + 1)}
                        >
                          +
                        </Button>
                      </Box>
                      <Button onClick={() => handleRemove(product.id)}>
                        Delete
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Sub price:</Typography>
                      <Typography>$ {product.price * counter}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            {/* ============ конец  одного товара ============ */}
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            <Typography sx={{ border: "solid 2px blue", boxShadow: 24 }}>
              TOTAL PRICE: $ {calculateTotalPrice()}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Cart;
