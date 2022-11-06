import React from 'react';
import { Footer } from 'flowbite-react';
import loguito from '../public/loguito_c7.png'



const Pie = () => {
  return (
<Footer container={true} className='border-none'>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
    </div>
    <Footer.Copyright
      href="#"
      by="C7 Studio"
      year={2022}
    />
  </div>
</Footer>
  )
}

export default Pie