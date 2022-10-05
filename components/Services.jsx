import React from 'react'
import ServiceItem from './ServiceItem'

export const Services = () => {
  return (
    <div className='h-screen custom-img-2' id="services">
      <h2 className='text-6xl p-5'>Our Services</h2>
      <div className='max-w-2xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-col-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <ServiceItem image={'/research.png'} title={'Research'}/>
        </div>
      </div>
    </div>
  )
}
