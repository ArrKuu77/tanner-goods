import React from "react";

const LogoText = () => {
  return (
    <div className="flex justify-center items-center flex-col relative mt-5   ">
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
        <p className=" p-[1px] bg-black w-full "></p>
      </div>
      <h2 className=" text-end w-full text-2xl font-bold leading-[80%]">
        GOODS
      </h2>
    </div>
  );
};

export default LogoText;
