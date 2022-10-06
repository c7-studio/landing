import React from 'react';
import Image from 'next/image';
import Map from '../public/mapa.png';
import Link from 'next/link';


function FormContact() {
  return (
    <div className='py-12 basis-1/2 flex flex-col justify-around'>   
        <form className="flex flex-col">
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="mb-4 border-b-2 border-dashed border-black focus:outline-gray-400" 
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required/>
            <label htmlFor="email" className="mb-2">E-mail Address</label>
            <input className="mb-4 border-b-2 border-dashed border-black focus:outline-gray-400" 
                id="email"
                name="email"
                type="text"
                autocomplete="email"
                required/>
            <label htmlFor="inquiry" className="mb-2">Inquiry</label>
            <input className="mb-4 border-b-2 border-dashed border-black min-h-[100px] focus:outline-gray-400" 
                id="inquiry"
                name="inquiry"
                type="text"
                autocomplete="inquiry"
                required/>
            <div className='flex justify-center items-center gap-x-10 my-2'>
                <button type="submit" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-600 hover:border-gray-600 focus:outline-gray-400">
                Send
                </button>
                <button type="submit" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-600 hover:border-gray-600 focus:outline-gray-400">
                    Reset
                </button>
            </div>
        </form>
        <h5 className='flex flex-col justify-center justify-self-end focus:outline-gray-400'>
            Or e-mail us at
            <span className='underline focus:outline-gray-400'>
                <Link 
                className='focus:outline-gray-400'
                href="mailto:c7studio.www@gmail.com"
                >c7studio.www@gmail.com</Link>
                
            </span>
        </h5>

    </div>
  )
}

export default FormContact