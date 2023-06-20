import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        // authSuccess: (state) => {
        //     state.isAuth = true
        // },
        authSuccess: state => state.isAuth = true,
        authFailure: state => state.isAuth = false
    }
});

export const {
    authSuccess,
    authFailure
} = authSlice.actions

export default authSlice.reducer;
