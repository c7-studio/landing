import Marquee from "react-fast-marquee";
import React, { useState, useEffect, useRef } from "react";
import ServiceItem from "./ServiceItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { motion, useScroll, MotionValue, useTransform, useSpring } from "framer-motion";
import AnimatedTitle from "../utils/AnimatedTitle";

export const Services = () => {
  const router = useRouter();
  const MotionItem = motion(ServiceItem);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



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
    <div className="w-full animate-fade-in-down z-0 pt-10" id="services">
      <div className="px-5 py-1">
        <AnimatedTitle text="Our Services" customStyle="text-6xl text-center sm:text-left"/>
        <div className="items-center flex justify-between mt-4 mx-auto">
        <div className="max-w-full flex-col flex md:flex-row md:justify-between mx-auto" ref={ref}>
            {list.map((item, i) => {
              return (
                  <MotionItem
                    style={{ scaleX }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}                  
                    key={item.id}
                    itemKey={i}
                    image={item.img}
                    title={item.title}
                    description={item.description}
                  />
              );
            })}
          </div>
        </div>
      </div>
      {/* <button
        onClick={() => router.push("/#projects", undefined, { scroll: false })}
        className="hidden mx-auto md:flex px-2 py-1 border-solid border border-black focus:outline-gray-400 items-center animate-pulse "
      >
        See our latest projects
        <MdKeyboardArrowDown size={20} className="ml-1" />
      </button> */}
    </div>
  );
};
