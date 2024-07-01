import React from "react";
import Description from "./Description";
import LatestWork from "./LatestWork";
import Logo from "./Logo";
import Services from "./Services";
import CTA from "./CTA";

function Hero() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3">
      <h1 className="opacity-0 absolute">Web Dev Wizards</h1>
      <div className="md:col-span-2 mb-[50px] md:mb-0">
        <div className="flex flex-col-reverse md:flex-col px-[20px] md:px-0">
          <div className="text-[#B4B4B4] font-[500] text-[14px] md:text-[18px] tracking-[-2%] w-full md:w-[490px] pt-[20px] md:pt-[60px] md:pl-[60px]">
            <Description />
            <LatestWork />
          </div>
          <div className="w-[300px] h-[137px] md:w-[544px] md:h-[251px] mt-[30px] mr-0 md:mr-[24px] flex md:ml-auto">
            <Logo />
          </div>
        </div>
        <div className="hidden md:block">
          <Services />
          <CTA />
        </div>
      </div>
      <div className="md:col-span-1 bg-[white] h-[295px] md:h-screen">
        <p>This section takes up 1/3 of the width.</p>
      </div>
      <div className="block md:hidden">
        <CTA />
        <Services />
      </div>
    </div>
  );
}

export default Hero;
