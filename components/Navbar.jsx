import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import logoNuevo from "../public/nuevito4.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [border, setBorder] = useState("0px");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 40) {
  //       setColor("#ffffff");
  //       setTextColor("#000000");
  //       setBorder("1px");
  //     } else {
  //       setColor("transparent");
  //       setTextColor("white");  
  //       setBorder("0px")
  //     }
  //   };
  //   window.addEventListener("scroll", changeColor);
  // }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-50 ease-in duration-300 items-center"
    >
      <div style={{ borderWidth: `${border}` }} className="max-w-[1720px] mx-auto flex justify-between items-center px-5 text-black border-b-black transition duration-1000	">
        <Link href="/" to="hero">
          <Image src={logoNuevo} alt="Logo" width={72} height={72} />
        </Link>
        <ul className="hidden sm:flex">
          <li className="px-2 ml-4 hover:text-gray-600 focus:outline-grey-400">
            <Link
              className="focus:outline-grey-400 cursor-pointer"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="px-2 ml-4 hover:text-gray-600">  
            <Link
              className="focus:outline-grey-400 cursor-pointer"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="px-2 ml-4 hover:text-gray-600 hover:border-gray-600 focus:outline-grey-400 border-black border">
            <Link
              className="focus:outline-grey-400 cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose style={{ color: `$textColor` }} size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `$textColor` }} size={20} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300		"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="cursor-pointer p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="projects">
                Projects
              </Link>
            </li>
            <li className="cursor-pointer p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="services">
                Services
              </Link>
            </li>
            <li className="cursor-pointer p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
