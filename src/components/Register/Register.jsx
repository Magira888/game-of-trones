import {
  Box,
  Button,
  ButtonBase,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Register = () => {
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
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "600px",
            gap: "20px",
            color: "white",
            opacity: "0.7",
            borderRadius: "40px",
          }}
        >
          <Typography variant="h3" sx={{ mb: "30px", fontWeight: "700" }}>
            Register
          </Typography>
          <TextField
            label="UserName"
            sx={{ color: "white", backgroundColor: "white" }}
          />
          <TextField
            label="Password"
            sx={{ color: "white", backgroundColor: "white" }}
          />
          <TextField
            label="Email"
            sx={{ color: "white", backgroundColor: "white" }}
          />
          <Button
            variant="contained"
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
