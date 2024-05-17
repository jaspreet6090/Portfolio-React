import React from 'react'

const skill = ({src= "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" , name = "Java"}) => {
  //array prope milega usmai se data utha ke lana hai ek ek karke
  return (
    <div className=" border-2 border-secondary  bg-slate-100 text-black flex max-w-fit gap-2 items-center py-1 px-4 rounded hover:shadow-primary-glow transition duration-300 ease-in-out cursor-pointer">
    <img src={src} alt="" className='h-7'/>
    {name}
  </div>
  )
}

export default skill
