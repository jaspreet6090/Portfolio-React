import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experience } from '../../costant'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <section className='text-center my-5 w-full ' id='experience'>
      <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Experience</h1>
      <p className='text-gray-500 my-3 text-lg'>My professional journey encompasses diverse roles as a Software Engineer and UI/UX Designer across various companies and projects.</p>


      {
        experience.map((exp) => {
          return (
           <motion.div
           initial= {{opacity:0, scale:0}}
         whileInView={{opacity:1 ,scale:1}}
          transition={{duration:1, ease: "linear"}}
         viewport={{once:true}}
            className="flex justify-evenly items-start flex-wrap gap-6 my-6">
           <ExperienceCard
              key={exp.id}
              img={exp.img}
              name={exp.name}
              title={exp.title}
              date={exp.date}
              description={exp.description}
              skills={exp.skills}
            />
           </motion.div>
          )
        })
      }

      
    
    
    </section>
  )
}

export default Experience
