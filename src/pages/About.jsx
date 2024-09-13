import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px] object-contain"
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
          <b className="text-gray-800 ">Our Mission </b>
          <p>
            Our mission at Glowmarket is to empower customers with choice ,
            convenience , and confidence. We're dedicated to providing someless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hossle-free ordering process,
            shopping has never easier.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Expentional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satification in our top priority.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
