import React from 'react'


const ProjectCard = () => {
  const img = 'https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp'
  return (
    <div className='border-2 border-primary w-auto   mx-auto rounded-lg flex flex-col items-start text-white py-3 px-5'>
      <div className="">Name</div>
      <div className="flex flex-col items-start">
      <img src={img} alt="Project Image" className='h-60' />
      <div className="">Description</div>
      <div className="">Tech Stack</div>
      </div>

    </div> 
  )
}

export default ProjectCard
