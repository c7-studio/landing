import React from 'react'

function FormContact() {
  return (
    <div className='py-12'>   
        <form className="flex flex-col max-w-[50%]">
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="mb-4 border-b-2 border-dashed border-black" 
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required/>
            <label htmlFor="email" className="mb-2">E-mail Address</label>
            <input className="mb-4 border-b-2 border-dashed border-black" 
                id="email"
                name="email"
                type="text"
                autocomplete="email"
                required/>
            <label htmlFor="inquiry" className="mb-2">Inquiry</label>
            <input className="mb-4 border-b-2 border-dashed border-black min-h-[100px]" 
                id="inquiry"
                name="inquiry"
                type="text"
                autocomplete="inquiry"
                required/>
            <div className='flex justify-center items-center gap-x-10 my-2'>
                <button type="submit" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-500">
                Send
                </button>
                <button type="submit" className="h-min w-min px-4 py-1 font-bold text-black border border-black hover:text-gray-500">
                    Reset
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormContact