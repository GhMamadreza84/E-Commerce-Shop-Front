import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  return <div></div>;
};

export default RelatedProduct;
