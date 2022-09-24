import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LazyLoader from "../components/LazyLoader";
import AuthLayout from "../layout/AuthLayout";
import DefaultLayout from "../layout/DefaultLayout";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard";
import ReactJS from "../pages/react";
import { AnimatePresence } from "framer-motion";

const AuthRoute = () => {
  return (
    <Routes>
      <Route index exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
};

const DefaultRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/react" element={<ReactJS />} />
    </Routes>
  );
};

const AppRoutes = () => {
  const Protected = () => {
    return (
      <>
        <ProtectedRoute />
        <DefaultLayout />
      </>
    );
  };

  return (
    <Suspense fallback={<LazyLoader />}>
      <AnimatePresence>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/auth/*" element={<AuthRoute />} />
          </Route>
          <Route element={<Protected />}>
            <Route path="/*" element={<DefaultRoute />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
