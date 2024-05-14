import React from 'react'


const Footer = () => {

  let date = new Date().getFullYear();

  const social = [
    {
      link: "https://github.com/jaspreet6090",
      icon: "fa-brands fa-github",
    },
    {
      link: "https://www.linkedin.com/in/jaspreetsingh6090/",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://twitter.com/jaspreet6090",
      icon: "fa-brands fa-x-twitter",
    },
    {
      link: "https://www.instagram.com/i_jaspreetsingh_/",
      icon: "fa-brands fa-instagram",
    },
    {
      link: "https://www.behance.net/jaspreetsingh6090",
      icon: "fa-brands fa-behance",
    }
  ]

  return (
    <footer className='w-full bg-black   '>
      <div className="text-center py-5 flex flex-col gap-3">
        <p className='text-lg font-bold text-white'>Designed and Developed by <a href="#" className='text-secondary hover:text-primary' >Jaspreet Singh</a>  </p>
        <p className='text-gray-500 text-sm'>Want to Talk? Connect With Me</p>


        <div className="flex justify-center space-x-4">
        {social.map((item) =>{
          return (
            <a href={item.link} target="_blank" rel="noreferrer" className="text-white text-3xl hover:text-primary hover:scale-125 transition-all">
              <i className={`fab ${item.icon}`}></i>
            </a>
          )
        })}
        
        </div>
        <p className='text-white'>Made with ❤️</p>
        <p className='text-gray-500'>&copy; {date} by <a href="#">Jaspreet Singh. All Rights Reserved.</a></p>
      </div>
    </footer>
  )
}

export default Footer;
