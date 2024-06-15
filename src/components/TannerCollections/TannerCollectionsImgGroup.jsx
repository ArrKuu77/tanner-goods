import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const TannerCollectionsImgGroup = ({ imgSrc }) => {
  return (
    <div className=" w-[13%] max-sm:w-[35%] flex justify-center items-center relative">
      <img src={imgSrc} alt="" />
      <div className=" w-full h-full -translate-x-2 opacity-0 duration-500 transition-all absolute backdrop-brightness-50  hover:opacity-100  hover:translate-x-0 ">
        <div className=" w-full h-full justify-center items-center flex">
          <CiCirclePlus className=" text-4xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default TannerCollectionsImgGroup;
