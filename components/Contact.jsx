import React from "react";
import FormContact from "./FormContact";
import Image from "next/image";
import Gif from "../public/c7contact.gif";
import Link from "next/link";
import AnimatedTitle from "../utils/AnimatedTitle";

function Contact() {
  return (
    <div className="pt-12" id="contact">
      <div className="h-screen p-5 ">
        <AnimatedTitle text="Contact Us" customStyle="text-6xl text-center md:text-left"/>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <FormContact />
          <div className="flex flex-col justify-center md:px-auto pb-40">
            <Image className="" src={Gif} alt="C7 Studio" height={370} width={370} />
            {/* <h2>Located in Buenos Aires, Argentina</h2>
            <p>-34.606331798816704, -58.435075902603835</p>
            <h5 className="flex flex-col focus:outline-gray-400 mt-6">
              also via e-mail
              <span className="underline focus:outline-gray-400">
                <Link
                  className="focus:outline-gray-400"
                  href="mailto:c7studio.www@gmail.com"
                >
                  c7studio.www@gmail.com
                </Link>
              </span>
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
