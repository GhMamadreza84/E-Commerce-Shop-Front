import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  console.log(category)
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
    }
  }, []);
  return <div></div>;
};

export default RelatedProduct;
