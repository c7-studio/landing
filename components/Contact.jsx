import React from 'react'
import FormContact from './FormContact'
import Image from 'next/image';
import Map from '../public/mapa.png';
import Link from 'next/link';


function Contact() {
  return (
    <div className='py-16' id="contact">
      <div className='h-screen p-5 '>
        <h2 className='text-6xl'>Contact Us</h2>
        <div className='flex flex-col md:flex-row gap-x-16	'>
          <FormContact />
          <div className='basis-1/2'>
            <Image
              src={Map}
              alt="Buenos Aires map"
            />
            <h2>Located in Buenos Aires, Argentina</h2>
            <p>-34.606331798816704, -58.435075902603835</p>
          </div>
          <h5 className='flex flex-col focus:outline-gray-400 mt-6'>
            Or e-mail us at
            <span className='underline focus:outline-gray-400'>
                <Link 
                className='focus:outline-gray-400'
                href="mailto:c7studio.www@gmail.com"
                >c7studio.www@gmail.com</Link>
                
            </span>
        </h5>
        </div>
      </div>
    </div>
  )
}

export default Contact