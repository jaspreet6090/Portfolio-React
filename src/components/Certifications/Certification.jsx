import React from 'react'
import Slideshow from './SlideShow'

const Certification = () => {
  return (
    <section className='text-center my-5' >
   <h1 className='text-secondary text-3xl  font-bold sm:text-4xl'>Certifications</h1>
      <p className='text-gray-500 my-3 text-lg'>Here's my background in UI/UX design and software development.</p> 

      <div className="my-10">
      <Slideshow/>
      </div>
    </section>
  )
}

export default Certification
