import React from "react";
import photo from "./pngegg.png";
import dragon from "./pngegg (1).png";
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
      }}
    >
      <img src={photo} alt="error" />
    </Box>
  );
};

export default Home;
