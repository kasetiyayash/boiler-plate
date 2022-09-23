import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/Reducers"; // auth reducer
import dashboardReducer from "./dashboard/Reducers"; // dashboard reducer

const rootReducer = {
  auth: authReducer,
  dashboard: dashboardReducer,
};

export default configureStore({
  reducer: rootReducer,
});
