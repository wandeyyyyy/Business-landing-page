import React from 'react'
import {motion} from 'framer-motion'
const Button = ({styles}) => {
  return (
   <motion.button
   whileHover={{scale:1.05}}
   whileTap={{scale:0.95, rotate: "-2.5deg"}}
    type='button' 
    className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
Get Started
   </motion.button>
  )
}

export default Button