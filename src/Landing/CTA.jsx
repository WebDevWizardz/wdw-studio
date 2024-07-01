import React from "react";
import Arrow from "./Arrow";

function CTA() {
  return (
    <div className="">
      <div className="w-fit mt-[20px] md:mt-[20px] text-[40px] md:text-[60px] pl-[20px] md:pl-[60px] relative cursor-pointer">
        <p className="shining-text">get in touch</p>
        <span className="arrow-animation absolute">
          <Arrow />
        </span>
      </div>
    </div>
  );
}

export default CTA;
