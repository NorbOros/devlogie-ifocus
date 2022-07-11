import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const changeSanckbarState = (state) => {
    state.open = !state.open;
};

const snackBarSlice = createSlice({
    name: 'sackbar',
    initialState: initialState,
    reducers: {
        changeSanckbarState
    }
});

export const snackBarActions = snackBarSlice.actions;

export default snackBarSlice;