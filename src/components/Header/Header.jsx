import {Navbar , NavMob} from '../Navbar/Navbar'
import {BrowserRouter as Router ,Link } from 'react-router-dom';
import React, { useState } from 'react';

import ActiveBtn from '../Buttons/ActiveBtn';
const Header = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(true);

  return (
    <Router>
    <header className='flex flex-1  justify-between items-center text-center h-15 my-3'> 
    <Link to="/" 
     className='text-secondary text-4xl font-bold '>
        JS
      </Link>





      <div className="block sm:hidden ">
        <button onClick={() => setClick(!click)} className="text-2xl text-secondary "  >
       {click ? <i class="fa-solid fa-xmark"></i> :<i class="fa-solid fa-bars"></i>  } </button>

       <div className= {click ? "block" : "hidden"} >

         <NavMob />
       </div>
      </div>


      <Navbar />
     <div className="hidden sm:block">
          <ActiveBtn value="Github " />
        </div>
    </header>

    </Router>
  ) 
}

export default Header
