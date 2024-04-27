import { Navbar, NavMob } from '../Navbar/Navbar'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from "framer-motion"

import ActiveBtn from '../Buttons/ActiveBtn';
const Header = () => {
  const [click, setClick] = useState(false);


  const onClick = () => {
    setClick(!click);
  };
  return (
    <Router>
      <header className='flex flex-1  justify-between items-center text-center h-15 my-3'>
        <Link to="/"
          className='text-secondary text-4xl font-bold '>
         
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} >JS</motion.div>
        </Link>
        <div className="block sm:hidden "
         initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
        >
          <button onClick={() => setClick(!click)} className="text-2xl text-secondary "  >
            {click ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>} </button>
           <div className={click ? "block" : "hidden"} >
            <NavMob onClick={onClick} />
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
