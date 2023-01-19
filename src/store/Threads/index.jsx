import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const saveThread = createAsyncThunk(
  "threads/saveThread",
  async ({ formData, token }) => {
    const response = await axios.post(
      "http://8.219.84.81/api/v1/thread",
      {
        formData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

const threadEntity = createEntityAdapter({
  selectId: (thread) => thread.id,
});

export const threadsReducer = createSlice({
  name: "threads",
  initialState: threadEntity.getInitialState(),
  extraReducers: {
    [saveThread.fulfilled]: (state, action) => {
      threadEntity.addOne(state, action.payload);
    },
  },
});

export const threadSelectors = threadEntity.getSelectors(
  (state) => state.thread
);
export default threadsReducer.reducer;
