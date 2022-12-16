import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function ProjectItem({image, title, hasMargin, skill, description}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='flex flex-col justify-evenly border mx-auto max-h-full md:max-w-[49%] sm:max-w-full p-2 mt-2 sm:mt-0 ' >
        <div className=''>
          <Link href='https://www.behance.net/gallery/155218353/Kostueme'>
            <a>
            <Image
                width={1200}
                height={900}
                src={image}
                className= {isLoading ? 'grayscale-blur-2xl' : 'grayscale-0 blur-0'}
                onLoadingComplete={() => setLoading(false)}
                objectFit="responsive"
            />

            </a>
          </Link>
        </div>
        <div className='flex w-full justify-between pb-2'>
            <h2 className='my-2 w-32 border-solid border border-black text-base text-center'>{title}</h2>
            <h2 className='my-2 text-base text-center'>{skill}</h2>
        </div>
        <h5 className='text-xs text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida pretium gravida. Quisque porta lacus sit amet volutpat auctor. Integer venenatis mi felis, sed fermentum orci cursus at. Fusce imperdiet, nibh ac feugiat tempus, sapien turpis imperdiet turpis, et ultrices purus odio sit amet mauris. Praesent condimentum et odio faucibus ultricies. Nullam nunc nunc, molestie eu mollis eget, hendrerit nec sapien. Nullam mollis risus ut tincidunt facilisis. Ut arcu enim, luctus placerat venenatis non, porta non lectus. Curabitur lacus magna, tempor ut molestie vel, ullamcorper sit amet augue. Donec congue diam eros, ac maximus sapien tempus vitae. Duis id dolor et felis vestibulum pharetra. Nunc ornare vulputate risus sit amet suscipit. Praesent massa mi, ornare ut tortor sit amet, tristique aliquet tellus. Nullam at rutrum nulla, quis lobortis ipsum. Proin consectetur vestibulum urna a convallis. Nam aliquet, felis et dictum dictum, neque mi dignissim justo, quis porta ipsum lacus vitae ante.</h5>
    </div>
  )
}

export default ProjectItem