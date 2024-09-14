import React from "react";
import img1 from "../../assets/Newsletter-1.avif";
import img2 from "../../assets/Newsletter-2.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="py-[60px]">
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
      {/* Content Section */}
      <div className="w-[80%] md:w-[95%] mx-auto h-[100%] gap-3 grid grid-cols-1 md:grid-cols-3">
        {/* box 01 */}
        <div className="product-box md:w-[95%] py-[30px]">
          <div className="relative w-[100%] h-[230px] cursor-pointer">
            <img src={img1} alt="" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="space-y-6 mt-[15px]">
            <h1 className="uppercase font-bold text-white cursor-pointer text-[21px] hover:text-primary">
              Place To Get Lost
            </h1>

            <p className="text-gray-500 text-[15px] mb-10 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              reprehenderit voluptates voluptate voluptatem autem cupiditate,
              placeat sequi maiores assumenda facilis quam alias nisi
              repudiandae odio totam reiciendis expedita amet.
            </p>
            <p className="text-primary text-[13px] flex items-center gap-2 uppercase font-bold tracking-[2px]">
              Read more <FaArrowRightLong />
            </p>
          </div>
        </div>
        {/* box 02 */}
        <div className="product-box md:w-[95%] py-[30px]">
          <div className="relative w-[100%] h-[230px] cursor-pointer">
            <img src={img2} alt="" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="space-y-6 mt-[15px]">
            <h1 className="uppercase font-bold text-white cursor-pointer text-[21px] hover:text-primary">
              Place To Get Lost
            </h1>

            <p className="text-gray-500 text-[15px] mb-10 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              reprehenderit voluptates voluptate voluptatem autem cupiditate,
              placeat sequi maiores assumenda facilis quam alias nisi
              repudiandae odio totam reiciendis expedita amet.
            </p>
            <p className="text-primary text-[13px] flex items-center gap-2 uppercase font-bold tracking-[2px]">
              Read more <FaArrowRightLong />
            </p>
          </div>
        </div>
        {/* box 03 */}
        <div className="hidden md:flex product-box product-box-three md:w-[95%]  p-[40px] border-2 border-white  justify-between flex-col text-white">
          <h1 className="text-[20px] font-bold uppercase  mb-4">
            Opening Hours
          </h1>

          <div className="h-[75%] flex flex-col justify-between">
            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">MONDAY</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-primaryDark">
                CLOSED
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">Tuesday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">Wednesday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[150px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">thursday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[140px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">friday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">saturday*</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[140px] text-center">
                12:00 - 1.00
              </p>
            </div>

            <div className="flex w-full items-end gap-1 py-[5px]">
              <p className="uppercase font-bold text-[12px]">sunday</p>
              <div className="h-[1px] bg-primary/20 w-[100%]"></div>
              <p className="uppercase font-bold text-[12px] text-gray-400 w-[130px] text-center">
                9:00 - 22.00
              </p>
            </div>
          </div>

          <h1 className="text-[23px] font-[100%] text-primary uppercase  mt-4">
            Call: +123 234 1234
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
