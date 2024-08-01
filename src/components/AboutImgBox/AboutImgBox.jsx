import React from "react";
import "./AboutImgBox.css";

const AboutImgBox = (props) => {
  return (
    <div className="about-img-box cursor-pointer w-[100%] mx-auto h-[260px] overflow-hidden relative">
      <img src={props.img} alt="" className="w-[100%] h-[100%] object-cover" />
      <div className="about-img-box-overlay absolute w-[100%] h-[0] bg-gradient-to-t opacity-0  bg-[#181717]/95 bottom-0 py-3 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[18px]  font-bold tracking-[1px] text-white uppercase">
            {props.title}
          </p>
          <p className="text-[10px] capitalize text-primary tracking-[3px] font-bold mb-2">
            {props.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutImgBox;
