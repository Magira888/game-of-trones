import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ShopFillter = () => {
  const products = useSelector((state) => state.products.products);
  let data = products.map((elem) => {
    let types = elem.type;
    return types;
  });

  function get() {
    data.filter((e) => e === "keychain");
  }

  return (
    <div>
      <Button onClick={get}>keychain</Button>
      <Button>shirts</Button>
      <Button>toys</Button>
      <Button>books</Button>
      <Button>other</Button>
    </div>
  );
};

export default ShopFillter;
