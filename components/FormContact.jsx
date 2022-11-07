import React from 'react';
import Image from 'next/image';
import Map from '../public/mapa.png';
import Link from 'next/link';
import {useState} from 'react';
import { send } from 'emailjs-com';


function FormContact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
      const [alert, setAlert] = useState(null);
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ijr1bmb',
            'template_akwer7k',
            toSend,
            'eif9fAisD6xQWjpg5'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setAlert(true)
            })
            .catch((err) => {
              console.log('FAILED...', err);
              setAlert(true)
            });
            };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
  return (
    <div className='py-12 md:basis-1/2 flex flex-col justify-between px-0'>   
        <form className="flex flex-col" onSubmit={onSubmit}>
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="mb-4  border-black focus:outline-gray-400" 
                id="name"
                onChange={handleChange}
                name='from_name'
                value={toSend.from_name}
                type="text"
                autocomplete="name"
                required/>
            <label htmlFor="email" className="mb-2">E-mail Address</label>
            <input className="mb-4 border-black focus:outline-gray-400" 
                id="email"
                name='reply_to'
                value={toSend.reply_to}
                onChange={handleChange}
                type="text"
                autocomplete="email"
                required/>
            <label htmlFor="inquiry" className="mb-2">Inquiry</label>
            <textarea className="mb-4 border-black min-h-[100px] focus:outline-gray-400" 
                id="inquiry"
                name='message'
                value={toSend.message}
                onChange={handleChange}
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
        {alert && <div className="p-4 mb-4 text-sm text-green-700 border border-green-700" role="alert">
  Thank you! We will be in touch :)
</div> }
        


    </div>
  )
}

export default FormContact