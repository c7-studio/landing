import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from 'flowbite-react';

function ServiceItem({image, title}) {
  const [isLoading, setLoading] = useState(true);

  return (
<div className="max-w-sm mx-2">
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
  
  {/* <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8'> */}

  // <div>
  //   <div className='border bg-grey border-black border-solid mr-10' >
  //       <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8'>
  //           <Image
  //               src={image}
  //               className= {isLoading ? 'grayscale-blur-2xl' : 'grayscale-0 blur-0'}
  //               onLoadingComplete={() => setLoading(false)}
  //               layout="fill" // required
  //               objectFit="cover"
  //           />
  //       </div>
        
  //   </div>
  //   <div>
  //     <h2 className='xs:mx-14 sm:mx-16 my-2 w-32 border-solid border border-black p-1 text-sm text-center hover:text-gray-600 cursor-pointer'>{title}</h2>
  //   </div>
  // </div>