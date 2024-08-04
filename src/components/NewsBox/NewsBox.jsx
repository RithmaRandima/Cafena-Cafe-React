import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsBox = (props) => {
  return (
    <div className="news-box md:w-[95%] pb-5 overflow-hidden hover:scale-105 duration-300 hover:shadow-lg hover:shadow-black h-fit md:mt-20 mb-10 ">
      <div className="relative w-[100%] h-[230px] cursor-pointer">
        <img
          src={props.image}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="space-y-3 mt-[15px] px-3">
        <h1 className="uppercase font-extrabold text-white cursor-pointer text-[21px] hover:text-primary">
          {props.title}
        </h1>
        <div className="flex text-primary text-[14px] gap-2 pb-1">
          <p className="hover:text-white cursor-pointer">{props.author}</p>
          <p>/</p>
          <p>{props.event} </p>
          <p>/</p>
          <p>{props.date}</p>
        </div>
        <p className="text-gray-500 text-[15px] mb-10">{props.message}</p>
        <p className="text-primary text-[13px] flex items-center gap-2 uppercase font-bold mt-[20px]">
          Read more <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
};

export default NewsBox;
