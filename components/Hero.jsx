import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen  bg-fixed bg-cover custom-img'>
        <div className='p-5 mt-12 text-black z-[3] '>
            <h2 className='text-6xl mb-4'>We design your website.<br/>
             We are nerds with a visual eye. <br/> Contact us.</h2>
            <div className='inline-flex items-center'>
              <button className='px-2 py-1 border-solid border border-black inline-flex items-center'>
                  <span>
                    Learn more 
                  </span>
                  <MdKeyboardArrowDown size={20} className='ml-1' />
              </button>
            
            </div>

        </div>
    </div>
  )
}

export default Hero 