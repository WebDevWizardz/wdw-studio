<<<<<<< HEAD
import React, { useEffect } from "react"
import Spline from "@splinetool/react-spline"

import { gsap, CustomEase } from "gsap/all"
gsap.registerPlugin(CustomEase)

function Balls() {
  CustomEase.create("ballsEase", "0.72,0,0.32,0.99")
=======
import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap, CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);

// Custom hook useGSAP
const useGSAP = (targets, mobileTargets) => {
>>>>>>> 6eaa5296ca0d92bc2ddd603225df91055da52e2a
  useEffect(() => {
    CustomEase.create("ballsEase", "0.72,0,0.32,0.99");

    const ballsAnimation = gsap.to(targets, {
      duration: 0.5,
      yPercent: -100,
      delay: 0.8,
      ease: "ballsEase",
<<<<<<< HEAD
    })
    gsap.to(".balls-mobile", {
=======
    });

    const ballsMobileAnimation = gsap.to(mobileTargets, {
>>>>>>> 6eaa5296ca0d92bc2ddd603225df91055da52e2a
      duration: 0.8,
      xPercent: -100,
      delay: 1.6,
      ease: "ballsEase",
<<<<<<< HEAD
    })
  }, [])
=======
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
>>>>>>> 6eaa5296ca0d92bc2ddd603225df91055da52e2a

  return (
    <div className="md:col-span-1 h-[33%] md:h-screen relative">
      <Spline scene="https://prod.spline.design/SQAS7hHnG7KGSJyQ/scene.splinecode" />
      <div className="hidden md:block bg-[#121212] absolute top-0 left-0 right-0 bottom-0 balls"></div>
      <div className="block md:hidden md:opacity-100 bg-[#121212] absolute top-[-10px] left-0 right-0 bottom-0 balls-mobile"></div>
    </div>
  )
}

export default Balls
