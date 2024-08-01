import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaMapLocation,
  FaPhone,
  FaPlay,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FooterTopData } from "../../data/FooterTopImgData";
import FooterTopImgBox from "../FooterTopImgBox/FooterTopImgBox";

const Footer = () => {
  return (
    <div className="pt-12 text-white">
      {/* Footer Top Images */}
      <div className="w-[100%] h-[150px] bg-red-700 hidden md:grid grid-cols-4 md:grid-cols-8">
        {FooterTopData.map((image) => {
          return <FooterTopImgBox img={image} />;
        })}
      </div>
      {/* Footer Middle */}
      <div className="footer-middle-container container py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {/* Cafe Open Hour section*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ one: true, amount: 0.5 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-4 px-10 "
          >
            <h1 className="text-[20px] font-bold uppercase  mb-12">
              Opening Hours
            </h1>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">MONDAY</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-primaryDark">
                CLOSED
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">Tuesday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">Wednesday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[150px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">thursday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[140px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">friday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">saturday*</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[140px] text-center">
                12:00 - 1.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">sunday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <h1 className="hidden md:block text-[17px] font-bold uppercase pt-10  mb-12">
              THE LAST STANDARD POST
            </h1>

            <div className="flex w-full gap-1 py-[5px] items-center">
              <input
                type="text"
                placeholder=" Your Email"
                className="w-[100%] p-[10px] border-[1px] placeholder-primary text-[12px] border-primary bg-transparent"
              />
              <button className="w-[50px] h-[40px] bg-primary flex items-center justify-center">
                <FaPlay />
              </button>
            </div>
          </motion.div>
          {/* footer Post section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ one: true, amount: 0.5 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-6 pr-7"
          >
            <h1 className="text-[20px] font-bold uppercase mb-12">
              latest Posts
            </h1>
            <div className="pb-[10px] border-b-[1px] border-primary/20 ">
              <p className="hover:text-primary text-[14px] font-bold mb-[5px] cursor-pointer">
                EXPAND YOUR MIND, CHANGE EVERYTHING
              </p>
              <p className="text-primary text-[13px]">14.02.2025</p>
            </div>

            <div className="pb-[10px] border-b-[1px] border-primary/20 ">
              <p className="hover:text-primary text-[14px] font-bold mb-[5px] cursor-pointer">
                PLACES TO GET LOST
              </p>
              <p className="text-primary text-[13px]">14.02.2025</p>
            </div>

            <div className="pb-[10px] border-b-[1px] border-primary/20">
              <p className="hover:text-primary text-[14px] font-bold mb-[5px] cursor-pointer">
                LEWIS HOWES
              </p>
              <p className="text-primary text-[13px]">14.02.2025</p>
            </div>

            <div className="pb-[10px] border-b-[1px] border-primary/20">
              <p className="hover:text-primary text-[14px] font-bold mb-[5px] cursor-pointer">
                ELEVATE YOUR EXPECTATIONS
              </p>
              <p className="text-primary text-[13px]">14.02.2025</p>
            </div>
          </motion.div>
          {/* contact section */}
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
            <h1 className="text-[20px] font-bold uppercase mb-12">
              Contact US
            </h1>
            <div className="flex gap-1 flex-col">
              <p className="text-[14px] text-primary">cafena@gmail.com</p>
              <p className="text-[14px] text-gray-400">123-22-334-12345</p>
              <p className="text-[14px] text-gray-400">
                Raymond Boulevard 224,
              </p>
              <p className="text-[14px] text-gray-400">New York</p>
            </div>

            <h1 className="font-bold uppercase ">Cafena Coffee Shop</h1>
            <div className="flex gap-1 flex-col">
              <p className="text-[14px] text-gray-400">2606 Saints Alley</p>
              <p className="text-[14px] text-gray-400">Tampa, FL 33602</p>
            </div>

            <h1 className="font-bold uppercase ">Cafena Cafe</h1>
            <div className="flex gap-1 flex-col">
              <p className="text-[14px] text-gray-400">
                Raymond Boulevard 224,
              </p>
              <p className="text-[14px] text-gray-400">New York</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* copy right section */}
      <div className="flex justify-between items-center bg-black  w-[100%] px-12 pb-[30px] pt-[15px]">
        <p className="text-white text-center text-[14px]">
          &copy; code Interactive.
        </p>
        <div className="flex gap-6 items-center text-[20px]">
          <FaInstagram className="hover:text-primary hover:scale-110 duration-150" />
          <FaTwitter className="hover:text-primary hover:scale-110 duration-150" />
          <FaFacebook className="hover:text-primary hover:scale-110 duration-150" />
          <FaYoutube className="hover:text-primary hover:scale-110 duration-150" />
          <FaGooglePlusG className="hover:text-primary hover:scale-110 duration-150" />
          <FaLinkedinIn className="hover:text-primary hover:scale-110 duration-150" />
        </div>
        <p className="text-[14px]">2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
