import React from "react";
import img3 from "../image/03.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";

const DrifterDoppKit = () => {
  return (
    <div className=" bg-gray-200 my-10 py-28      ">
      <div className=" relative h-[320px]">
        <div className=" flex justify-end h-full items-center gap-5 text-xs max-sm:flex-col-reverse w-full">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="900"
            className="  max-sm:w-[80%] max-sm:mx-auto  w-[18%] h-full flex justify-center  items-center "
          >
            <p className=" text-xs   leading-4 text-gray-400  ">
              Field-tested from the peaks of the Cascades down to the desert
              floor of Joshua Tree , the Wilderness Rucksack was built to put on
              some serious miles for years to come .A comfortable dependable
              combination of 14oz salt & Pepper canvas ; premium wool felt, and
              Cambaara English bridle leather.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-easing="linear"
            data-aos-duration="900"
            className=" w-[60%] relative h-full max-sm:w-full max-sm:h-[65%]"
          >
            <img src={img3} className=" w-full h-full" alt="" />
            <div className=" max-sm:w-[90%] max-sm:right-[5%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm: items-center w-[95%]  absolute z-20 right-0 top-[38%] text-white ">
              <h1 className="  max-sm:tracking-[2px] text-3xl font-bold tracking-[12px] ">
                DRIFTER DOPP KIT
              </h1>
              <h1 className=" text-md tracking-[2px] max-sm:ms-0 max-sm:mt-0  ms-[10%] mt-2">
                NAVY SALT & PEPPER
              </h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-easing="linear"
          data-aos-duration="900"
          className=" absolute h-[60%] max-sm:w-[90%] max-sm:left-[5%]  max-sm:top-[5%] max-sm:h-[45%] top-[22%] left-[15.5%]  max-[790px]:left-[35%]  w-[45%] border border-[#B8A47F] "
        >
          <h1 className=" max-[900px]:tracking-[5px] absolute z-0  w-[44%]  top-[-8%] left-[10%] tracking-[12px] text-[2xl] font-bold ">
            {" "}
            NAVY SALT{" "}
          </h1>
          <div className=" absolute max-sm:bg-[#B8A47F] top-0 w-[39%] h-1  bg-slate-200 left-[10%] "></div>
        </div>
        <div className=" absolute max-sm:top-[49%]  max-sm:h-[6%]  bottom-[9%] left-[20%]  w-[10%] h-[15%] bg-gray-200   ">
          <div className=" h-full w-full flex justify-center items-center ">
            <IoIosArrowRoundDown className=" font-thin text-center text-5xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrifterDoppKit;
