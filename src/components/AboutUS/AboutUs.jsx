import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Background, Parallax } from "react-parallax";
import BackgroundImage from "../../assets/AboutUs-Background.jpeg";
import video from "../../assets/AboutUs-Video.mp4";
import AboutImgBox from "../AboutImgBox/AboutImgBox";
import { AboutImgData } from "../../data/AboutImgData";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutUs = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <Parallax
        strength={200}
        blur={100}
        className="w-[100%] h-[100%] flex items-center justify-center"
      >
        <Background className="custom-bg w-[100vw] h-[200vh] md:h-[100%]">
          <img
            src={BackgroundImage}
            alt="fill murray"
            className="w-[100vw] h-[100%] object-cover"
          />
        </Background>

        <div className="w-[100vw] md:w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 items-center text-white py-10 ">
          <div className="w-[90%] mx-auto md:ml-[50px]">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="mb-2 text-[18px] text-primary font-bold tracking-[2px]"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="font-bold text-[26px] tmd:ext-[33px] mb-6"
            >
              USE OUR APPLICATION.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-[15px] md:text-[17px] leading-[20px] md:leading-[25px] mb-[20px] text-justify"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              praesentium ducimus dolorem provident aut aspernatur porro dolores
              expedita, aliquid vitae deleniti officia, aperiam nisi recusandae
              enim maiores error unde. Repellendus nulla voluptatum, eum nostrum
              delectus consequuntur molestias quae optio saepe, voluptatem
              dignissimos
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="uppercase bg-primaryDark font-extrabold text-[12px] tracking-[2px] px-[20px] py-[10px] text-white hover:scale-90 duration-200"
            >
              read More
            </motion.button>
          </div>

          <div className=" w-[100%] h-[400px] flex items-center justify-center">
            <div className="relative w-[90%]  h-[330px]">
              <video
                autoPlay
                loop
                muted
                id="video"
                className="w-[100%] h-[100%] object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="absolute left-[50%] top-[50%] text-primary bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center   hover:scale-90 translate-x-[-50%] translate-y-[-50%] duration-200">
                <button>
                  <FaPlay />
                </button>
              </div>
              <div className="absolute w-[4px] h-[80%] rounded-[50px] bg-white left-[20px] top-[50%] translate-y-[-50%] "></div>
              <div className="absolute w-[90%] h-[4px] rounded-[50px] bg-white bottom-[20px] left-[50%] translate-x-[-50%]"></div>
            </div>
          </div>
        </div>

        {/* about Img Container container */}
        <div className="w-[100vw] md:w-[100vw] h-[240px]">
          <Slider {...settings}>
            {AboutImgData.map((data) => {
              return (
                <AboutImgBox
                  img={data.img}
                  key={data.id}
                  title={data.title}
                  subTitle={data.subTitle}
                />
              );
            })}
          </Slider>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutUs;
