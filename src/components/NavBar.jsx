import React from "react";
import LogoText from "./LogoText";

const NavBar = () => {
  return (
    <div id="Top" className=" w-[98%]  mx-auto max-sm:w-full ">
      <div className=" h-36  relative   flex ">
        <div
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-easing="linear"
          data-aos-duration="900"
          className=" max-[920px]:w-[15%] max-sm:w-[36%]  max- [920px]:w-[18%]  bg-[#B8A47F] w-[12%] h-full rounded-full flex justify-center items-center  "
        >
          <LogoText />
        </div>
        <div className=" h-full max-sm:w-[64%] w-[55%]  max-[920px]:w-[58%]    max-[920px]:w-[18%]mx-1 ">
          <div className="flex justify-evenly max-sm:flex-wrap items-center w-full h-full text-xs font-bold mt-[2%]">
            <div className=" max-sm:w-[65%] flex justify-around  items-center w-[20%]">
              <div className=" w-[30%] bg-[#B8A47F] p-[1px] "></div>
              <h1>NAVY SALT</h1>
            </div>
            <h1>VOYAGER</h1>
            <h1 className=" !text-white ">DRIFTER</h1>
            <h1 className=" !text-white ">COLLECTION</h1>
            <h1 className=" !text-white ">CONTACT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
