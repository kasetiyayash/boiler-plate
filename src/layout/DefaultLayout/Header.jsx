import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed z-10 w-full bg-main bg-opacity-50">
      <div className="relative text-black font-bold px-4 py-3 md:px-12 md:py-8 flex justify-between">
        <p
          className="text-4xl md:text-5xl"
          onClick={() => navigate("/dashboard")}
        >
          Boiler
        </p>
        <div className="hidden md:flex text-xl gap-5 items-center">
          {/* <p className="font-dm">Plates</p> */}
          <p>Plates</p>
          <p>Popular</p>
          <p>Trending</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
