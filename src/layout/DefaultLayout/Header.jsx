import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="text-black font-bold px-12 py-8 flex justify-between">
      <p className="text-5xl" onClick={() => navigate("/dashboard")}>
        Boiler
      </p>
      <div className="flex text-xl gap-5 items-center">
        {/* <p className="border-2 border-black rounded-lg px-4 py-2">Create</p> */}
        <p>Plates</p>
        <p>Popular</p>
        <p>Trending</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Header;
