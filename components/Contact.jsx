import React from 'react'
import FormContact from './FormContact'
import Image from 'next/image';
import Map from '../public/mapa.png';

function Contact() {
  return (
    <div className='py-16' id="contact">
      <div className='h-screen p-5 '>
        <h2 className='text-6xl'>Contact Us</h2>
        <div className='flex flex-row gap-x-16	'>
          <FormContact />
          <div className='basis-1/2 p-3'>
            <Image
              src={Map}
              alt="Buenos Aires map"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact