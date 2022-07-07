import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  interval: 1500000,
};
const changeInterval = (state, action) => {
  state.interval = action.payload.interval;
};

const counterSlice = createSlice({
  name: "timer",
  initialState: counterInitialState,
  reducers: {
    changeInterval,
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
