import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Cart = ({ selectedProductIds, products, onRemoveFromCart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Создаем состояние для хранения счетчиков каждого товара
  const [counters, setCounters] = useState({});

  const handleIncrement = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }));
  };

  const handleRemove = (productId) => {
    onRemoveFromCart(productId);
  };

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  const calculateSubPrice = (product, counter) => {
    return product.price * counter;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((product) => {
      const counter = counters[product.id] || 0;
      totalPrice += calculateSubPrice(product, counter);
    });
    return totalPrice;
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <Box>
        <Box>
          <IconButton aria-label="cart" onClick={handleOpen}>
            <StyledBadge
              badgeContent={selectedProducts.length}
              color="secondary"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Box>

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
              height: "600px",
              gap: "20px",
              color: "white",
              borderRadius: "40px",
              overflow: "auto",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "white", fontSize: "large" }}
            >
              YOURS CART
            </Typography>
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            <Box sx={{ overflow: "auto", width: "100%" }}>
              {selectedProducts.map((product) => {
                const counter = counters[product.id] || 0;
                // console.log(selectedProducts.length);
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
                        style={{ height: 100, width: 100 }}
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
                          onClick={() => handleDecrement(product.id)}
                        >
                          -
                        </Button>
                        <Box
                          sx={{
                            width: "30px",
                            textAlign: "center",
                            marginTop: "1px",
                            fontSize: "1.5em",
                          }}
                        >
                          {counter}
                        </Box>
                        <Button
                          size="small"
                          disableElevation
                          variant="contained"
                          onClick={() => handleIncrement(product.id)}
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
                      <Typography>
                        $ {calculateSubPrice(product, counter)}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "70%",
              }}
            >
              <Button sx={{ fontSize: "1.1em", color: "white" }}>
                TOTAL ITEMS: {selectedProducts.length}
              </Button>
              <Button sx={{ fontSize: "1.1em", color: "white" }}>
                TOTAL PRICE: $ {calculateTotalPrice()}
              </Button>
              <Button sx={{ fontSize: "1.1em" }} variant="contained">
                FORM TO PAY
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Cart;
