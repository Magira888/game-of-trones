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
  width: "50%",
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

const Cart = ({ cart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [counter, setCounter] = useState(1);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* ============ начало  одного товара ============ */}

          <Divider
            variant="white"
            sx={{ width: "90%", border: "solid 2px white" }}
          />
          <Box
            sx={{
              display: "flex",
              width: "90%",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <img
                style={{ height: 140 }}
                src={
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                }
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
              <Typography>rpekmg</Typography>
              <Typography>Type: toys</Typography>
              <Typography>Price: $ 55</Typography>
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
                <Button size="small" disableElevation variant="contained">
                  -
                </Button>
                <Box
                  component="input"
                  sx={{ width: "30px", textAlign: "center" }}
                ></Box>
                <Button size="small" disableElevation variant="contained">
                  +
                </Button>
              </Box>
              <Button>Delete</Button>
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
              <Typography>$ 55</Typography>
            </Box>
          </Box>

          {/* ============ конец  одного товара ============ */}

          <Divider
            variant="white"
            sx={{ width: "90%", border: "solid 2px white" }}
          />
          <Typography sx={{ border: "solid 2px blue", boxShadow: 24 }}>
            TOTAL PRICE: $ 55
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
