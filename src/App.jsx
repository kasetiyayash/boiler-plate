import React from "react";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/Cursor";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
