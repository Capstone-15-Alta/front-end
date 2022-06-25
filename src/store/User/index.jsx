import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Cookies.set("token", action.payload, { expires: 2 });
      return { ...state, token: action.payload };
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
