import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";

const DefaultRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route index path="/home" element={<Home />} />
    </Routes>
  );
};

export default DefaultRoute;
