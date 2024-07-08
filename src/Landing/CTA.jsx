import React from "react";
import Arrow from "./Arrow";

function CTA() {
  return (
    <div className="start-anim-cta">
      <div className="w-fit text-[40px] md:text-[60px] pb-[20px] pl-[20px] md:pl-[60px] relative cursor-pointer mt-[20px] md:mt-0">
        <p className="shining-text get-in-touch">get in touch</p>
        <span className="arrow-animation absolute">
          <Arrow />
        </span>
      </div>
    </div>
  );
}

export default CTA;
