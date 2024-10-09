import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap, CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);

// Custom hook useGSAP
const useGSAP = (targets, mobileTargets) => {
  useEffect(() => {
    CustomEase.create("ballsEase", "0.72,0,0.32,0.99");

    const ballsAnimation = gsap.to(targets, {
      duration: 0.5,
      yPercent: -100,
      delay: 0.8,
      ease: "ballsEase",
    });

    const ballsMobileAnimation = gsap.to(mobileTargets, {
      duration: 0.8,
      xPercent: -100,
      delay: 1.6,
      ease: "ballsEase",
    });

    // Cleanup to kill the animations when the component unmounts
    return () => {
      ballsAnimation.kill();
      ballsMobileAnimation.kill();
    };
  }, [targets, mobileTargets]);
};

function Balls() {
  // Using useGSAP hook
  useGSAP(".balls", ".balls-mobile");

  return (
    <div className="md:col-span-1 h-[33%] md:h-screen relative">
      <Spline scene="https://prod.spline.design/rjbXsWR6ht4f7ur3/scene.splinecode" />
      <div className="hidden md:block bg-[#121212] absolute top-0 left-0 right-0 bottom-0 balls"></div>
      <div className="block md:hidden md:opacity-100 bg-[#121212] absolute top-[-10px] left-0 right-0 bottom-0 balls-mobile"></div>
    </div>
  );
}

export default Balls;
