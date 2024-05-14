import React from 'react'
import {Header , Horizontal, Main , About ,Skill , Experience , Project, Certification,Contact, Footer} from './components'


const App = () => {
 
  return (
    //Container
    
    
<>
    <div className="sticky top-0 mt-0 z-20">
      <Header/>
    </div>
    <div className="lg:mx-28 p-4 sm:mx-3 flex flex-col gap-2">
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
    <div className="">
    <Footer/>
    </div>
    </>
  )
}

export default App
