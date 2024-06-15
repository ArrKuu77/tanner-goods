import React from "react";

const TannerCollectionsNav = () => {
  return (
    <div className=" w-[90%] mx-auto">
      <div className=" h-[50px] max-sm:h-[20%] max-sm:my-1">
        <h1 className=" text-center tracking-[10px] font-bold text-3xl">
          TANNER COLLECTIONS
        </h1>
      </div>
      <div className=" w-full flex justify-end items-center gap-2">
        <div className=" w-[5%] max-sm:w-[10%] bg-black h-[1px]"></div>
        <span className=" w-[40%] bg-[#E0DACA] max-sm:w-[60%] font-bold text-sm text-[#655D4E]">
          {" "}
          NAVY SALT & PEPPER
        </span>
      </div>
    </div>
  );
};

export default TannerCollectionsNav;
