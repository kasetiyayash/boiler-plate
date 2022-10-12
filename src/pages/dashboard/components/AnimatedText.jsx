import React from 'react'
import { motion } from "framer-motion";

const AnimatedText = (props) => {
  const letters = Array.from(props.text);
  console.log(letters);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: props.duration,
        delayChildren: i * props.delay,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      x: 100,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.p key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedText;