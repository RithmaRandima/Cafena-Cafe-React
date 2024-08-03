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
            className="text-2xl font-semibold uppercase relative"
          >
            <span className="text-primary">Cafena</span>
          </motion.h1>
          {/* Menu Section */}
          <div onClick={() => setSidebar(!sidebar)}>
            {sidebar === true ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
