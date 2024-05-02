import React from 'react'
import Skill from './SkillBox'

const SkillGroup = ({data}) => {
  return (
    <div className='flex gap-3 flex-wrap '>
     { data.map((item) => {
        return (
          <Skill key={item.id} src={item.src} name= {item.name} />
        )
      })}
    </div>
  )
}

export default SkillGroup
