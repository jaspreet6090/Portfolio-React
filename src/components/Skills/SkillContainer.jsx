import React from 'react'
import SkillGroup from './SkillGroup'
import { learning,language , frontend,backend,tools } from '../../costant'
import { motion } from 'framer-motion'

const SkillContainer = () => {
  return (
    <section className='text-center my-6
    ' id='skill'>
      <motion.h2 
        //add onscroll animations
        className="text-secondary text-3xl  font-bold sm:text-4xl"> Skills</motion.h2>

      <p className='text-gray-500 my-3 text-lg'>Here are some of the skills I've dedicated the past year to refining and mastering.</p>
      
      <motion.div
       
       className="flex justify-evenly items-start flex-wrap gap-6 my-6">

      <SkillGroup data={frontend} title="Frontend"/>
      <SkillGroup data={backend} title="Backend"/>
      <SkillGroup data={tools} title="Tools"/>
      <SkillGroup data={language} title="Languages"/>
      <SkillGroup data={learning} title="Learning"/>
      </motion.div>
    </section>
  )
}

export default SkillContainer
