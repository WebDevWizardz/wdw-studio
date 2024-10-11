import React, { useEffect } from "react"
import Spline from "@splinetool/react-spline"

import { gsap, CustomEase } from "gsap/all"
gsap.registerPlugin(CustomEase)

function Balls() {
  CustomEase.create("ballsEase", "0.72,0,0.32,0.99")
  useEffect(() => {
    gsap.to(".balls", {
      duration: 0.5,
      yPercent: -100,
      delay: 0.8,
      ease: "ballsEase",
    })
    gsap.to(".balls-mobile", {
      duration: 0.8,
      xPercent: -100,
      delay: 1.6,
      ease: "ballsEase",
    })
  }, [])

  return (
    <div className="md:col-span-1 h-[33%] md:h-screen relative">
      <Spline scene="https://prod.spline.design/SQAS7hHnG7KGSJyQ/scene.splinecode" />
      <div className="hidden md:block bg-[#121212] absolute top-0 left-0 right-0 bottom-0 balls"></div>
      <div className="block md:hidden md:opacity-100 bg-[#121212] absolute top-[-10px] left-0 right-0 bottom-0 balls-mobile"></div>
    </div>
  )
}

export default Balls
