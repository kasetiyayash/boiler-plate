import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import PageAnimation from "../../components/PageAnimation";

const index = () => {
  return (
    <div>
      <Header />
      <PageAnimation>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </PageAnimation>
      {/* <Footer /> */}
    </div>
  );
};

export default index;
