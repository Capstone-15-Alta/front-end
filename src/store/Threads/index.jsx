import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4(),
    title: "SELAMAT DATANG DI WONDERFUL BANTEN",
    subtitle:
      "Keindahan alam yang diakui Dunia dapat kamu lihat di Provinsi Banten",
    description:
      "Keindahan alam yang dimiliki Provinsi Banten menjadikannya sebagai wilayah yang masuk rekomendasi untuk dikunjungi saat liburan. Memiliki Pantai, Gunung, Tempat Bersejarah dan Wahana Atraksi yang ada di Provinsi Banten yang siap kalian kunjungi kapan saja.",
  },
];

export const threadsReducer = createSlice({
  name: "threads",
  initialState: {
    threads: initialValue,
  },
  reducers: {
    submitThread: (state, action) => {
      state.threads = [...state.threads, action.payload];
    },
    handleDelete: (state, action) => {
      state.threads = state.threads.filter(
        (thread) => thread.id !== action.payload
      );
    },
    handleUpdate: (state, action) => {
      state.threads = state.threads.map((thread) => {
        if (thread.id === action.payload) {
          thread.completed = !thread.completed;
        }
        return thread;
      });
    },
  },
});

export const { submitThread, handleDelete, handleUpdate } =
  threadsReducer.actions;

export default threadsReducer.reducer;
