import React, { useState } from 'react'
import Image from 'next/image'


function ServiceItem({image, title}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='flex flex-col justify-evenly' >
        <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 '>
            <Image
                src={image}
                className= {isLoading ? 'grayscale-blur-2xl' : 'grayscale-0 blur-0'}
                onLoadingComplete={() => setLoading(false)}
                layout="fill" // required
                objectFit="cover"
            />
        </div>
        <h2 className='xs:mx-14 sm:mx-16 my-2 w-32 border-solid border border-black p-1 text-sm text-center'>{title}</h2>
    </div>
  )
}

export default ServiceItem