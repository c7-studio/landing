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
    <div className='py-16 w-100' id="services">
      <div className='p-5'>
        <h2 className='text-6xl'>Our Services</h2>
            <div className='items-center flex justify-between mt-10 mx-auto'>
              <div className='flex mx-auto'>
                {list.map((item) => {
                  return <ServiceItem key={item.id} image={item.img} title={item.title}/>
                })
                }
              </div>
            </div>
      </div>
    </div>
  )
}
