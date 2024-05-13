import React from 'react'
import {Header , Horizontal, Main , About ,Skill , Experience , Project, Certification} from './components'


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
    <div className="h-[100px]"></div>
    </div>
  )
}

export default App
