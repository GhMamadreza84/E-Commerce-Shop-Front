import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(productData);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100 ">
      {/* ------------ Product Data ------------ */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* ------------ Product Images ------------ */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row ">
          <div className="flex flex-col justify-between overflow-x-auto sm:overflow-y-auto sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                }}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                src={item}
                key={index}
                alt="image-product"
              />
            ))}
          </div>
          <div className="">
            <img className="w-full h-auto" src={image} alt="image-cover-big" />
          </div>
        </div>
        {/* ---------- Product Info ----------- */}
        <div className="flex-1 ">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">{currency}{productData.price}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
