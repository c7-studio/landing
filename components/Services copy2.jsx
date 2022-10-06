import React, { useState, useEffect } from 'react'
import ServiceItem from './ServiceItem'


export const Services = () => {
  const [list, setList] = useState([])

  const getData = () => {
    fetch('data.json', { headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setList(myJson)
        console.log(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='h-screen' id="services">
      <h2 className='text-6xl p-5'>Our Services</h2>
      <div className='max-w-2xl max-h-full px-4 xs: py-2 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-2 gap-y-10 sm:grid-col-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8'>
           {list.map((item) => {
            console.log(item)
            return <ServiceItem key={item.id} image={item.img} title={item.title}/>
          })
          }
         </div>
      </div>
    </div>
  )
}
