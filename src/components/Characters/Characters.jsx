import { Box, CardMedia, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import "./Characters.css";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "../../crud/crudAction";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDatas());
  }, []);

  const { characters } = useSelector((state) => state.products);

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(https://images5.alphacoders.com/403/403408.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "80px",
            color: "white",
            textAlign: "center",
            fontWeight: "700",
            mb: "100px",
            fontFamily: "Montserrat",
            opacity: "0.8",
          }}
        >
          Main Characters
        </Typography>

        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {/* ============= Карточки ============== */}
          {characters.map((elem, index) => (
            <Box
              className="card"
              sx={{
                width: "250px",
                height: "300px",
                borderRadius: "20px",
                background: "rgb(0,0,0,0.7)",
                position: "relative",
                padding: "1.8rem",
                border: "4px solid gray",
                transition: "0.5s ease-out",
                overflow: "visible",
              }}
              key={index}
            >
              <CardMedia
                sx={{ height: "80%" }}
                image={elem.photo}
                title="green iguana"
              />
              <Box className="card-details">
                <Typography
                  sx={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {elem.name}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1.1em",
                    color: "white",
                  }}
                >
                  {elem.Castle}
                </Typography>
              </Box>
              <Button
                className="card-button"
                sx={{
                  transform: "translate(-50%, 125%)",
                  width: "60%",
                  borderRadius: "1rem",
                  border: "none",
                  backgroundColor: "#008bf8",
                  color: "#fff",
                  fontSize: "1rem",
                  padding: ".5rem 1rem",
                  position: "absolute",
                  left: "50%",
                  bottom: "0",
                  opacity: "0",
                  transition: "0.3s ease-out",
                }}
                onClick={() => navigate(`/comments/${elem.id}`)}
              >
                Comments
              </Button>
            </Box>
          ))}
          {/* ============= Карточки ============== */}
        </Box>
      </Box>
    </>
  );
};

export default Characters;
