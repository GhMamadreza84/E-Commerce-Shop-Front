import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
  }, []);

  return <div></div>;
};

export default BestSeller;
