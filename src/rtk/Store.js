import { configureStore } from "@reduxjs/toolkit";
import adviceSlice from "./Slices/advice-slice";
export const store = configureStore({
  reducer: {
    advice: adviceSlice,
  },
});
