import { motion } from "framer-motion";
import React from "react";

import { useNavigate } from "react-router-dom";
import { AngularJS, CRA, NextJS, NuxtJS, ReactJS, ViteJS, VueJS } from "../../assets/allSvg";

const Card = ({ logo }) => {
  const navigate = useNavigate();
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

const Dashboard = () => {
  return (
    <div className="p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8">
      <Card logo={<ViteJS width="150" height="150" />} />
      <Card logo={<ReactJS width="150" height="150" />} />
      <Card logo={<NextJS width="150" height="150" />} />
      <Card logo={<NuxtJS width="150" height="150" />} />
      <Card logo={<VueJS width="150" height="150" />} />
      <Card logo={<AngularJS width="150" height="150" />} />
      <Card logo={<CRA width="150" height="150" />} />
    </div>
  );
};

export default Dashboard;
