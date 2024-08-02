import React from "react";
import banner from "../../assets/Hero-Background.jpg";
import appstore from "../../assets/1.png";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/AboutUsImg-1.jpg";
import img2 from "../../assets/AboutUsImg-2.jpg";
import img3 from "../../assets/AboutUsImg-7.jpg";
import coffee from "../../assets/Coffee-cup.png";
import { FaArrowRightLong } from "react-icons/fa6";

const AppBanner = () => {
  const rightImages = [img1, img2, img3];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
    dots: false,
  };
  return (
    <div className="container h-[80vh] flex items-center justify-center mt-12 ">
      <div className=" w-[90%] h-[65vh] grid grid-cols-1 md:grid-cols-2">
        <div className="w-[100%] h-[100%] bg-primaryDark text-white pt-14 pl-10 relative">
          <h1 className="text-[30px] font-bold mb-5 leading-[35px]">
            TRY THE BEST <br /> COFFEE IN THE CITY
          </h1>
          <p className="text-[15px] leading-[25px] w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            inventore aliquam maxime fugiat non fuga nobis libero facilis optio
            aperiam labore quasi, minima consequuntur est quaeratporis dolore
            officia
          </p>

          <div className="flex items-center mt-6 gap-3 uppercase font-bold text-[14px] tracking-[1px]">
            Read More <FaArrowRightLong />
          </div>

          <img
            src={coffee}
            className="absolute w-[180px] bottom-[20px] right-[20px]"
            alt=""
          />
        </div>

        <div className="w-[100%] h-[65vh] flex items-center pr-4">
          <div className="w-[100%] h-[60vh]">
            <Slider {...settings}>
              {rightImages.map((images) => {
                return (
                  <img
                    src={images}
                    className="w-[100%] h-[60vh] object-cover"
                    alt=""
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
