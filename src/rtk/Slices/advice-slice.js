import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdvice = createAsyncThunk(
  "adviceSlice/fetchAdvice",
  async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data.slip;
  }
);

const adviceSlice = createSlice({
  name: "adviceSlice",
  initialState: {
    id: "1",
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and take action.",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdvice.pending, (state, action) => {
      return "pending";
    });
    builder.addCase(fetchAdvice.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAdvice.rejected, (state, action) => {
      return "rejected";
    });
  },
});

export default adviceSlice.reducer;
