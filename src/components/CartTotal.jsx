import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { getSearchParamsForLocation } from "react-router-dom/dist/dom";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between ">
          {currency} {getSearchParamsForLocation}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
