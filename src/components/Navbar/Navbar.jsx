import React from 'react';
import { Link } from 'react-router-dom';
import ActiveBtn from '../Buttons/ActiveBtn';

const Navbar = () => {
 
  return (
    <nav className='hidden sm:block'>
      <div className="flex gap-7 text-lg  text-white  ">
      <Link
          to="#"
          className="h-7"
        >
       <div className="hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300">
        Home
       </div>
        </Link>
        <Link
          to="#"
          className="h-7"
        >
       <div className="hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300">
        Home
       </div>
        </Link>
        <Link
          to="#"
          className="h-7"
        >
       <div className="hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300">
        Home
       </div>
        </Link>
        <Link
          to="#"
          className="h-7"
        >
       <div className="hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300">
        Home
       </div>
        </Link>
        <Link
          to="#"
          className="h-7"
        >
       <div className="hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300">
        Home
       </div>
        </Link>
      </div>
    </nav>
  );
}




function NavMob() {
  return (
    <nav className='absolute right-4  bg-bgColor text-white p-5 w-1/3 '>
      <div className='flex flex-col text-lg gap-4   mb-4'>
        <Link><div className="hover:text-secondary  hover:border-secondary transition duration-300">
        Home
       </div></Link>
        <Link><div className="hover:text-secondary  hover:border-secondary transition duration-300">
        Home
       </div></Link>
        <Link><div className="hover:text-secondary  hover:border-secondary transition duration-300">
        Home
       </div></Link>
        <Link><div className="hover:text-secondary  hover:border-secondary transition duration-300">
        Home
       </div></Link>
      </div>
      <ActiveBtn value=<i class="fa-brands fa-github"></i>/>
    </nav>
  );
}

export  {NavMob , Navbar};
