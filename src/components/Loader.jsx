import React, { useEffect } from "react";
import Cloud1 from "../assets/img/cloud1.jpg";
import Cloud2 from "../assets/img/cloud2.jpg";
import Cloud3 from "../assets/img/cloud3.jpg";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img src={Cloud1} alt="cloud1" />
      <img src={Cloud2} alt="cloud2" />
      <img src={Cloud3} alt="cloud3" />
    </div>
  );
};

export default Loader;
