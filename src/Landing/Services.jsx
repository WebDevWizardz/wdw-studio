import React from "react";

function Services() {
  const services = [
    "UI/UX design",
    "development",
    "branding",
    "3D art",
    "consulting",
    "startegy",
    "visual identity",
  ];

  return (
    <div className="flex justify-end px-[24px] mt-[20px] md:mt-[60px] start-anim-services">
      <div className="w-full md:w-[644px] flex flex-nowrap overflow-hidden gap-x-[18px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="animate-infinite-scroll uppercase flex items-center justify-center gap-x-[18px]">
          {services.map((service, index) => {
            return (
              <h3
                key={index}
                className="text-[14px] tracking-[-4%] text-nowrap"
              >
                {service}
              </h3>
            );
          })}
        </div>
        <div
          className="animate-infinite-scroll uppercase flex items-center justify-center gap-x-[18px]"
          aria-hidden="true"
        >
          {services.map((service, index) => {
            return (
              <h3
                key={index}
                className="text-[14px] tracking-[-4%] text-nowrap"
              >
                {service}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
