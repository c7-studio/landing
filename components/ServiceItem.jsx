import React, { useState } from 'react';
import { Card } from 'flowbite-react';

function ServiceItem({image, title}) {

  return (
<div className="max-w-sm mx-2 mt-2 sm:mt-0">
  <div>
    <Card imgSrc={image} className=' flex flex-col border border-black shadow-none rounded-none'>
      </Card>
  </div>
  <div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-3">
      {title}
    </h5>
    <hr className='mb-2' />
    <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    
    <button className='px-2 py-1 border-solid border border-black focus:outline-gray-400 inline-flex items-center hover:text-gray-600 hover:border-gray-600'>
                  <span>
                    Learn more 
                  </span>
              </button>
  </div>
</div>
    )
  }
  
  export default ServiceItem
  