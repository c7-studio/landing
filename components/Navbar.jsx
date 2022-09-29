import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handlenav = () => {
        setNav(!nav)
    }


  return (
    <div style={{backgroundColor: `${color}`}}  className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black">
            <Link href='/'>
            <h1 className='font-bold text-4xl'>C7Studio</h1>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/#services'>Services</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div className='block sm:hidden z-10'> 
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Menu */}
            <div className={
                nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
            }>
            <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#services'>Services</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar