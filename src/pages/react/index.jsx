import React from 'react'
import { motion } from "framer-motion";
import { CRA, ViteJS } from '../../assets/allSvg';


const ReactJS = () => {

const Card = ({ logo }) => {
  return (
    <motion.div
      // onClick={() => setTimeout(() => navigate("/react"), 0)}
      initial={{ scale: 1.5 }}
      className="p-12 flex justify-center items-center bg-main rounded-2xl drop-shadow-md hover:drop-shadow-lg  border-black"
      animate={{
        scale: 1,
        transition: { duration: 0.2 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 5,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      {logo}
    </motion.div>
  );
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-centers">
      <p className="font-bold text-7xl mb-8">React Tech Stack</p>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex gap-4 justify-center items-center">
          <Card logo={<ViteJS width="150" height="150" />} />
          <Card logo={<CRA width="150" height="150" />} />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Card logo={<ViteJS width="150" height="150" />} />
          <Card logo={<CRA width="150" height="150" />} />
        </div>
      </div>
    </div>
  );
};

export default ReactJS;