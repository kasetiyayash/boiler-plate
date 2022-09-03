import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/reducers"; // auth reducer

const rootReducer = {
  auth: authReducer,
};

export default configureStore({
  reducer: rootReducer,
});
