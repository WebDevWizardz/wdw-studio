import React from "react";
import Description from "./Description";
import Logo from "./Logo";
import Services from "./Services";
import CTA from "./CTA";
import Balls from "./Balls";

function Hero() {
  return (
    <div className="flex flex-col justify-evenly h-screen md:grid md:grid-cols-3 overflow-hidden">
      <h1 className="opacity-0 absolute">Web Dev Wizards</h1>
      <div className="md:col-span-2">
        <div className="flex flex-col-reverse md:flex-col px-[20px] md:px-0 md:h-screen md:justify-between">
          <div className="text-[#B4B4B4] text-[14px] md:text-[18px] tracking-[-2%] w-full md:w-[490px] pt-[20px] md:pt-[60px] md:pl-[60px]">
            <Description />
          </div>
          <div>
            <Logo />
            <div className="hidden md:block">
              <Services />
            </div>
          </div>
          <div className="hidden md:block">
            <CTA />
          </div>
        </div>
      </div>
      <Balls />
      <div className="block md:hidden">
        <CTA />
        <Services />
      </div>
    </div>
  );
}

export default Hero;
