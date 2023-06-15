import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../../auth/auth-slice";
import { handleLogin } from "../../auth/auth-action";

const Login = () => {
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
    dispatch(handleLogin(obj));
    console.log(obj);
  };

  return (
    <>
      <Box width={"100%"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%",
            backgroundImage:
              "url(https://c4.wallpaperflare.com/wallpaper/492/536/946/game-of-thrones-tv-jon-snow-blue-eyes-wallpaper-preview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            }}
          >
            <Typography variant="h3" sx={{ mb: "30px", fontWeight: "700" }}>
              Login
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
              onClick={handleUser}
              variant="contained"
              sx={{
                width: "40%",
                height: "9%",
                border: "#520509",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
