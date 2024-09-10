import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getTotalAmount, delivery_fee } = useContext(ShopContext);

  return <div></div>;
};

export default CartTotal;
