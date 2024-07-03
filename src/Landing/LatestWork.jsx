import React from "react";

function LatestWork() {
  return (
    <div className="mt-[20px]">
      <p className="font-[500]">Explore our latest work:</p>
      <div className="flex gap-x-[20px] md:gap-x-[10px] text-[#FBFBFB] text-[24px] md:text-[20px] underline">
        <a
          className="shining-text-hover"
          href="https://karolinahess.com"
          target="_blank"
          rel="noopener"
        >
          01
        </a>
        <a
          className="shining-text-hover"
          href="https://parrty.pl"
          target="_blank"
          rel="noopener"
        >
          02
        </a>
      </div>
    </div>
  );
}

export default LatestWork;
