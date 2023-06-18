import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleter, read } from "../../crud/crudAction";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const addProdToCard = (elem) => {
    // console.log(elem);
    cart.push(elem);

    console.log(cart);
  };

  useEffect(() => {
    dispatch(read());
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Cart />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((elem, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={elem.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.price}
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => {
                        navigate(`/edit/${elem.id}`);
                      }}
                    >
                      ✏️
                    </Button>
                    <Button onClick={() => addProdToCard(elem)}>
                      AddToCard
                    </Button>
                    <Button onClick={() => dispatch(deleter(elem.id))}>
                      🗑️
                    </Button>
                  </Box>
                  <Box>
                    <Cart />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
