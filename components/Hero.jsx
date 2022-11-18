import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen bg-fixed 
    bg-cover bg-center
    mb-2 
    bg-[url('../public/hero-mobile.png')] 
    md:bg-[url('../public/hero1.png')]">
        <div className='p-5 mt-12 text-black z-[3] '>
            <h2 className='text-6xl mb-4'>We design your website.<br/>
             We are nerds with a visual eye. <br/> Contact us.</h2>
            <div className='inline-flex items-center'>
              <button className='px-2 py-1 border-solid border border-black focus:outline-gray-400 inline-flex items-center hover:text-gray-600 hover:border-gray-600' 
              onClick={() => router.push('/#services', undefined, {scroll: false})}>
                  <span className='animate-pulse'>
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