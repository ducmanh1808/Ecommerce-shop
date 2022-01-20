import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        loginError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state) => {
            state.currentUser = null;
        }
    }
})

export const { loginStart, loginSuccess, loginError, logOut } = userSlice.actions;
export default userSlice.reducer ;