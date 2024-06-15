import React, { useEffect, useState } from "react";
import TannerCollectionsNav from "./TannerCollectionsNav";
import TC01 from "../../image/Untitled-1.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import TC01_2 from "../../image/04.jpg";
import TC02 from "../../image/05.jpg";
import TC03 from "../../image/06.jpg";

import { CiCirclePlus } from "react-icons/ci";
import TannerCollectionsImgGroup from "./TannerCollectionsImgGroup";
import LogoText from "../LogoText";

const TannerCollections = () => {
  const createArray = (n) => Array.from({ length: n }, (_, i) => i + 1);
  const [num, setNum] = useState([]);
  useEffect(() => {
    setNum(createArray(6));
  }, []);
  return (
    <div className="  ">
      <TannerCollectionsNav />
      <div className=" w-[80%] mx-auto relative">
        <div className=" flex  items-center">
          <h1 className=" text-3xl gap-2 tracking-[5px] font-bold text-[#969696]">
            01
          </h1>{" "}
          <div className=" w-[5%] h-[1px] bg-black"></div>
        </div>
        <div className=" flex items-center max-sm:flex-col">
          <div className=" px-5 max-sm:px-0 w-[60%] max-sm:w-[90%] ">
            <img src={TC01} className=" w-full" alt="" />
          </div>
          <div className=" w-[29%] max-sm:w-[90%]  h-full flex flex-col justify-evenly gap-5">
            <div className=" w-[1px] h-[30px] bg-black"></div>
            <h1 className=" font-bold text-lg max-[1100px]:tracking-[5px] tracking-[10px]">
              NOMAD DUFFLE
            </h1>
            <p className=" text-xs text-gray-400 ">
              This bag can be carried by hand wom as a backpack or slung over a
              shoulder depending on your traveling needs
            </p>
            <h4 className=" text-sm font-bold flex  gap-10 items-center ">
              <span> Read More</span>
              <RiArrowDownSLine className=" text-base rotate rotate-[270deg]" />
            </h4>
            <div className=" flex max-sm:items-center max-sm:justify-evenly max-sm:w-[100%] w-[40%] justify-between items-start mt-5">
              <div className=" w-[1px] h-28  bg-black"></div>

              <div className="flex justify-center items-center flex-col relative  text-[#E2E2E2]   ">
                <p className=" tracking-[1.4px] text-[50%] absolute top-[-10.8%] left-[12.7%]">
                  PORTLAND ORE
                </p>
                <div className="relative">
                  <h1 className=" inline text-5xl absolute font-semibold left-[-20%] top-[-35%]">
                    T
                  </h1>
                  <h1 className=" inline text-2xl font-bold">ANNER</h1>
                </div>
                <div className=" w-full flex justify-end flex-col items-end">
                  <p className=" p-[1px] bg-[#E2E2E2] w-full "></p>
                </div>
                <h2 className=" text-end w-full text-2xl font-bold leading-[80%]">
                  GOODS
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-sm:w-[90%] max-sm:mt-1 max-sm:ms-0  w-[35%] ms-[10%] mt-[5%] max-[850px]:mt-0 max-[900px]:mt-0 relative">
          <div className=" w-[0.8%] max-sm:top-0  max-sm:w-[100%] max-sm:h-[1%] h-[50%] top-[-50%] left-[3%] absolute bg-black "></div>
          <div className=" text-center">
            <h1 className=" max-sm:tracking-[0px] max-[1080px]:tracking-[3px]  text-xl font-bold w-full tracking-[6px]">
              SPRUCE SALT & PEPPER
            </h1>
            <div className="bg-[#E1DAC9] h-5 w-full mt-[-3.5%]"></div>
          </div>
          <div className=" max-sm:ms-0 max-sm:w-full ms-[30%] flex justify-between gap-3 mt-3 flex-col  w-[70%]">
            <p className="   text-xs text-gray-400 ">
              We designed our Nomad Duffle as a versatile yet rugged piece of
              luggage that's just as comfortable outdoors as it is in an
              overhead compartment.
            </p>
            <div className=" flex gap-3 items-center">
              <span className=" text-[10px] font-bold ">READ MORE</span>
              <RiArrowDownSLine className=" text-base rotate rotate-[270deg]" />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          className=" max-sm:relative max-sm:w-[90%] max-sm:p-0 max-sm:ms-[5%] absolute bottom-[-5%]   max-[1100px]:bottom-[5%] max-[1100px]:gap-[0] max-[1040px]:bottom-[5%] w-[40%] right-[8%] p-3 bg-white"
        >
          <img src={TC01_2} className=" w-full" alt="" />
        </div>
      </div>
      <div className="mt-10 max-sm:mt-5">
        <div className=" w-full flex justify-center items-center ">
          <h1 className=" text-5xl text-[#959595] font-bold">02</h1>
        </div>
        <div className=" relative w-[60%] mx-auto max-sm:w-[90%] max-sm:ms-[5%] max-sm:mx-0">
          <div
            data-aos="zoom-out-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="900"
            className=" max-sm:relative max-sm:w-full absolute w-[50%] z-10 "
          >
            <img src={TC02} alt="" />
          </div>
          <div className=" w-full justify-end flex items-center">
            <div className=" max-sm:w-full w-[40%] flex flex-col gap-5 ">
              <h1 className=" text-xl font-bold tracking-[5px]">
                FIELD CAMERA BAG
              </h1>
              <p className="   text-[9px] max-sm:[90%] text-gray-400 ">
                Our field cammera bag is constructed from 14oz Salt & Pepper
                canvas and Combara Meridian English bridle leather. We've put
                these bags through the ringer in testing and we think you'll
                approve of the result .Our Camera Bag is fully lined and padded,
                and features an adjustable shoulder strap
              </p>
              <div className=" flex gap-3 items-center">
                <span className=" text-[10px] font-bold ">READ MORE</span>
                <RiArrowDownSLine className=" text-base rotate rotate-[270deg]" />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[60%] mx-auto max-sm:w-full">
          <div className=" w-full flex justify-end items-center">
            <h1 className=" text-5xl text-[#959595] font-bold">03</h1>
          </div>
          <div className=" flex justify-end items-center relative max-sm:flex-col-reverse max-sm:justify-center ">
            <div className=" max-sm:w-[90%] max-sm:ms-[5%] max-sm:left-0 absolute w-[30%] left-[13%] bottom-[20%] max-sm:relative">
              <h1 className=" max-sm:text-center  customShadow text-white text-end shadow-slate-600-500/50  text-4xl   tracking-[8px] font-bold  ">
                VOYAGER DAYPACK
              </h1>
            </div>
            <img
              src={TC03}
              className=" w-[60%] max-sm:w-[90%] max-sm:ms-[5%]"
              alt=""
            />
          </div>
        </div>

        <div className="  bg-zinc-100 w-[80%] max-sm:w-[90%] max-sm:ms-[5%] flex justify-between  ms-3 my-5">
          <div className=" w-[85%] flex justify-between max-sm:w-full max-sm:flex-wrap max-sm:justify-evenly max-sm:items-center max-sm:gap-1">
            {num?.map((n) => {
              return (
                <TannerCollectionsImgGroup
                  key={n}
                  imgSrc={`/src/image/${n}.jpg`}
                />
              );
            })}
          </div>
          <div className=" w-[12%] max-sm:hidden relative flex flex-col justify-between gap-3">
            <span className=" text-3xl tracking-wide h-full text-center  text-[#8A8479] font-bold ">
              G
            </span>
            <div className=" flex text-3xl  gap-5 text-[#8A8479] font-bold justify-evenly items-center">
              <span>o</span>
              <span>o</span>
            </div>
            <div className=" w-full bottom-0 opacity-25   bg-[#E3DCCC] h-[350px] absolute"></div>
          </div>
        </div>

        <div className=" bg-gray-300 py-5 mt-10">
          <div className=" w-[90%] h-full mx-auto flex justify-between max-sm:flex-wrap">
            <div className=" w-[7%] max-sm:w-full max-sm:flex max-sm:justify-center">
              <LogoText />
            </div>
            <div className=" max-sm:w-full max-sm:items-center max-sm:mt-1 w-[35%] text-xs font-semibold  flex justify-between items-start h-full">
              <div className="  h-[1px] bg-black w-[10%]"></div>
              <div className=" font-bold">FINDA</div>
              <div className=" text-gray-400">STORE</div>
              <div className=" text-gray-400">SIZING</div>
              <div className=" text-gray-400">CARE</div>
              <div className=" text-gray-400">WATCH</div>
            </div>
            <div className=" w-[12%] max-sm:w-full max-sm:my-1">
              <h1 className=" font-bold text-sm ">Sebazzo Ltd,Unit 3F2</h1>
              <h2 className="text-gray-400 text-xs ">
                Zetland House 5-25 Scrutton Street London EC2A 4HJ{" "}
              </h2>
            </div>
            <div className=" max-sm:w-full  max-sm:my-1 max-sm:flex-wrap w-[20%] flex flex-col justify-between gap-4">
              <h1 className="  text-sm font-bold"> EMAIL NEWSLETTERS</h1>
              <p className=" text-xs ">
                Sign up for new TANNER GOODS content, updates,surveys & office
              </p>
              <div>
                <input type="text" name="" id="" />
                <button className=" bg-black p-1 text-white">
                  <RiArrowDownSLine className=" rotate-[270deg]" />
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[90%] mx-auto flex gap-[5%] items-center max-sm:flex-wrap ">
            <div className=" max-sm:w-full">
              <h1 className=" text-md text-gray-400">
                @ TANNER GOODS PORTLAND ORE 2016
              </h1>
            </div>
            <div className=" max-sm:w-full max-sm:my-2 flex text-gray-400 justify-between items-center w-[30%]">
              <span>facebook</span>
              <div className=" text-black flex justify-between gap-3 w-[30%] items-center">
                <div className=" w-[50%] bg-black h-[1px]"></div>
                <span>pinterest</span>
              </div>
              <span> twitter </span>
              <span> instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TannerCollections;
