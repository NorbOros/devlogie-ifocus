import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interval: 1500000,
  isRunning: false,
};

const changeInterval = (state, action) => {
  state.interval = parseInt(action.payload);
};

const changeStatus = (state) => {
  state.isRunning = !state.isRunning;
};

const counterSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    changeInterval,
    changeStatus
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
