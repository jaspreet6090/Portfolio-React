import React from 'react'

const ActiveBtn = ({value = "Active Btn" , redirect}) => {
  
  return (

     <button className='rounded border-2 border-secondary text-lg pl-3 pr-3 pt-1 pb-1 text-secondary
     hover:bg-secondary hover:text-white transition duration-300 ease-in-out
     ' 
     ><a href={redirect}>{value}</a></button>
  
  )
}

export default ActiveBtn
