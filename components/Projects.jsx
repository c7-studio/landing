import React from 'react'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16' id="projects">
      <div className='h-screen' >
        <h2 className='text-6xl p-5'>Latest Projects</h2>
        <div className='p-5'>
          <ProjectItem image="/img_1.png" title="Kostume"/>
        </div>
      </div>
    </div>

  )
}
