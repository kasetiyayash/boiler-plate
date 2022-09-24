import React from "react";
import { motion } from "framer-motion";
import {
  AngularJS,
  CRA,
  NextJS,
  NuxtJS,
  ReactJS,
  ViteJS,
  VueJS,
} from "../../assets/allSvg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Popular = () => {
  // const { platesData, isLoading, isError } = useSelector((store) => ({
  //   platesData: store?.dashboard?.platesData,
  //   isLoading: store?.dashboard?.platesData?.loading,
  //   isError: store?.dashboard?.platesData?.error,
  // }));
  // console.log("==platesData==", platesData);

  const Card = ({ logo }) => {
    const navigate = useNavigate();
    return (
      <motion.div
        onClick={() => setTimeout(() => navigate("/react"), 0)}
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
    <div className="min-h-screen flex flex-col justify-center items-centers text-center">
      <p className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8">
        Popular Plates
      </p>
      <div className="p-6 md:px-4 lg:p-12 grid grid-cls-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <Card logo={<ReactJS width="150" height="150" />} />
        <Card logo={<NextJS width="150" height="150" />} />
        <Card logo={<VueJS width="150" height="150" />} />
        <Card logo={<NuxtJS width="150" height="150" />} />
        <Card logo={<AngularJS width="150" height="150" />} />
      </div>
    </div>
  );
};

export default Popular;
