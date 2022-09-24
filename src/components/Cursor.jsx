import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        className="main-cursor"
        style={{
          left: position.x + "px",
          top: position.y + "px",
        }}
      />
      <div
        className="cursor"
        style={{
          left: position.x + "px",
          top: position.y + "px",
        }}
      >
        <div className="colorOne"></div>
        <div className="colorTwo"></div>
        <div className="colorThree"></div>
      </div>
    </>
    // </div>
  );
};

export default Cursor;
