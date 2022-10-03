import React, { useState } from 'react'
import Image from 'next/image'


function ServiceItem({image, title}) {
    const [isLoading, setLoading] = useState(true);

  return (
    <div className='group'>
        <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden bg-gray-200'>
            <Image
                src={image}
                className= {isLoading ? 'grayscale-blur-2xl' : 'grayscale-0 blur-0'}
                onLoadingComplete={() => setLoading(false)}
                layout="fill" // required
                objectFit="cover"
            />
        </div>
        <h2 className='mx-24 my-2 w-32 border-solid border border-black p-1 text-sm text-center'>{title}</h2>
    </div>
  )
}

export default ServiceItem