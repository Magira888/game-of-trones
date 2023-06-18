import React from "react";
import photo from "./pngegg.png";
import { Box } from "@mui/material";
import "./home.js";
import "./home.css";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundImage: "url(https://images5.alphacoders.com/314/314903.jpg)",
        height: "120vh",
      }}
    >
      <img src={photo} alt="error" style={{ marginBottom: "200px" }} />
    </Box>
  );
};

export default Home;
