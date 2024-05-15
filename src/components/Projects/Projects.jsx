import React from 'react'
import ProjectCard from './ProjectCard'
import {WebDev} from "../../costant"

const Projects = () => {
  return (
    <section className='text-center my-5 w-full '>
       <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Projects</h1>
      <p className='text-gray-500 my-3 text-lg'>Here's my Projects</p>

      <div className="">
        <h2 className='text-white text-2xl font-bold'>Web Dev</h2>
      
        <div className="flex items-start justify-evenly gap-4 my-5 flex-wrap ">
          {
            WebDev.map((project)=>(
              <ProjectCard key={project.id} name={project.name} description={project.description} techStack={project.techStack} img={project.img} code={project.code} live={project.link}/>
            ))
          }

          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      
      </div>
      <div className="">
        <h2 className='text-white text-2xl font-bold'>Ui/ux</h2>
        <div className="flex justify-evenly gap-4 my-5 flex-wrap ">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </section>
  )
}

export default Projects
