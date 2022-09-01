import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="bg-gradient-radial from-[#FFFFFF] to-[#D58993] h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default index;
