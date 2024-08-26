import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);

  return <div></div>;
};

export default BestSeller;
