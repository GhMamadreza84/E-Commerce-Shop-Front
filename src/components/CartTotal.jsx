import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getTotalAmount, delivery_fee } = useContext(ShopContext);

  return <div className="w-full">
     
  </div>;
};

export default CartTotal;
