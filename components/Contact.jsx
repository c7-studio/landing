import React from 'react'
import FormContact from './FormContact'

function Contact() {
  return (
    <div className='h-screen p-5' id="contact">
      <h2 className='text-6xl'>Contact Us</h2>
      <FormContact />
      <h5 className='flex flex-col justify-center'>Or e-mail us at <span className='underline'>c7studio.www@gmail.com</span></h5>
    </div>
  )
}

export default Contact