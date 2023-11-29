import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ image, title, hasMargin, skill, description, link }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="cursor-pointer col-span-1 row-span-1 flex flex-col justify-evenly border mx-auto max-h-full md:max-w-[100%] sm:max-w-full p-2 mt-2 sm:mt-0 ">
      <div className="">
        <Link href={link} className="cursor-pointer">
            <Image
              id=""
              width={1200}
              height={900}
              src={image}
              className="grayscale hover:grayscale-0"
              onLoadingComplete={() => setLoading(false)}
              objectFit="responsive"
            />
        </Link>
      </div>
      <div className="flex w-full justify-between pb-2">
        <h2 className="my-2 w-32 border-solid border border-black text-base text-center">
          {title}
        </h2>
        <h2 className="my-2 text-base text-center">{skill}</h2>
      </div>
      <h5 className="text-md text-ellipsis">{description}</h5>
    </div>
  );
}

export default ProjectItem;
