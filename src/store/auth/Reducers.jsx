import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { post } from "../../helpers/axios";

const initialStates = {
  loginData: {
    loading: false,
    error: false,
    data: {},
    errorMsg: "",
  },
  registerData: {
    loading: false,
    error: false,
    data: {},
    errorMsg: "",
  },
};

// Login Api
export const loginApi = createAsyncThunk(
  "loginApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await post("login", data);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Register Api
export const registerApi = createAsyncThunk(
  "registerApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await post("register", data);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialStates,
  extraReducers: {
    [loginApi.pending]: (state) => {
      state.loginData.loading = true;
    },
    [loginApi.fulfilled]: (state, action) => {
      state.loginData.loading = false;
      state.loginData.error = false;
      state.loginData.data = action.payload.data;
    },
    [loginApi.rejected]: (state) => {
      state.loginData.loading = false;
      state.loginData.error = true;
    },

    [registerApi.pending]: (state) => {
      state.registerData.loading = true;
    },
    [registerApi.fulfilled]: (state, action) => {
      state.registerData.loading = false;
      state.registerData.error = false;
      state.registerData.data = action.payload.data;
    },
    [registerApi.rejected]: (state) => {
      state.registerData.loading = false;
      state.registerData.error = true;
    },
  },
});

export const getRegisterDetail = createSelector(
  (state) => state.auth,
  (item) => item
);

const { reducer } = authSlice;
export default reducer;
