import React from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* --------------Left  Side---------------- */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3 ">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address  "
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zipcode"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="Number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>
      {/* ------------Right Side---------- */}
      <div className="mt-8 ">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* --------------Payment Method Selection--------------- */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="stripe-logo" />
            </div>
            <div className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="razorpay-logo" />
            </div>
            <div className="flex items-center gap-3 p-2 px-3 border cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
              <p className="mx-4 text-sm font-medium text-gray-500i">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
