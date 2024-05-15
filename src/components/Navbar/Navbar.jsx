import React from 'react';

import InactiveBtn from '../Buttons/InactiveBtn';

const Navbar = () => {
  return (
    <nav className='hidden sm:block'>
      <div className="flex gap-7 text-lg text-white">
        <a href="#about" className="h-7">
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          About
          </div>
        </a>
        <a href="#skill" className="h-7">
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
            Skills
          </div>
        </a>
        <a href="#experience" className="h-7">
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
           Experience
          </div>
        </a>
        <a href="#project" className="h-7">
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
            Project
          </div>
        </a>
        <a href="#contact" className="h-7">
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
            Contact
          </div>
        </a>
      </div>
    </nav>
  );
}

function NavMob({ onClick }) {
  return (
    <nav className='absolute right-0 bg-bgColor text-white p-10 '>
      <div className='flex flex-col text-xl gap-6 mb-6'>
      <a href="#about" className="h-7" onClick={onClick }>
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          About
          </div>
        </a>
        <a href="#skill" className="h-7" onClick={onClick }>
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          Skills
          </div>
        </a>
        <a href="#experience" className="h-7" onClick={onClick }>
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          Experience
          </div>
        </a>
        <a href="#project" className="h-7" onClick={onClick }>
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          Project
          </div>
        </a>
        <a href="#contact" className="h-7" onClick={onClick }>
          <div className="hover:text-secondary  hover:border-secondary transition duration-300">
          Contact
          </div>
        </a>
      </div>
      <InactiveBtn value={"Github"} logo={<i className="fa-brands fa-github"></i>} redirect="https://github.com/jaspreet6090" />
    </nav>
  );
}

export { NavMob, Navbar };
