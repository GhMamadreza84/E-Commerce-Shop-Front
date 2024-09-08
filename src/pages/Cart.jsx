import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
    </div>
  );
};

export default Cart;
