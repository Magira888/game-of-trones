import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          backgroundImage:
            "url(https://p4.wallpaperbetter.com/wallpaper/707/958/482/hydra-game-of-thrones-sigils-house-targaryen-wallpaper-preview.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                fontSize: "250px",
                fontWeight: "bold",
                color: "#141414",
                textShadow:
                  "1px 0 1px white, 0 1px 1px white,-1px 0 1px white,0 -1px 1px white;",
              }}
            >
              404
            </Box>

            <Box
              sx={{
                fontSize: "72px",
                color: "#141414",
                textShadow:
                  "1px 0 1px white, 0 1px 1px white,-1px 0 1px white,0 -1px 1px white;",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Not Found Page
            </Box>
            <Stack
              spacing={2}
              direction="column"
              sx={{ width: "80%", alignItems: "center" }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  width: "80%",
                  background: "#141414",
                  border: "solid 1px white",
                }}
                onClick={() => navigate("/")}
              >
                Click here and Go HOME!
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
