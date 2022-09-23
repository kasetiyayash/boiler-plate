import React from "react";
import Popular from "./Popular";

import Review from "./Review";
import Suggestion from "./Suggestion";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-screen flex flex-col items-center justify-center text-[150px] font-bold text-black">
        <p>Be Lazy</p>
        <p>Be Productive</p>
      </div>

      <Popular />

      <Suggestion />

      {/* <Review /> */}
    </div>
  );
};

export default Dashboard;
