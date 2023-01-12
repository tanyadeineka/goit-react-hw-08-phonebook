import { createSlice } from "@reduxjs/toolkit";
import { getUser, register, login, logout } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: '',
    email: '',
    token: null,
    isAuth: false,
    isLoading: false,
  },
  extraReducers: {
    [getUser.pending](state) {
      state.isLoading = true;
    },
    [getUser.fulfilled](state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuth = true;
      state.isLoading = false;
    },
    [getUser.rejected](state) {
      state.token = null;
      state.name = '';
      state.email = '';
      state.isLoading = false;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [register.rejected](state) {
      state.isLoading = false;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.rejected](state) {
      state.isLoading = false;
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state, action) {
      state.name = '';
      state.email = '';
      state.token = '';
      state.isAuth = false;
      state.isLoading = false;
    },
    [logout.rejected](state) {
      state.isLoading = false;
    },
  }
});

export const authReducer = authSlice.reducer;