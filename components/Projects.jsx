import React from "react";
import ProjectItem from "./ProjectItem";
import AnimatedTitle from "../utils/AnimatedTitle";


export const Projects = () => {
  return (
    <div className="mx-auto scroll-top pt-10" id="projects">
      <div className="max-h-full max-w-full">
        <AnimatedTitle text="Latest Projects" customStyle="text-center md:text-left text-6xl px-5 pt-3"/>
        <div className="p-5 block sm:grid grid-rows-2	grid-cols-2 row-auto	 gap-4				">
          <ProjectItem
            image="/kostume_cover.png"
            title="Kostume"
            skill="Web design & Development"
            description="Design/Development this e-commerce for fashion wear 'Kostume'"
            link="https://kostumeweb.net"
          />
          <ProjectItem 
            image="/tdt_cover.png"
            title="Templo de Tierra"
            skill="Web design & Development"
            description="Design/Development a landing site for bioconstruction boutique hotel 'Templo de Tierra'"
            link="https://templodetierra.com/"
          />
          <ProjectItem 
            image="/sofar_cover.png"
            title="So Far, So Near"
            skill="Web design & Development"
            description="Design and development for online biennale pavillion 'The Wrong Biennale'."
            link="https://sofarsonear.online/"
          />
        </div>
      </div>
    </div>
  );
};
