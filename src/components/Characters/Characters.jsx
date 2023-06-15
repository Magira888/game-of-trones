import { Box, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Characters = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage:
            "url(https://fs.kinomania.ru/image/file/film_wallpaper/f/0a/f0ade77b43923b38237db569b016ba25.1920.1080.jpeg)",
        }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            color: "#2b68db",
            textAlign: "center",
            fontWeight: "bold",
            textShadow:
              "1px 0 1px white, 0 1px 1px white,-1px 0 1px white,0 -1px 1px white;",
          }}
        >
          Main Characters
        </Typography>
        <Card
          sx={{
            maxWidth: 345,
            border: "solid black 5px",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "rgb(0,0,0,0)",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg"
            title="green iguana"
          />
          <CardContent sx={{ backgroundColor: "rgb(255, 255, 255, 0.5)" }}>
            <Typography gutterBottom variant="h5" component="div">
              John Snow
            </Typography>
            <Typography variant="body2" color="black">
              Джон Сно́у — один из ключевых персонажей, незаконнорождённый
              (Бастард) сын лорда Эддарда Старка и неизвестной женщины,
              единокровный брат законных детей лорда Старка — Робба, Сансы,
              Брана, Арьи и Рикона.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Characters;
