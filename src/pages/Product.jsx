import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(null);
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
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
          <div className="flex flex-row justify-between overflow-x-auto sm:overflow-y-auto sm:justify-between sm:flex-col sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                }}
                className="w-[24%] sm:w-full sm:mb-0 flex-shrink-0 cursor-pointer "
                src={item}
                key={index}
                alt="image-product"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-full" src={image} alt="image-cover-big" />
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
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    size === item ? "border-2 border-black" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 text-sm text-white bg-black active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500 ">
            <p className="">100% Original product.</p>
            <p className="">Cash on delivery is availabe on this product.</p>
            <p className="">Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------------ Description & Review Section ------------ */}
      <div className="mt-20">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">Description</b>
          <p className="px-5 py-3 text-sm border">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 p-6 text-sm text-gray-500 border">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            inventore natus odit delectus necessitatibus exercitationem tempora
            facilis distinctio odio eum deserunt, aut vero enim? Placeat cum
            quam consequuntur error unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            ipsam. Reprehenderit quae voluptates ex mollitia repellendus iste
            ipsa ea perferendis soluta et nulla, sunt veniam qui facilis impedit
            maiores omnis?
          </p>
        </div>
      </div>

      {/* -------- Display related product --------- */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
