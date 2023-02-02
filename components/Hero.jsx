import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Scene() {
  //TODO: fix URL
  //TODO: limit pan on OrbitControls
  
  const obj = useLoader(FBXLoader, 'http://localhost:3000/hero-txt.fbx')
  return <Canvas
      camera={{ position: [0, 0, 1.5] }}>
      <ambientLight intensity={0.9} />
      <pointLight position={[10, -10, 0]} intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={0.5} />
      <pointLight position={[-10, 0, 0]} intensity={0.5} />
      <primitive object={obj} scale={0.0005} />
      <OrbitControls/>
    </Canvas>
};

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover bg-center mb-2">
        <Scene className="w-full h-[200px]"/>
        <div className="p-5 mt-12 text-black z-[3] max-w-[920px] mx-auto">
        <h2 className="text-7xl mb-4 animate-fade-in-down duration-500 leading-[3.2rem]">
          C7 Studio is a creative agency based on collaboration.
        </h2>
        <p className="text-2xl mb-4 animate-fade-in-down duration-500">
          We associate with companies that need performant and enticing
          solutions for their digital products
        </p>
        <div className="inline-flex items-center">
          <button
            className="animate-fade-in-up px-2 py-1 border-solid border border-black focus:outline-gray-400 inline-flex items-center  animate-pulse"
            onClick={() =>
              router.push("/#services", undefined, { scroll: false })
            }
          >
            <span className="">Learn more</span>
            <MdKeyboardArrowDown size={20} className="ml-1" />
          </button>
        </div>
        </div>
      </div>
  );
};

export default Hero;
