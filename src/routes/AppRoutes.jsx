import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LazyloadLoader from "../components/LazyloadLoader";
import AuthLayout from "../layoutes/AuthLayout";
import DefaultLayout from "../layoutes/DefaultLayout";
import AuthRoute from "../pages/auth";
import DefaultRoute from "../pages/default";
import ProtectedRoute from "./ProtectedRoute";

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
    <Suspense fallback={<LazyloadLoader />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/auth/*" element={<AuthRoute />} />
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="dashboard/*" element={<DefaultRoute />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
