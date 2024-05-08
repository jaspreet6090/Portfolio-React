import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section className='text-center my-5 w-full '>
      <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Experience</h1>
      <p className='text-gray-500 my-3 text-lg'>Here's my background in UI/UX design and software development.</p>
<div className="flex flex-col items-center gap-10 my-10">
      <ExperienceCard/>
      <ExperienceCard/>
</div>
    </section>
  )
}

export default Experience
