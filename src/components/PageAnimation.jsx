import React from 'react'
import { motion } from "framer-motion";

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation