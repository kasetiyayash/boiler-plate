import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { post } from "../../helpers/axios";

const initialStates = {
  loading: null,
  error: null,
  registerData: {},
};

export const loginApi = createAsyncThunk(
  "register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await post("auth/register", data);
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
      state.loading = "loading";
    },
    [loginApi.fulfilled]: (state, action) => {
      state.loading = "success";
      state.registerData = action.payload;
    },
    [loginApi.rejected]: (state, action) => {
      state.loading = "fail";
      state.error = action.payload.errorMessage;
    },
  },
});

export const getRegisterDetail = createSelector(
  (state) => state.auth,
  (item) => item
);

const { reducer } = authSlice;
export default reducer;
