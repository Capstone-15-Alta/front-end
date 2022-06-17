import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import threadsReducer from "./Threads";

export default configureStore({
  reducer: {
    threads: threadsReducer,
  },
});
