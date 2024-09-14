import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/AboutUsImg-1.jpeg";
import img2 from "../../assets/App-Banner-1.jpeg";
import img3 from "../../assets/App-Banner-2.webp";
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
    <div className="container h-[100%h] md:h-[80vh] flex items-center justify-center md:mt-12 ">
      <div className=" w-[90%] h-[100%] md:h-[65vh]  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
        <div className="w-[100%] h-[100%] bg-primaryDark text-white px-4 md:px-0 pt-14 md:pl-10 relative mb-[50px]">
          <h1 className="text-[30px] font-bold mb-5 leading-[35px]">
            TRY THE BEST <br /> COFFEE IN THE CITY
          </h1>
          <p className="text-[15px] leading-[25px] md:w-[400px]">
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

        <div className="w-[100%] h-[40vh] md:h-[65vh] flex items-center md:pr-4">
          <div className="w-[100%] h-[45vh] md:h-[65vh] mx-auto">
            <Slider {...settings}>
              {rightImages.map((images) => {
                return (
                  <img
                    src={images}
                    className="w-[100%] h-[40vh] md:h-[65vh] object-cover"
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
