import React from 'react'
import {Header , Horizontal, Main , About ,Skill , Experience , Project, Certification,Contact} from './components'


const App = () => {
 
  return (
    //Container
    <div className="lg:mx-28 p-4 sm:mx-3">
      <Header/>
      <Main/>
      <Horizontal/>
      <About/>
      <Horizontal/>
      <Skill/>
      <Horizontal/>
       <Experience/> 
      <Horizontal/>
      <Project/>
      <Horizontal/>
      <Certification/>
      <Horizontal/>
      <Contact/>
    </div>
  )
}

export default App
