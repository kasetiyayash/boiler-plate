import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, []);

  return <></>;
};

export default ProtectedRoute;
