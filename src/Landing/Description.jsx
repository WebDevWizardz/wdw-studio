import React, { useEffect } from "react";
import { gsap, CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase);

function Description() {
  CustomEase.create("descEase", "0.72,0,0.32,0.99");
  useEffect(() => {
    gsap.to(".line", {
      duration: 1.6,
      y: 0,
      delay: 0.3,
      ease: "descEase",
      stagger: 0.1,
    });

    gsap.to(".project", {
      duration: 1.6,
      y: 0,
      delay: 0.5,
      ease: "descEase",
      stagger: 0.3,
    });
  }, []);

  return (
    <h2 className="font-[200] pb-[10px] md:pb-[0px]">
      <div className="h-[24px] overflow-hidden">
        <div className="translate-y-[40px] line">
          We are a dedicated team at WDW, blending
          <span className="text-[#FBFBFB] font-[400]"> design</span>,
        </div>
      </div>
      <div className="h-[24px] overflow-hidden">
        <div className="translate-y-[40px] line will-change-transform">
          <span className="text-[#FBFBFB] font-[400]"> art direction</span>, and
          <span className="text-[#FBFBFB] font-[400]"> creative coding</span>.
          Our mission is to
        </div>
      </div>
      <div className="h-[24px] overflow-hidden">
        <div className="translate-y-[40px] line will-change-transform">
          craft enchanting visual narratives that bring brands to life.
        </div>
      </div>
      <div className="h-[24px] overflow-hidden font-[200] mt-[10px] md:mt-[20px]">
        <div className="translate-y-[40px] line will-change-transform">
          Explore our latest work:
        </div>
      </div>
      <div className="h-[30px] overflow-hidden font-[500] mt-[6px] md:mt-[20px] text-[#FBFBFB] text-[24px] md:text-[20px] underline">
        <div className="flex gap-x-[20px] md:gap-x-[10px] translate-y-[40px] line will-change-transform">
          <a
            className="shining-text-hover project translate-y-[100px]"
            href="https://karolinahess.com"
            target="_blank"
            rel="noopener"
          >
            01
          </a>
          <a
            className="shining-text-hover project translate-y-[100px]"
            href="https://parrty.pl"
            target="_blank"
            rel="noopener"
          >
            02
          </a>
        </div>
      </div>
    </h2>
  );
}

export default Description;
