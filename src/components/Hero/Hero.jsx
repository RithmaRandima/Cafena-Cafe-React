import React, { useState } from "react";
import BgImage from "../../assets/janko-ferlic-h9Iq22JJlGk-unsplash.jpg";
import CoffeeMain from "../../assets/vecteezy_coffee-coffee-cup-coffee-cup-png-coffee-cup-clipart_29283851.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative h-[100vh] overflow-hidden w-full">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center h-[100vh]">
            {/* Text Content Section */}
            <div className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14 md:mt-[70px] md:ml-[80px]"
              >
                Coffee Haven
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-[22px]">
                    Start Your Day With Your Black Coffee
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    vel nemo sint in molestiae sunt. Suscipit mollitia
                    perferendis eveniet, recusandae placeat magni accusantium
                    earum, voluptatem dolorem aperiam beatae expedita rem!
                  </h1>
                </div>
                <div className="absolute -bottom-7 -left-10 w-[320px] h-[150px] bg-white/20"></div>
              </motion.div>
            </div>
            {/* Hero Image Section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                src={CoffeeMain}
                className="relative z-40 h-[300px]  md:h-[500px] img-shadow object-contain"
                alt=""
              />
              {/* Ring Circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="absolute h-[180px] w-[180px] top-20 right-[10px]  z-10 border-[20px] border-primary rounded-full"
              ></motion.div>
              {/* big Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="absolute top-[10px] left-[450px] z-[1]"
              >
                <h1 className="text-[65px] scale-150 font-bold text-white/40 leading-none">
                  Rest Relax Review
                </h1>
              </motion.div>
            </div>
            {/* Third Text Section  */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.9,
              }}
              className=" text-lightOrange mt-[100px] md:mt-[350px] p-4 space-y-28"
            >
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black LifeStyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    vel nemo sint in molestiae sunt. Suscipit mollitia
                    perferendis eveniet, recusandae placeat magni accusantium
                    earum, voluptatem dolorem aperiam beatae expedita rem!
                  </h1>
                </div>
                <div className="absolute -top-6 -right-5 w-[350px] h-[180px] bg-black"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar Menu Section */}
        {sidebar && (
          <div className="overflow-hidden absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to bg-primaryDark/80 backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* Social Icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
