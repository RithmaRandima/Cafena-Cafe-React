import React from "react";
import "./ProductBox.css";
import { FaClipboardList, FaStar } from "react-icons/fa6";

const ProductBox = (props) => {
  return (
    <div className="product-box w-[95%] md:w-[90%] mx-auto m-3">
      <div className="relative w-[100%] h-[230px] cursor-pointer">
        <img
          src={props.image}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
        <div className="absolute bg-primaryDark text-white py-2 font-bold px-5 uppercase tracking-[1px] text-[10px] top-[15px] left-[15px]  hover:scale-90 duration-200">
          Sale
        </div>
        <div className="product-box-overlay absolute w-[100%] h-[0px] opacity-0 bottom-0 left-0 bg-primary/70 flex items-center justify-center font-bold uppercase tracking-[2px] gap-3 text-white">
          <FaClipboardList size={19} />
          <p className="text-[11px] ">Add to Cart</p>
        </div>
      </div>
      <div className="space-y-2 mt-[15px] pl-3">
        <h1 className="uppercase font-extrabold text-white text-[18px]">
          {props.title}
        </h1>
        <div className="flex text-primary text-[11px] gap-1 pb-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex gap-3">
          <p className="text-primary line-through text-[20px]">
            ${props.oldPrice}
          </p>
          <p className="text-white text-[24px]">${props.newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
