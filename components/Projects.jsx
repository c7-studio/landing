import React from 'react'
import { MdFormatLineSpacing } from 'react-icons/md'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16 mx-auto' id="projects">
      <div className='h-screen'>
        <h2 className='text-6xl px-5 pt-3 '>Latest Projects</h2>
        <div className='p-5 flex justify-between'>
          <ProjectItem image="/img_1.png" title="Kostume" hasMargin={true}/>
          <ProjectItem image="/img_1.png" title="Vegas" hasMargin={false}/>
        </div>
      </div>
    </div>

  )
}
