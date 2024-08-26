import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p></p>
      </div>
    </div>
  );
};

export default BestSeller;
