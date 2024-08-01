import React from "react";
import banner from "../../assets/Hero-Background.jpg";
import appstore from "../../assets/1.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const AppBanner = () => {
  return (
    <div className="container bg-black my-14">
      <div
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        style={BannerStyle}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <p className=" text-center sm:px-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              assumenda enim magni nesciunt impedit natus. Aspernatur inventore
              dignissimos quo, quos distinctio provident. Laboriosam, dolores
              dolorum!
            </p>
            {/* img links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              className="flex justify-center items-center gap-4"
            >
              <a href="#">
                <img
                  src={appstore}
                  className="max-w-[150px] sm:max-max-[120px] md:max-max-[200px]"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src={appstore}
                  className="max-w-[150px] sm:max-max-[120px] md:max-max-[200px]"
                  alt=""
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
