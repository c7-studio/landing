import React from 'react'

const Medal = ({ text, children }) => {

    const length = text.length;
    const deg = 360/length;


  return (
        <div className='flex justify-center'>
            <div className='relative w-[600px] h-[600px] bg-[#f8f8f8] rounded-full grid place-items-center text-xl text-black'>
                <div className='absolute w-full h-full m-0 spinning-text'>
                    <p>
                        {text.split("").map((letra, i) => (
                        <span
                        className='top-0 left-[50%]'
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`,
                        }}
                        >
                            {letra}
                        </span>
                    ))}</p>
                </div>
            </div>
                        {children}
        </div>



  )
}

export default Medal