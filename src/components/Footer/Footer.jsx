import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FooterTopData } from "../../data/FooterTopImgData";
import FooterTopImgBox from "../FooterTopImgBox/FooterTopImgBox";

const Footer = () => {
  return (
    <div className="pt-12 text-white overflow-y-hidden">
      {/* Footer Top Images */}
      <div className="w-[100%] h-[150px] hidden md:grid grid-cols-4 md:grid-cols-8">
        {FooterTopData.map((image, i) => {
          return <FooterTopImgBox img={image} key={i} />;
        })}
      </div>
      {/* Footer Middle */}
      <div className="footer-middle-container container py-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {/* Cafe Open Hour section*/}
          <div className="space-y-4 px-10 ">
            <h1 className="text-[20px] font-bold uppercase  mb-6">
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
          </div>
          {/* footer Post section */}
          <div className="hidden md:block space-y-6 md:pr-7 text-center md:text-left w-[70%] md:w-[100%] mx-auto">
            <h1 className="text-[20px] font-bold uppercase mb-6">
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
          </div>
          {/* contact section */}
          <div className="space-y-6 px-10 text-center md:text-left w-[70%] md:w-[100%] mx-auto">
            <h1 className="text-[20px] font-bold uppercase mb-6">Contact US</h1>
            <div className="flex gap-1 flex-col">
              <p className="text-[14px] text-primary">cafena@gmail.com</p>
              <p className="text-[14px] text-gray-400">123-22-334-12345</p>
              <p className="text-[14px] text-gray-400">
                Raymond Boulevard 224,
              </p>
              <p className="text-[14px] text-gray-400">New York</p>
            </div>

            <h1 className="hidden md:block font-bold uppercase ">
              Cafena Coffee Shop
            </h1>
            <div className="hidden md:flex gap-1 flex-col">
              <p className="hidden md:block text-[14px] text-gray-400">
                2606 Saints Alley
              </p>
              <p className="hidden md:block text-[14px] text-gray-400">
                Tampa, FL 33602
              </p>
            </div>

            <h1 className="hidden md:block font-bold uppercase ">
              Cafena Cafe
            </h1>
            <div className="hidden md:flex gap-1 flex-col">
              <p className="hidden md:block text-[14px] text-gray-400">
                Raymond Boulevard 224,
              </p>
              <p className="text-[14px] text-gray-400">New York</p>
            </div>
          </div>
        </div>
      </div>
      {/* copy right section */}
      <div className="flex justify-between items-center bg-black  w-[100%] md:px-12 px-2 pb-[20px] pt-[15px]">
        <p className="hidden md:block text-white text-center text-[14px]">
          &copy; code Interactive.
        </p>
        <div className="flex gap-6 items-center text-[15px] md:text-[20px]">
          <FaInstagram className="hover:text-primary hover:scale-110 duration-150" />
          <FaTwitter className="hover:text-primary hover:scale-110 duration-150" />
          <FaFacebook className="hover:text-primary hover:scale-110 duration-150" />
          <FaYoutube className="hover:text-primary hover:scale-110 duration-150" />
          <FaGooglePlusG className="hover:text-primary hover:scale-110 duration-150" />
          <FaLinkedinIn className="hover:text-primary hover:scale-110 duration-150" />
        </div>
        <p className="text-[12px] tracking-[1px] md:text-[14px]">
          2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
