import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return <div></div>;
};

export default ProductItem;
