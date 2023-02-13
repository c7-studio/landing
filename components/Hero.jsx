import React, { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useFBX } from "@react-three/drei";

function Scene() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() /2;
    myMesh.current.rotation.y = clock.getElapsedTime();

  })
  
  const obj = useFBX('c7-v2.fbx')
  return <mesh ref={myMesh} rotation-x={Math.PI * 0.100} rotation-y={Math.PI * 0.25}>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 1.5]}/>
      <directionalLight position={[2, 2, 2]} intensity={100} />
      <primitive object={obj} scale={0.0005} dispose={null} />
      <OrbitControls/>
    </mesh> 
};

const Hero = () => {
  const router = useRouter();
  return (
      <div className="flex items-center justify-center h-screen bg-fixed bg-cover bg-center mb-2">
          <div className="p-5 mt-12 text-black z-[3] max-w-[920px] mx-auto">
          <h2 className="text-7xl mb-4 animate-fade-in-down duration-500 leading-[3.2rem]">
            C7 Studio is a creative agency based on collaboration.
          </h2>
          <p className="text-2xl mb-4 animate-fade-in-down duration-800">
            We associate with companies that need performant and enticing
            solutions for their digital products
          </p>
          <div className="inline-flex items-center">
            <button
              className="animate-fade-in-up duration-600 px-2 py-1 border-solid border border-black focus:outline-gray-400 inline-flex items-center  animate-pulse"
              onClick={() =>
                router.push("/#services", undefined, { scroll: false })
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
