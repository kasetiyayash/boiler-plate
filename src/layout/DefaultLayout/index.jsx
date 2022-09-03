import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import PageAnimation from "../../components/PageAnimation";

const index = () => {
  return (
    <div className="p-2">
      <PageAnimation>
        <Header />
        {/* <div className="min-h-[86vh]"> */}
        <Outlet />
        {/* </div> */}
        {/* <Footer /> */}
      </PageAnimation>
    </div>
  );
};

export default index;
