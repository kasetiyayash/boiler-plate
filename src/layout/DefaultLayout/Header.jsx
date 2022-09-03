import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl">
      <p
        className="pl-4 text-sky-900 text-2xl font-bold"
        onClick={() => navigate("/dashboard")}
      >
        Boiler
      </p>
    </div>
  );
};

export default Header;
