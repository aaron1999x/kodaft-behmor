import React from 'react'
import { motion } from "framer-motion"

const item={
  initial:{
    opacity:0,
    x:-50
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
    }
  },
}

const FeatureItem = ({ icon, text }) => {
  return (
    <motion.div className='flex gap-3 items-center'
      variants={item}
    >
      {icon}
      {text}
    </motion.div>
  );
}

export default FeatureItem