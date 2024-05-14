import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experience } from '../../costant'
const Experience = () => {
  return (
    <section className='text-center my-5 w-full ' id='experience'>
      <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Experience</h1>
      <p className='text-gray-500 my-3 text-lg'>My professional journey encompasses diverse roles as a Software Engineer and UI/UX Designer across various companies and projects.</p>

      <div className="flex justify-evenly items-start flex-wrap gap-6 my-6">
      {experience.map((exp, index) =>  (<Experience 
        key={index}
        
        name={exp.name}
        title={exp.title}
        date={exp.date}
        description={exp.description}
        skills={exp.skills}

        />
     ))}
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>
      </div>
    
    </section>
  )
}

export default Experience
