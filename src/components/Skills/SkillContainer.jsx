import React from 'react'
import SkillGroup from './SkillGroup'
import { learning,language , frontend,backend,tools } from '../../costant'
import { motion } from 'framer-motion'

const SkillContainer = () => {
  return (
    <section className='text-center my-6
    '>
      <motion.h2 
        //add onscroll animations
        className="text-secondary text-3xl  font-bold sm:text-4xl"> Skills</motion.h2>

      <p className='text-gray-500 my-3 text-lg'>Here are some of my skills on which I have been working on for the past 1 year.</p>
      
      <div className="flex justify-evenly items-start flex-wrap gap-6 my-6">

      <SkillGroup data={frontend} title="Frontend"/>
      <SkillGroup data={backend} title="Backend"/>
      <SkillGroup data={tools} title="Tools"/>
      <SkillGroup data={language} title="Languages"/>
      <SkillGroup data={learning} title="Learning"/>
      </div>
    </section>
  )
}

export default SkillContainer
