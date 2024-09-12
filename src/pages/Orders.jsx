import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="pt-16 border-t">
      <div className="text-2xl ">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between"
            key={index}
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:2-20" src={item.image[0]} alt="" />
              <div className="">
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg ">
                    {currency}
                    {item.price}
                  </p>
                  <p className="">Quantity: 1</p>
                  <p className="">Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, July, 2024</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
