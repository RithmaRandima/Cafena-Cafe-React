import React from "react";
import { motion } from "framer-motion";
import ProductBox from "../ProductBox/ProductBox";
import { productData } from "../../data/ProductData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 35000,
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
    <div className="container my-16 space-y-4">
      {/* header Section */}
      <div className="text-center max-w-lg mx-auto mb-[30px]">
        <p className="sub-text text-primary text-[20px]">
          Choose one of our flavours
        </p>
        <h1 className="text-[35px] font-bold text-white mt-2">
          COFFEE BUILD YOUR BASE.
        </h1>
        <hr className="w-[30%] mx-auto h-[3px] bg-primary rounded-sm mt-5" />
      </div>
      {/* card Section */}
      <motion.div className="w-[100%]   h-[100%]">
        <Slider {...settings}>
          {productData.map((product) => {
            return (
              <ProductBox
                key={product.id}
                image={product.image}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            );
          })}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Products;
