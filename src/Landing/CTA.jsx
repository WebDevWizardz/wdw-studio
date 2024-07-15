import React from "react";
import Arrow from "./Arrow";

function CTA() {
  return (
    <div className="start-anim-cta">
      <a
        href="mailto:contact.wdwstudio@gmail.com"
        className="block w-fit text-[40px] md:text-[60px] pb-[14px] md:pb-[20px] pl-[20px] md:pl-[60px] relative cursor-pointer md:mt-0"
      >
        <p className="shining-text md:hover:get-in-touch">get in touch</p>
        <span className="arrow-animation absolute">
          <Arrow />
        </span>
      </a>
    </div>
  );
}

export default CTA;
