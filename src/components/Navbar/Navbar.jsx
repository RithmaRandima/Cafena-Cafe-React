import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20 px-10">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl relative bg-white px-2 pb-3 pr-4 rounded-tr-full rounded-bl-full "
          >
            <span className="font-bold text-[20px] tracking-[2px] text-black">
              Cafena
            </span>
            <p className="absolute text-[10px] font-extrabold left-7 bottom-[-5px] text-primaryDark">
              Take The Risk
            </p>
          </motion.h1>
          {/* Menu Section */}
          <div onClick={() => setSidebar(!sidebar)}>
            {sidebar === true ? (
              <FaTimes className="text-[25px] cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-[25px] cursor-pointer " />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
