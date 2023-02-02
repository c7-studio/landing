import Marquee from "react-fast-marquee";
import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

export const Services = () => {
  const router = useRouter();

  const [list, setList] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setList(myJson);
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full animate-fade-in-down z-0 pt-12" id="services">
      <div className="px-5 py-1">
        <h2 className="text-6xl text-center sm:text-left pl-2">Our Services</h2>
        <div className="items-center flex justify-between mt-4 mx-auto">
          <div className="flex-auto sm:flex mx-auto">
            {list.map((item) => {
              return (
                <ServiceItem
                  key={item.id}
                  image={item.img}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => router.push("/#projects", undefined, { scroll: false })}
        className="hidden mx-auto md:flex px-2 py-1 border-solid border border-black focus:outline-gray-400 items-center animate-pulse "
      >
        See our latest projects
        <MdKeyboardArrowDown size={20} className="ml-1" />
      </button>
    </div>
  );
};
