import React from 'react'
import ActiveBtn from '../Buttons/ActiveBtn'
import InactiveBtn from '../Buttons/InactiveBtn'


const ProjectCard = ({
  name = "Project Name",
  description = "This is description",
  techStack = ["Skill", "Skill"],
  img = 'https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp',
  code = "https://github.com/jaspreet6090",
  live = "https://jaspreetsingh.netlify.app/",

  card = "",
}) => {

  return (
    <div className='border-2 border-primary sm:w-96 mx-auto rounded-lg flex flex-col gap-2 text-left text-white py-3 px-5 hover:shadow-lg hover:shadow-purple-600 transition-all hover:cursor-pointer hover:translate-y-[-6px]'>
      <div className="text-xl font-bold text-secondary sm:text-2xl">{name}</div>
      <div className="flex flex-col items-start">
        <img src={img} alt="Project Image" className='h-60 max-w-full rounded-md ' />
        <div className=" text-wrap">{description}</div>
        <ul className=" flex flex-wrap">{techStack.map((skill, idx) => (
          <li key={idx} className='text-primary font-semibold'>• {skill}&nbsp;</li>
        ))}</ul>
      </div>
      <div className="flex flex-wrap justify-between gap-2 sm:gap-0 mt-2">

        {
          card === "WebDev" ? <InactiveBtn value='View Code' logo={<i className="fa-solid fa-code"></i>} redirect={code} /> : <InactiveBtn value='View Design' logo={<i class="fa-solid fa-crop-simple"></i>} redirect={code} />
        }

        <ActiveBtn value='View Live' logo={<i className="fa-solid fa-eye"></i>} redirect={live} />
      </div>
    </div>
  )
}

export default ProjectCard
