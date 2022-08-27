import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const index = () => {
  return (
    <>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="h-screen">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default index;
