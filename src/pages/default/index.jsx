import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

const DefaultRoute = () => {
  return (
    <Routes>
      <Route index path="" element={<Home />} />
      <Route path="home" element={<Dashboard />} />
    </Routes>
  );
};

export default DefaultRoute;
