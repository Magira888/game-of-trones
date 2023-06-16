import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "25%",
  height: "400px",
  backgroundColor: "rgb(0,0,0,0.7)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  gap: "20px",
  color: "white",
  borderRadius: "40px",
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = useState(1);
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <Button onClick={handleOpen}>Add to cart</Button>
      {products.map((elem) => (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            <Typography>{elem.title}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Price: $ 55</Typography>
              <Typography>Type: toys</Typography>
              <img style={{ height: 140 }} src={elem.image} alt="" />
              <Box sx={{ display: "flex" }}>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </Button>
                <Box sx={{ width: "30px", textAlign: "center" }}>{counter}</Box>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </Button>
              </Box>
              <Typography>Sub price: $ 55</Typography>
            </Box>
            <Divider
              variant="white"
              sx={{ width: "90%", border: "solid 2px white" }}
            />
            <Typography sx={{ border: "solid 2px blue", boxShadow: 24 }}>
              TOTAL PRICE: $ 55
            </Typography>
          </Box>
        </Modal>
      ))}
    </>
  );
};

export default Cart;
