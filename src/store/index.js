import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import snackBarSlice from "./slices/sncackbar-slice";
import taskSlice from "./slices/task-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    task: taskSlice.reducer,
    snackbar: snackBarSlice.reducer
  },
});

export default store;
