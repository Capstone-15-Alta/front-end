import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Login";
/** Reducer */
import threadsReducer from "./Threads";

export default configureStore({
  reducer: {
    threads: threadsReducer,
    login: loginReducer,
  },
});
