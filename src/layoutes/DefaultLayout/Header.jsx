import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname;

  return (
    <nav className="bg-white py-2 md:py-4 shadow">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl text-indigo-600">LOGO</p>
        </div>
        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <div
            to="#"
            className={`${
              pathName === "/dashboard/dashboard"
                ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            }`}
            onClick={() => navigate("/dashboard/dashboard")}
          >
            Dashboard
          </div>
          <div
            to="#"
            className={`${
              pathName === "/dashboard/home"
                ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            } `}
            onClick={() => navigate("/dashboard/home")}
          >
            Home
          </div>
          <div
            to="#"
            className={`${
              pathName === "/dashboard/blog"
                ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            } `}
            onClick={() => navigate("/dashboard/blog")}
          >
            Blog
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
