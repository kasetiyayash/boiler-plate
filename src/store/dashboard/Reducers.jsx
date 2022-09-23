import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { get } from "../../helpers/axios";

const initialStates = {
  platesData: {
    loading: false,
    error: false,
    data: {},
    errorMsg: "",
  },
};

// ** Get Plates Dashboard Api
export const getPlatesApi = createAsyncThunk(
  "getPlatesApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await get(`/dashboard`, data);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialStates,
  extraReducers: {
    [getPlatesApi.pending]: (state) => {
      state.platesData.loading = true;
    },
    [getPlatesApi.fulfilled]: (state, action) => {
      state.platesData.data = action.payload.data;
      state.platesData.loading = false;
    },
    [getPlatesApi.rejected]: (state) => {
      state.platesData.error = true;
      state.platesData.loading = false;
    },
  },
});

export const getRegisterDetail = createSelector(
  (state) => state.dashboard,
  (item) => item
);

const { reducer } = dashboardSlice;
export default reducer;
