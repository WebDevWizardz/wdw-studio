import React, { useEffect } from "react";
import { gsap, CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);

function Logo() {
  CustomEase.create("karoEase", "0.25,0.1,0.25,1");
  useEffect(() => {
    gsap.to(".logo", {
      duration: 1,
      y: 0,
      ease: "karoEase",
    });
  }, []);

  return (
    <div className="text-[60px] md:text-[120px] leading-[90px] md:leading-[105px] tracking-[-4%] font-medium logo overflow-hidden mr-0 md:mr-[24px] md:text-right">
      <div className="h-[66px] md:h-[100px] mr-[60px] overflow-hidden">
        <div className="will-change-transform logo translate-y-[200px] pr-[8px]">
          Web Dev
        </div>
      </div>
      <div className="h-[66px] md:h-[100px] overflow-hidden">
        <div className="will-change-transform logo translate-y-[300px] pr-[8px]">
          Wizards
        </div>
      </div>
    </div>
  );
}

export default Logo;
