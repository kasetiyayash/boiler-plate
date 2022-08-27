import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("access_token");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <></>
    </>
  );
};

export default ProtectedRoute;
