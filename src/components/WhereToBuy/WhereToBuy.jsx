import React from "react";
import WorldImage from "../../assets/pngimg.com - world_map_PNG28.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form Section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy Our Products From Anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              className="input-style w-full lg:w-[150px]"
              placeholder="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              className="input-style w-full "
              placeholder="Country"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            src={WorldImage}
            alt=""
            className="w-full sm:w-[600px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
