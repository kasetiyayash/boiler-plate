import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("access_token");
  return (
    <>
      <>{isAuthenticated ? null : <Navigate to="/" />}</>
    </>
  );
};

export default ProtectedRoute;
