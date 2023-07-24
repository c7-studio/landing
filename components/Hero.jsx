import React, { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useFBX } from "@react-three/drei";
import AnimatedTitle from "../utils/AnimatedTitle";

function Scene() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() /2;
    myMesh.current.rotation.y = a;
  });
  
  const obj = useFBX('c7-v2.fbx')
  return <mesh ref={myMesh}>
      <spotLight intensity={10} />
      <primitive object={obj} scale={0.0022} dispose={null} />
      <OrbitControls/>
    </mesh> 
};

const Hero = () => {
  const router = useRouter();
  return (
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-fixed bg-cover bg-center mb-2 mx-auto">
          <div className="p-5 text-black z-[3] max-w-[920px] mx-auto">
          <h2 className="text-6xl text-center md:text-left my-8 md:mb-4 animate-fade-in-down duration-500 leading-[3.2rem] mt-24 md:mt-0">
            We are a creative agency based on collaboration.
          </h2>
          <p className="text-center md:text-left text-2xl mb-8 md:mb-4 animate-fade-in-down duration-800">
            Associating with companies that need performant and enticing
            solutions for their digital products
          </p>
          <div className="flex justify-center md:inline-flex items-center">
            <button
              className="animate-fade-in-up duration-600 px-2 py-1 border-solid border border-black focus:outline-gray-400 inline-flex items-center  animate-pulse"
              onClick={() =>
                router.push("/#projects", undefined, { scroll: false })
              }
            >
              <span className="">Learn more</span>
              <MdKeyboardArrowDown size={20} className="ml-1" />
            </button>
          </div>
          </div>
          <Canvas className="w-full h-[600px]">
            <Scene/>
          </Canvas>
        </div>
  );
};

export default Hero;
