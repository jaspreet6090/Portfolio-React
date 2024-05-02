import React from 'react'
import SkillGroup from './SkillGroup'
import { learning,language , frontend,backend,tools } from '../../costant'
import { motion } from 'framer-motion'

const SkillContainer = () => {
  return (
    <section className='text-center my-4'>
      <motion.h2 
        //add onscroll animations
        className="text-secondary text-3xl  font-bold sm:text-4xl"> Skills</motion.h2>

      <p className='text-gray-500 my-3 text-lg'>Here are some of my skills on which I have been working on for the past 1 year.</p>
      <div className="flex ">
        {[ 
          { title: 'Languages', data: language },
          { title: 'Frontend', data: frontend },
          { title: 'Backend', data: backend },
          { title: 'Tools', data: tools },
          { title: 'Learning', data: learning }
        ].map((group, index) => (
          <div key={index} className="" >
            <h3 className="text-secondary text-2xl font-bold mb-2 ">{group.title}</h3>
            <SkillGroup data={group.data}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillContainer
