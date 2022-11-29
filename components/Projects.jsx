import React from 'react'
import { MdFormatLineSpacing } from 'react-icons/md'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16 mx-auto' id="projects">
      <div className='max-h-full max-w-full'>
        <h2 className='text-6xl px-5 pt-3 '>Latest Projects</h2>
        <div className='p-5 sm:flex block mx-auto'>
          <ProjectItem image="/img_1.png" title="Kostume"/>
          <ProjectItem image="/img_1.png" title="Vegas"/>
        </div>
      </div>
    </div>

  )
}
