import React, { useState } from 'react';
import { Card } from 'flowbite-react';

function ServiceItem({image, title, description}) {

  return (
<div className="max-w-sm sm:mx-2 mt-2 sm:mt-0 mx-auto mb-6">
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
      {description}
    </p>
  </div>
</div>
    )
  }
  
  export default ServiceItem
  