import React from 'react';
import Image from 'next/image';
import Map from '../public/mapa.png';
import Link from 'next/link';


function FormContact() {
  return (
    <div className='py-12 md:basis-1/2 flex flex-col justify-around px-0'>   
        <form className="flex flex-col">
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="mb-4  border-black focus:outline-gray-400" 
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required/>
            <label htmlFor="email" className="mb-2">E-mail Address</label>
            <input className="mb-4 border-black focus:outline-gray-400" 
                id="email"
                name="email"
                type="text"
                autocomplete="email"
                required/>
            <label htmlFor="inquiry" className="mb-2">Inquiry</label>
            <textarea className="mb-4 border-black min-h-[100px] focus:outline-gray-400" 
                id="inquiry"
                name="inquiry"
                type="text"
                autocomplete="inquiry"
                placeholder='Your message...'
                required/>
            <div className='flex justify-center items-center gap-x-10 my-2'>
                <button type="submit" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-600 hover:border-gray-600 focus:outline-gray-400">
                Send
                </button>
                <button type="reset" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-600 hover:border-gray-600 focus:outline-gray-400">
                    Reset
                </button>
            </div>
        </form>


    </div>
  )
}

export default FormContact


{/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea> */}
