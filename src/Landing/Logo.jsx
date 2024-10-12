import React, { useEffect } from "react";
import { gsap, CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);

// Custom hook useGSAP for logo animations
const useGSAP = (logoClass) => {
  useEffect(() => {
    CustomEase.create("karoEase", "0.25,0.1,0.25,1");

    const logoAnimation = gsap.to(logoClass, {
      duration: 1,
      y: 0,
      ease: "karoEase",
    });

    // Cleanup to kill the animations when the component unmounts
    return () => {
      logoAnimation.kill();
    };
  }, [logoClass]);
};

function Logo() {
  // Using useGSAP hook for .logo animation
  useGSAP(".logo");

  return (
    <div className="text-[60px] md:text-[120px] leading-[90px] md:leading-[105px] tracking-[-4%] font-medium logo overflow-hidden mr-0 md:mr-[24px] md:text-right">
      <div className="h-[66px] md:h-[100px] overflow-hidden">
        <div className="will-change-transform logo translate-y-[200px] pr-[8px]">
          We deliver
        </div>
      </div>
      <div className="h-[66px] md:h-[100px] overflow-hidden">
        <div className="will-change-transform logo translate-y-[300px] pr-[8px] leading-[60px] md:leading-[90px]">
          Web
        </div>
      </div>
    </div>
  );
}

export default Logo;
