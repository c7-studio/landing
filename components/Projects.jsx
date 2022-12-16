import React from 'react'
import { MdFormatLineSpacing } from 'react-icons/md'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16 mx-auto' id="projects">
      <div className='max-h-full max-w-full'>
        <h2 className='text-6xl px-5 pt-3 '>Latest Projects</h2>
        <div className='p-5 sm:flex block mx-auto'>
          <ProjectItem 
          image="/kostume_cover.png" 
          title="Kostume" 
          skill="Web design & Development"
          description="We designed and developed this E-commerce for fashion wear 'Kostume' on Tienda Nube"
          link="https://www.behance.net/gallery/155218353/Kostueme"
          /> 
          <ProjectItem 
          image="/tdt_cover.png" 
          title="Templo de Tierra" 
          skill="Web design & Development"
          description="We designed and developed this landing site for bioconstruction boutique hotel 'Templo de Tierra', using Next.Js, Tailwind CSS and design in Figma"
          link="https://www.behance.net/gallery/155218353/Kostueme"
          />           
        </div>
      </div>
    </div>

  )
}
