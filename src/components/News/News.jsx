import React from "react";
import NewsBox from "../NewsBox/NewsBox";
import { newsData } from "../../data/NewsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const News = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="w-[85%] mx-auto h-[100%] ">
      <Slider {...settings}>
        {newsData.map((news) => {
          return (
            <NewsBox
              key={news.id}
              image={news.image}
              title={news.title}
              author={news.author}
              date={news.date}
              event={news.event}
              message={news.message}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default News;
