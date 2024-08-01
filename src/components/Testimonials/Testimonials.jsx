import React from "react";
import { Background, Parallax } from "react-parallax";
import BackgroundImage from "../../assets/pexels-ata-y-26648211-6800766.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../../data/TestimonialAndStaffData";
import TestimonialBox from "../TestimonialBox/TestimonialBox";

const Testimonials = () => {
  var settingsTestimonials = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="w-[100%] h-[75vh]">
      <Parallax
        strength={200}
        className="w-[100%] h-[100%] flex items-center justify-center p-2"
      >
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img
            src={BackgroundImage}
            alt="fill murray"
            className="w-[100vw] h-[100%] object-cover"
          />
        </Background>

        {/* testimonials container */}
        <div className="w-[90vw] md:w-[70vw] h-[100%] pb-7">
          <Slider {...settingsTestimonials}>
            {testimonialData.map((data) => {
              return (
                <TestimonialBox
                  key={data.id}
                  title={data.title}
                  img={data.img}
                  name={data.name}
                  city={data.city}
                  message={data.message}
                />
              );
            })}
          </Slider>
        </div>
      </Parallax>
    </div>
  );
};

export default Testimonials;
