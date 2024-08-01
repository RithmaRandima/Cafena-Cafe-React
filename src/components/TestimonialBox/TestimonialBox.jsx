import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

const TestimonialBox = (props) => {
  return (
    <div className="w-[90%] md:w-[99%] mx-auto h-[230px] text-white">
      <div className="text-center">
        <BiSolidQuoteRight className="text-primary text-[40px] mx-auto" />
        {/* message */}
        <p className="font-[400] text-[22px] my-3 ">{props.message}</p>
        {/* name */}
        <p className="text-primary mt-[24px] text-[20px] tracking-[-1px] uppercase font-bold">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialBox;
