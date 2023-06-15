import {
  Box,
  Button,
  ButtonBase,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSignup } from "../../auth/auth-action";
import { HandymanOutlined, Opacity } from "@mui/icons-material";
import { setEmail, setPassword } from "../../auth/auth-slice";

const Register = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleSignup(obj));
  };

  return (
    <Box width={"100%"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "url(https://searchthisweb.com/wallpaper/thumb1000/main1000_dragon_2560x1440_njfnx.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
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
          }}
        >
          <Typography variant="h3" sx={{ mb: "30px", fontWeight: "700" }}>
            Register
          </Typography>
          <TextField
            label="Password"
            sx={{ color: "white", backgroundColor: "white" }}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <TextField
            label="Email"
            sx={{ color: "white", backgroundColor: "white" }}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <Button
            variant="contained"
            onClick={handleUser}
            sx={{
              backgroundColor: "#520509",
              width: "40%",
              height: "9%",
              border: "#520509",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
