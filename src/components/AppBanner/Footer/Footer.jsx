import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapLocation,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company Details section*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ one: true, amount: 0.5 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Corders Cafe</h1>
            <p className="text-sm msx-w-[300px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              ad est veniam recusandae, voluptates laudantium consequatur quas
              labore eveniet fugit aliquam maxime excepturi iusto, accusamus,
              odio alias velit. Perspiciatis, iusto.
            </p>
            <div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhone />
                +1(123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Noida, Uttat Pradesh
              </p>
            </div>
          </motion.div>
          {/* footer link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ one: true, amount: 0.5 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first Col */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second Col */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ one: true, amount: 0.5 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold"> Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl mb-2 font-semibold">Payment Method</h1>
              <img src="" alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copy right section */}
        <p className="text-white text-center mt-8 pt-6 border-t-2">
          Copyright &copy; 2024 Rithma Randima. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
