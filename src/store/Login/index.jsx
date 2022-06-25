import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    submitLogin: (state, action) => {
      Cookies.set("token", action.payload, { expires: 2 });
      return { ...state, token: action.payload };
    },
  },
});

export const { submitLogin } = loginReducer.actions;

export default loginReducer.reducer;
