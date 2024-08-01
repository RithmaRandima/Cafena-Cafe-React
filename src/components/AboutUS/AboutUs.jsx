import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Background, Parallax } from "react-parallax";
import BackgroundImage from "../../assets/AboutUs-Background.jpg";
import video from "../../assets/AboutUs-Video.mp4";
import AboutImgBox from "../AboutImgBox/AboutImgBox";
import { AboutImgData } from "../../data/AboutImgData";

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
    <div className="w-[100%] h-[100%] ">
      <Parallax
        strength={200}
        className="w-[100%] h-[100%] flex items-center justify-center"
      >
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img
            src={BackgroundImage}
            alt="fill murray"
            className="w-[100vw] h-[100%] object-cover"
          />
        </Background>

        <div className="w-[100vw] md:w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 items-center text-white py-10 ">
          <div className="w-[90%] mx-auto ml-[50px]">
            <p className="mb-2">About Us</p>
            <h1 className="font-bold text-[33px]">USE OUR APPLICATION.</h1>
            <hr className="my-6" />
            <p className="text-[15px] md:text-[17px] leading-[20px] md:leading-[25px] mb-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              praesentium ducimus dolorem provident aut aspernatur porro dolores
              expedita, aliquid vitae deleniti officia, aperiam nisi recusandae
              enim maiores error unde. Repellendus nulla voluptatum, eum nostrum
              delectus consequuntur molestias quae optio saepe, voluptatem
              dignissimos laboriosam deserunt ut illum similique ex, aspernatur
              architecto.
            </p>
            <button className="uppercase bg-primaryDark font-extrabold text-[12px] tracking-[2px] px-[20px] py-[15px] text-white">
              read More
            </button>
          </div>

          <div className=" w-[100%] h-[400px] flex items-center justify-center">
            <div className="w-[90%]  h-[330px]">
              <video
                autoPlay
                loop
                muted
                id="video"
                className="w-[100%] h-[100%] object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* about Img Container container */}
        <div className="w-[100vw] md:w-[100vw] h-[260px]">
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
