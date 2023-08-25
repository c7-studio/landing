import React from "react";
import loguito from "../public/loguito_c7.png";
import Image from "next/image";

const Pie = () => {
  return (
    <div className="hidden md:flex items-center flex-row p-2 justify-between border border-t border-t-gray border-b-0">
      <div>
        <h6 className="text-sm">© Copyright 2023</h6>
      </div>
      {/* <Image src={loguito} alt="/" width={15} height={15} /> */}
    </div>
  );
};

export default Pie;
  