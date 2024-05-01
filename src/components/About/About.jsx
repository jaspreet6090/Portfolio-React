import {description} from '../../costant';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="text-center my-10">
      <motion.h2 
      //add onscroll animations
      className="text-secondary text-3xl  font-bold sm:text-4xl"> About</motion.h2>
      <motion.p className="text-gray-400 text-lg mt-5 text-justify sm:text-xl">

        {description}
        {description}
      </motion.p>
    </section>
  )
}

export default About