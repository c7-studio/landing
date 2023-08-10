import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marqui2 = () => {
  return (
    <div className="flex items-center justify-end z-10 w-full mx-auto">
      <Marquee
        gradient={false}
        direction="left"
        speed={90}
        className="text-9xl flex space-around w-full"
      >
        <Image className="px-4" src="/icon1.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon4.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon1.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon4.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon1.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon4.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon1.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon4.png" width={100} height={100} />
        <span className="ml-2"></span>
        <Image className="px-4" src="/icon3.png" width={100} height={100} />
        <span className="ml-2"></span>
      </Marquee>
    </div>
  );
};

export default Marqui2;
