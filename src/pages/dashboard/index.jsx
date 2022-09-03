import { motion } from "framer-motion";
import React from "react";
import ReactLogo from "../../assets/img/react.png";
import VueLogo from "../../assets/img/vue.png";
import SvelteLogo from "../../assets/img/svelte.png";
import AngularLogo from "../../assets/img/angular.png";
import NextLogo from "../../assets/img/next.png";
import NuxtLogo from "../../assets/img/nuxt.png";
import { useNavigate } from "react-router-dom";

const Card = ({ logo }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => setTimeout(() => navigate("/react"), 0)}
      className="h-[300px] w-[350px] md:h-[250px] md:w-[250px] xl:h-[200px] xl:w-[200px] flex justify-center items-center bg-white p-4 xl:p-6 rounded-2xl bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-xl shadow-sky-200"
      initial={{ scale: 1.5 }}
      animate={{
        scale: 1,
        transition: { duration: 0.2 },
      }}
      whileHover={{
        padding: "16px",
        borderRadius: "100%",
        transition: { duration: 0.2 },
      }}
    >
      <motion.img
        src={logo}
        alt="React Logo"
        className="h-full w-full object-contain"
        whileTap={{
          scale: 10,
          opacity: 0,
          transition: { duration: 0.2 },
        }}
      />
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div className="p-8 md:p-12 flex justify-center items-center flex-wrap gap-8">
      <Card logo={ReactLogo} />
      <Card logo={NextLogo} />
      <Card logo={VueLogo} />
      <Card logo={NuxtLogo} />
      <Card logo={SvelteLogo} />
      <Card logo={AngularLogo} />
    </div>
  );
};

export default Dashboard;
