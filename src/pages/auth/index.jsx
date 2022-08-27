import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";

const AuthRoute = () => {
  return (
    <Routes>
      <Route index exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
};

export default AuthRoute;
