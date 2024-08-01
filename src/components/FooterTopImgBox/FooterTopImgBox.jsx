import React from "react";
import { FaInstagram } from "react-icons/fa6";

const FooterTopImgBox = (props) => {
  return (
    <div className="w-[100%] h-[100%] relative bg-black">
      <img src={props.img} className="w-[100%] h-[100%] object-cover" alt="" />
      <FaInstagram className="absolute top-[10px] right-[10px] text-[20px]" />
    </div>
  );
};

export default FooterTopImgBox;
