import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ image, title, subtitle }) => {
  return (
    <div className=" md:w-[100%] w-[90%] mx-auto text-center p-4 space-y-6">
      <img
        src={image}
        alt=""
        className="img-shadow2  max-w-[200px]  mx-auto hover:scale-110 duration-300 cursor-pointer"
      />
      <div className="space-y-2">
        <h1 className="text-[18px] uppercase font-extrabold text-primary">
          {title}
        </h1>
        <h1 className="text-white text-[15px] font-[100]">{subtitle}</h1>
      </div>
    </div>
  );
};

export default ServiceCard;
