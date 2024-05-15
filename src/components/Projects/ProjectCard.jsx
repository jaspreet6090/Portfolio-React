import React from 'react'
import ActiveBtn from '../Buttons/ActiveBtn'
import InactiveBtn from '../Buttons/InactiveBtn'


const ProjectCard = ({
  name = "Project Name",
  description = "This is description",
  techStack= ["Skill" , "Skill"],
  img='https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp'
}) => {
 
  return (
    <div className='border-2 border-primary w-auto   mx-auto rounded-lg flex flex-col items-start text-white py-3 px-5 hover:shadow-lg hover:shadow-purple-600 transition-all  '>
      <div className="text-xl font-semibold text-secondary">{name}</div>
      <div className="flex flex-col items-start">
      <img src={img} alt="Project Image" className='h-60' />
      <div className="">{description}</div>
      <div className="">{techStack.map((skill,idx)=>(
        <span key={idx} className='text-primary font-semibold'>{skill}&nbsp;</span>
      ))}</div>
      </div>
      <div className=" space-x-5 mt-2">
        
        <InactiveBtn value='View Code' logo={<i className="fa-solid fa-code"></i>}/>
        <ActiveBtn value='View Live' logo={<i className="fa-solid fa-eye"></i>}/>
      </div>
    </div> 
  )
}

export default ProjectCard
