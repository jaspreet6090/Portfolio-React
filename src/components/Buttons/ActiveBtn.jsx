import React from 'react'

const ActiveBtn = ({value = "Active Btn"}) => {
  return (

      <button className='rounded border-2 border-secondary  pl-3 pr-3 pt-1 pb-1 text-secondary' >{value}</button>
  
  )
}

export default ActiveBtn
