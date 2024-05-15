import React from 'react'

const ActiveBtn = ({value = "Active Btn" , redirect ,logo}) => {
  
  return (

     <button className='rounded border-2 border-primary bg-primary  text-lg px-3 py-1  text-white
     hover:border-primary hover:bg-transparent hover:text-primary transition duration-300 ease-in-out
     ' 
     
     ><a href={redirect} >{logo}&nbsp;&nbsp;{value}</a></button>
  
  )
}

export default ActiveBtn
