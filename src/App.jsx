import React from 'react'
import {Header , Horizontal, Main , About ,Skill} from './components'


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
    <div className="h-[100px]"></div>
    </div>
  )
}

export default App
