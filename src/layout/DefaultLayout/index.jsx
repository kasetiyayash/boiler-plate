import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import PageAnimation from "../../components/PageAnimation";

const index = () => {
  return (
    <div>
      <PageAnimation>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </PageAnimation>
    </div>
  );
};

export default index;
