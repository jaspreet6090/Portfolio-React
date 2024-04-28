import React from 'react'

const ActiveBtn = ({value = "Active Btn" , redirect}) => {
  
  return (

     <button className='rounded border-2 border-primary text-lg pl-3 pr-3 pt-1 pb-1 text-primary
     hover:bg-primary hover:text-white transition duration-300 ease-in-out
     ' 
     ><a href={redirect}>{value}</a></button>
  
  )
}

export default ActiveBtn
