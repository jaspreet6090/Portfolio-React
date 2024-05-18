import React from 'react'
import ProjectCard from './ProjectCard'
import {WebDev,UiUx} from "../../costant"
import Horizontal from "../Horizontal"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='text-center my-5 w-full ' id='project'>
       <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Projects</h1>
      <p className='text-gray-500 my-3 text-lg mb-7'>Here's my Projects</p>

      <div className="">
        <h2 className='text-white text-3xl font-bold '>Web Development</h2>
      
        <div className="flex items-start justify-evenly gap-4 my-5 flex-wrap ">
          {
            WebDev.map((project)=>(
              <motion.div initial= {{opacity:0, scale:0}}
         whileInView={{opacity:1 ,scale:1}}
          transition={{duration:0.9, ease: "easeInOut"}}
         viewport={{once:true}}>
              <ProjectCard key={project.id} name={project.name} description={project.description} techStack={project.techStack} img={project.img} code={project.code} live={project.link} 
              card='WebDev'
              />
              </motion.div>
              
            ))
          }

         
        </div>
      
      </div>

      <Horizontal/>

      <div className="mt-5">
        <h2 className='text-white text-3xl font-bold'>UI/UX</h2>
        <div className="flex items-start justify-evenly gap-4 my-5 flex-wrap ">
          {
            UiUx.map((project)=>(
              <motion.div initial= {{opacity:0, scale:0}}
         whileInView={{opacity:1 ,scale:1}}
          transition={{duration:1, ease: "linear"}}
         viewport={{once:true}}>
              <ProjectCard key={project.id} name={project.name} description={project.description} techStack={project.techStack} img={project.img} code={project.code} live={project.link}
                card='UiUx'
              />
              </motion.div>
             
            ))
          }

         
        </div>
      </div>
    </section>
  )
}

export default Projects
