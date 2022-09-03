import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { post } from "../../helpers/axios";

const initialStates = {
  loading: false,
  error: false,
  loginData: {},
  registerData: {},
};

// Login Api
export const loginApi = createAsyncThunk(
  "login",
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
  "register",
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
    [loginApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [loginApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginData = action.payload;
    },
    [loginApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    [registerApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [registerApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.registerData = action.payload;
    },
    [registerApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const getRegisterDetail = createSelector(
  (state) => state.auth,
  (item) => item
);

const { reducer } = authSlice;
export default reducer;
