import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='text-center my-5 w-full '>
       <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Experience</h1>
      <p className='text-gray-500 my-3 text-lg'>Here's my background in UI/UX design and software development.</p>

      <ProjectCard/>
    </section>
  )
}

export default Projects
