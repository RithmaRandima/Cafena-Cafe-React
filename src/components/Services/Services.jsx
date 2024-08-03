import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard/ServiceCard";
import { serviceCardData } from "../../data/ServiceCardData";

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
          Choose one of our flavours
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          COFFEE BUILD <span className="text-primary">YOUR BASE.</span>
        </motion.h1>
      </div>
      {/* card Section */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
