import React from 'react'
import Skill from './SkillBox'


const SkillGroup = ({data,title}) => {
  return (
    <div className='flex flex-col gap-3 flex-wrap items-center border-2 max-w-[500px] h-auto px-2 py-3  bg-slate-800 rounded-lg border-primary hover:shadow-lg hover:scale-105 transition-all '>
      <div className="text-xl text-secondary mb-2">{title}</div>
      <div className="flex gap-2 flex-wrap justify-evenly">
        {data.map((item) => {
          return (
            <Skill key={item.id} src={item.src} name={item.name} />
          );
        })}
      </div>
    </div>
  );
}

export default SkillGroup
