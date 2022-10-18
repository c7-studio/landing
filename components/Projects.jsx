import React from 'react'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16' id="projects">
      <div className='h-screen' >
        <h2 className='text-6xl p-5'>Latest Projects</h2>
        <div className='p-5 flex'>
          <ProjectItem image="/img_1.png" title="Kostume"/>
          <ProjectItem image="/img_1.png" title="Vegas"/>
        </div>
      </div>
    </div>

  )
}
