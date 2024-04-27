import React from 'react';
import { BrowserRouter as Router, NavLink ,Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ActiveBtn from '../Buttons/ActiveBtn';

const Navbar = () => {
  const [showMenu , setShowMenu] = React.useState(false)

  return (
      <Router>
    <div className='flex justify-between items-center  pl-4 pr-4 text-lg mt-4 mb-4 h-12 text-white'>
      <Link to="/">
        <img src={logo} alt="" className='h-20' />
      </Link>

      <div className='flex gap-2' >
        <NavLink to="#" className='mr-4'  >Home</NavLink>
        <NavLink to="#about" className='mr-4'>About</NavLink>
        <NavLink to="#contact" className='mr-4'>Contact</NavLink>
        <NavLink to="#services" className='mr-4'>Services</NavLink>
        <NavLink to="#blog" className='mr-4'>Blog</NavLink>
      </div>
      <ActiveBtn value="Github"/>
      </div>
    
    </Router>
  );
}

export default Navbar;
