import { Navbar, NavMob } from '../Navbar/Navbar'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from "framer-motion"

import InactiveBtn from '../Buttons/InactiveBtn';
const Header = () => {
  const [click, setClick] = useState(false);


  const onClick = () => {
    setClick(!click);
  };
  return (
    <Router>
      <header className='flex  justify-between items-center text-center h-15  bg-bgColor py-5  lg:mx-28 p-4 sm:mx-3'>
        <a href="#"
          className='text-secondary text-4xl font-bold '>
         
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} >JS</motion.div>
        </a>
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
        <InactiveBtn value="Github" logo={<i className="fa-brands fa-github"></i>} redirect="https://github.com/jaspreet6090" />
        </div>
      </header>

    </Router>
  )
}

export default Header
