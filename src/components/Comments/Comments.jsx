import { Box, Button, CardMedia, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComm } from "../../comments/commentsSlice";
import { oneCharacter } from "../../comments/commentsAction.js";
import usePagination from "@mui/material/usePagination/usePagination";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { characters } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [comment, setComm] = useState([]);

  const comments = useSelector((state) => state.comments.comments);
  const { id } = useParams();

  useEffect(function setItemToStorage() {
    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", "[]");
    }
    let newData = JSON.parse(localStorage.getItem("comments"));
    dispatch(getComm(newData));
  }, []);

  function create() {
    let obj = [comment];
    let data = JSON.parse(localStorage.getItem("comments"));
    data.push(obj);
    localStorage.setItem("comments", JSON.stringify(data));
    dispatch(getComm(data));
  }

  useEffect(() => {
    dispatch(oneCharacter(id));
  }, [id]);

  return (
    <>
      <Box>
        <Box
          className="card"
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
            background: "rgb(0,0,0,0.7)",
            position: "relative",
            padding: "1.8rem",
            border: "4px solid gray",
            transition: "0.5s ease-out",
            overflow: "visible",
          }}
          // key={index}
        >
          <Box
            sx={{
              display: "flex",
              with: "100%",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ width: "20%" }}>
              <CardMedia
                sx={{ height: "100%", width: "100%" }}
                image="https://images6.alphacoders.com/380/380456.jpg"
                title="John Snow"
              />
            </Box>
            <Box
              sx={{
                width: "75%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <Box className="card-details">
                  <Typography
                    sx={{
                      fontSize: "2.5em",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    John Snow
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "2.5em",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Winterfell
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.2em", color: "white" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur voluptatem tenetur sunt, pariatur nemo aperiam!
                  Quibusdam rerum repellendus accusantium sed aliquam a rem esse
                  unde corrupti minima! Accusantium excepturi amet tenetur
                  nesciunt, fuga dolores accusamus molestiae laborum magni
                  error. Perspiciatis placeat accusamus incidunt cupiditate
                  odio, quidem doloremque, architecto ab, ratione enim tempore
                  fugit dolorem minima distinctio necessitatibus. Quo ipsa illo
                  laboriosam, iure et pariatur facere est minus eveniet, laborum
                  suscipit quas aut quos necessitatibus, neque adipisci hic
                  alias odit doloribus? Ullam veritatis rerum debitis quis sunt
                  magni totam. Vel itaque qui consectetur voluptatem facere iste
                  reiciendis! Veritatis quidem dolor perspiciatis!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ============== */}
      <Box sx={{ mt: "50px", backgroundColor: "#f0f0f0" }}>
        <Box sx={{ pt: "50px" }}>
          <TextField
            label="Добавьте комментарий"
            onChange={(e) => setComm(e.target.value)}
          />
          <Button
            onClick={create}
            variant="contained"
            sx={{ width: "150px", height: "55px" }}
          >
            Опубликовать
          </Button>
          {comments.map((elem) => (
            <Box>
              <h3 style={{ fontFamily: "Montserrat" }}>{elem}</h3>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Comments;
