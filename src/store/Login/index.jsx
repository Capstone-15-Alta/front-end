import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    submitLogin: (state, action) => {
      return { ...state, token: action.payload };
    },
  },
});

export const { submitLogin } = loginReducer.actions;

export default loginReducer.reducer;
