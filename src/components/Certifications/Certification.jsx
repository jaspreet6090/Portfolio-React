import React from 'react'
import Slideshow from './SlideShow'
import { motion } from 'framer-motion'

const Certification = () => {
  return (
    <section className='text-center my-5' >
   <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Certifications</h1>
      <p className='text-gray-500 my-3 text-lg'>Here's my background in UI/UX design and software development.</p> 

      <motion.div
      initial= {{opacity:0, scale:0}}
         whileInView={{opacity:1 ,scale:1}}
          transition={{duration:1, ease: "linear"}}
         viewport={{once:true}}
          className="my-10">
      <Slideshow/>
      </motion.div>
    </section>
  )
}

export default Certification
