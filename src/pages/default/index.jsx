import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Blog from "./Blog";

const DefaultRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route index path="/home" element={<Home />} />
      <Route index path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default DefaultRoute;
