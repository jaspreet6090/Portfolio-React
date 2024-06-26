import React from 'react'

const InactiveBtn = ({value = "Active Btn" , redirect ,logo}) => {
  
  return (

     <button className='rounded border-2 border-primary text-lg px-3 py-1 text-primary
     hover:bg-primary hover:text-white transition duration-300 ease-in-out
     ' 
     
     ><a href={redirect} >{logo}&nbsp;&nbsp;{value}</a></button>
  
  )
}

export default InactiveBtn
