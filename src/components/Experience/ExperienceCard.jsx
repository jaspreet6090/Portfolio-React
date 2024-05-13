import React from 'react'

const ExperienceCard = ({
  // props
  img = "https://gdscmpstme.com/images/gdsc-logo.png",
  name = "Company name",
  title = "Job title",
  date = "Date",
  description = "Description",
  skills = ["skill1" , "Skill2"],
}) => {
  return (
    <div className='border-2 border-primary sm:w-1/2 w-full text-white text-left py-3 px-4 bg-slate-800 rounded-md hover:shadow-lg hover:scale-105 transition-all '>

      <div className="flex items-center gap-2">
        <img src={img} alt="image" className='h-[50px]' />
        <div className="flex flex-col">
          <div className="text-xl">{name}</div>
          <div className="text-md">{title}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
      <div className="">{description}</div>
      <div className="">Skills : <span>{skills.map((skill) => {
        return (
          <span className="text-secondary">{skill} </span>
        )
      })}</span></div>
    </div>
  )
}

export default ExperienceCard
