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
    <div className="container my-16 space-y-4">
      {/* header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
          Choose one of our flavours
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          COFFEE BUILD <span className="text-primary">YOUR BASE.</span>
        </motion.h1>
      </div>
      {/* card Section */}
      <motion.div className="w-[100] %  h-[100%]">
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
