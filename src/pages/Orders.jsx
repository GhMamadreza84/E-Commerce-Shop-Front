import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="pt-16 border-t">
      <div className="text-2xl ">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
    </div>
  );
};

export default Orders;
