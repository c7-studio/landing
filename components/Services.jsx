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
    <div className='py-16' id="services">
      <div className='p-5'>
        <h2 className='text-6xl'>Our Services</h2>
            <div className='items-center flex flex-col justify-center p-20'>
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
