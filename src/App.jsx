import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <React.StrictMode>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
      {/* </Provider> */}
    </>
  );
};

export default App;
