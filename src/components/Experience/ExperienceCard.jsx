import React from 'react'
import j from "/Logos/gdsc-logo.png" 

const ExperienceCard = ({
  // props

  img=j,
  name = "Company name",
  title = "Job title",
  date = "Date",
  description = "Description",
  skills = ["skill1" , "Skill2"],
}) => {

  return (
    <div className='border-2 border-primary sm:w-1/2 w-full text-white text-left py-3 px-4 bg-slate-800 rounded-md hover:shadow-lg  transition-all '>

      <div className="flex items-center gap-2">
        <img src={img} alt="image" className='h-[50px] max-w-20' />
        <div className="flex flex-col">
          <div className="text-xl text-secondary font-bold">{name}</div>
          <div className="text-sm">{title}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
      <div className="my-2 text-sm">{description}</div>
      <div className="">Skills : <span>{skills.map((skill) => {
        return (
          <span className="text-secondary font-semibold text-sm">{skill}&nbsp; </span>
        )
      })}</span></div>
    </div>
  )
}

export default ExperienceCard
