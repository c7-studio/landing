import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img'>
        <div className='p-5 text-black z-[2] '>
            <h2 className='text-6xl mb-4'>We design your website.<br/>
             We are nerds with a visual eye. <br/> Contact us.</h2>
            <button className='px-8 py-2 border-solid border border-black '>Learn more </button>
        </div>
    </div>
  )
}

export default Hero 
{/* <MdKeyboardArrowDown size={20} /> */}