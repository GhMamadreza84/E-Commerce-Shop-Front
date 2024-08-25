import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero Left Side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141] ">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm font-medium md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="text-3xl leading-relaxed prata-regular prata sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
            <p className="w-8 md:2-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* HERO RIGHT SIDE */}
      <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="hero_img" />
    </div>
  );
};

export default Hero;
