import React from "react";

function Services() {
  const services = [
    "UI/UX design",
    "development",
    "branding",
    "3D art",
    "consulting",
    "strategy",
    "visual identity",
  ];

  return (
    <div className="flex justify-end px-[24px] pb-[8px] md:pb-[0] mt-[20px] md:mt-[60px] start-anim-services">
      <div className="w-full md:w-[644px] flex flex-nowrap overflow-hidden gap-x-[18px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="overflow-hidden whitespace-nowrap flex justify-start w-full">
          <div className="flex animate-infinite-scroll">
            {services.map((service, index) => (
              <h3
                key={index}
                className="px-[9px] text-[14px] uppercase whitespace-nowrap"
              >
                {service}
              </h3>
            ))}
            {services.map((service, index) => (
              <h3
                key={index + services.length}
                className="px-[9px] text-[14px] uppercase whitespace-nowrap"
              >
                {service}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
