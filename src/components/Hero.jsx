import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import heroImg from "../image/01.jpg";
import dayPackImg from "../image/02.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className=" mb-28">
      <div className=" w-full">
        <div className=" flex relative h-[450px] max-sm:h-[300px] justify-between items-center w-full">
          <div className="mt-[5%] max-sm:h-full max-sm:mt-0  max-[1000px]:mt-[10%]  w-[12%] items-center flex flex-col justify-between ">
            <div>
              <RiArrowDownSLine className=" text-4xl font-thin rotate-180 text-[#B8A47F] " />
            </div>
            <div className="text-3xl   font-thin">
              <RiArrowDownSLine />
            </div>
            <div className=" h-[30px] w-[1px] bg-black mb-2"></div>
            <h1 className=" text-4xl rounded-full  shadow-lg  my-4 border   p-1">
              01
            </h1>
            <h3 className=" text-[#9e9e9e]">02</h3>
            <h3 className=" text-[#9E9E9E]">03</h3>
            <h3 className=" text-[#9E9E9E]">04</h3>
            <h3 className=" text-[#9E9E9E]">05</h3>
          </div>
          <div className=" w-[60%] max-sm:w-[80%] h-full">
            <img className=" w-full h-full" src={heroImg} alt="" />
          </div>
          <div className=" absolute w-full max-sm:w-[80%] max-sm:ms-[20%] h-full ">
            <div className=" w-[65%] max-sm:w-full mx-auto h-full  flex flex-col gap-[5%] justify-center ">
              <div className=" ">
                <h3 className=" font-bold text-lg">Designed for utility</h3>
                <h1 className="  max-[920px]:tracking-[7px] max-[820px]:tracking-[2px] text-4xl font-bold leading-tight tracking-[12px]">
                  NAVY SALT & PEPPER
                </h1>
              </div>
              <div className=" flex items-center max-sm:w-full   justify-center w-[50%] gap-3  ">
                <div className=" w-[10%] h-[10%] bg-[#B8A47F] max-sm:bg-black max-sm:h-[20%]"></div>
                <span className=" text-[#B8A47F] max-sm:text-black font-bold max-sm:text-2xl ">
                  Gear UP{" "}
                </span>
                <span className=" -rotate-90 text-[#B8A47F] max-sm:text-black max-sm:text-4xl max-sm:font-bold ">
                  <RiArrowDownSLine />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          <div className=" relative h-[320px] ">
            <div className=" flex gap-5 items-center max-sm:block h-full max-sm:flex-col ">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-easing="linear"
                data-aos-duration="900"
                className=" w-[60%] max-sm:h-[65%]  relative h-full max-sm:w-full "
              >
                <img src={dayPackImg} className=" w-full h-full" alt="" />
                <div className="w-[55%] max-[870px]:w-[60%] max-[790px]:w-[70%] max-[530px]:w-[95%] max-[600px]:w-[85%]  max-[630px]:w-[80%]  max-[690px]:w-[75%] absolute z-20 right-0 top-[45%] text-white ">
                  <h1 className=" text-3xl font-bold max-[900px]:tracking-[0px] max-[990px]:tracking-[1px] tracking-[10px] max-[1085px]:tracking-[3px] max-[1200px]:tracking-[5px] ">
                    VOYAGER DAYPACK
                  </h1>
                  <h1 className=" text-end mt-2">NAVY SALT & PEPPER</h1>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-easing="linear"
                data-aos-duration="900"
                className=" w-[20%] max-sm:w-[80%] max-sm:mx-auto max-sm:h-[25%] h-full flex justify-center items-center"
              >
                <p className=" text-xs   leading-4 text-gray-400">
                  Whether your`re stomping around outdoors or traversing the
                  city, our Voyager Daypack was designed to be adaptable in all
                  environments.Compact , lightweight and a comfortable for
                  people of all sizes this silhouette is versatile enough
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="900"
              className=" absolute h-[60%] max-sm:w-[90%] max-sm:left-[5%]  max-sm:top-[5%] max-sm:h-[55%] top-[20%] left-[41%] max-[790px]:w-[50%] max-[790px]:left-[35%]  w-[45%] border border-[#B8A47F] "
            ></div>
            <div className=" absolute max-sm:top-[60%] max-sm:h-[6%] max-sm:right-[6%]  bottom-[0%] right-[20%]  w-[10%] h-[21%] bg-white   ">
              <div className=" h-full  w-full flex justify-center items-center ">
                <IoIosArrowRoundDown className=" font-thin text-center text-5xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
