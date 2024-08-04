import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard/ServiceCard";
import { serviceCardData } from "../../data/ServiceCardData";

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header Section */}
      <div className="text-center max-w-lg mx-auto mb-[30px]">
        <p className="sub-text text-primary text-[20px]">
          Choose one of our flavours
        </p>
        <h1 className="text-[35px] font-bold text-white mt-2">
          COFFEE BUILD YOUR BASE.
        </h1>
        <hr className="w-[30%] mx-auto h-[3px] bg-primary rounded-sm mt-5" />
      </div>
      {/* card Section */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {serviceCardData.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
