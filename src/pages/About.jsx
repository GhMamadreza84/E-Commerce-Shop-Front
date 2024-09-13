import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p className="">
            Glowmarket was born out a possion for innvation and a desire
            revolutionize the way people shop online. Our journey begon with a
            simple idea: tp provide a platform where confort of their homes.
          </p>
          <p className="">
            Since out inception . we've worked tirelessly to curate a diverse
            selection of high-quality products that coter to every taste and
            perference . Form fashion and beauty to electronics and home
            essentials , we offer on extensive collection sourced from trusted
            brounds and suppliers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
