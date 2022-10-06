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
    <div>
        <div className='mb-20 bottom-1 absolute' id="services"></div>
      <div className='h-screen items-center flex flex-col mt-20 '>
        <h2 className='text-6xl'>Our Services</h2>
        <div className='mt-10'>
          <div className='flex'>
            {list.map((item) => {
              console.log(item)
              return <ServiceItem key={item.id} image={item.img} title={item.title}/>
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
