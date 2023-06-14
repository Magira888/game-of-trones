import { Box, CardMedia, Divider } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Characters = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          border: "solid black 3px",
          borderRadius: "25px",
          overflow: "hidden",
          paddingRight: "10px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "30%",
            objectFit: "cover",
            objectPosition: "top",
            border: "solid grey 3px",
            borderRadius: "20px",
            // marginRight: "10px",
          }}
          image="https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontSize: "20px",
            textAlign: "start",
          }}
        >
          <Box sx={{ textAlign: "start", marginLeft: "10px" }}>
            Name: John Snow
          </Box>
          <Divider />
          <Box sx={{ textAlign: "start", marginLeft: "10px" }}>
            Castle: Winterfell
          </Box>
          <Divider />
          <Box
            sx={{ textAlign: "start", marginLeft: "10px", fontSize: "20px" }}
          >
            About: Bastard Bastard Bastard Bastard Bastard Bastard Bastard
          </Box>
          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <ThumbUpIcon />
            <ThumbDownIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Characters;
