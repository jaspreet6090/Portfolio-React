import Profile_Pic from '../../assets/profile_pic.png'
import { name, title } from '../../costant.js'
import ActiveBtn from '../Buttons/ActiveBtn.jsx'
import Typed from 'typed.js';
import React from 'react'
import { motion } from 'framer-motion';

const Main = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: title,
      loop: true,
      typeSpeed: 80,
      backSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main
      className='h-1/2   flex mb-10 text-white  py-4 sm:flex-row flex-col-reverse items-center '>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 }
        }}
        className="flex-1 ">
        <div className="flex  gap-2  mx-auto justify-center  flex-col   mb-4 ">
          <div className="text-3xl font-extrabold sm:text-5xl">Hii! I am&nbsp;
            <span className='text-secondary inline-block'>{name} </span>
          </div>
          <div className="">
            <p className="text-2xl sm:text-4xl " >
              And I am a&nbsp;
              <span className='text-secondary
              '  ref={el}></span>
            </p>
          </div>


        </div>
        <div className="flex gap-4 ">
          <ActiveBtn value="Resume" logo={<i class="fa-solid fa-file"></i>} redirect="https://drive.google.com/file/d/1iHOoH0hegZ6Fo8pKpj9QqGovKvM15sVA/view?usp=sharing"/>
          <ActiveBtn value="Contact" logo={<i class="fa-solid fa-message"></i>} redirect="#contact"/>
        </div>
      </motion.div>

      <motion.div className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={Profile_Pic} alt="Profile Pic" className='h-[300px] sm:h-[350px] lg:h-[425px]  hover:scale-110 transition duration-500 ease-in-out' />
      </motion.div>
    </main>
  )
}

export default Main
