import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marqui = () => {
  return (
    <div className="flex items-center justify-end z-10 w-full mx-auto">
      <Marquee
        gradient={false}
        direction="right"
        speed={90}
        className="text-9xl"
      > C7 STUDIO * DESIGN & DEVELOPMENT * C7 STUDIO * DESIGN & DEVELOPMENT * C7
        STUDIO * DESIGN & DEVELOPMENT * <span className="ml-2"> </span>
      </Marquee>
    </div>
  );
};

export default Marqui;
