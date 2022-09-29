import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img'>
        <div className='p-5 text-black z-[2] '>
            <h2 className='text-5xl'>We design your website.<br/>
             We are nerds with a visual eye. <br/> Contact us.</h2>
            <button className='px-8 py-2 border'>Learn more</button>
        </div>
    </div>
  )
}

export default Hero