import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,

    title: 'Ingresar',
    url: '/login',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;

            state.title = "Consola";
            state.url = "/console";
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;

            state.title = "Ingresar";
            state.url = "/login";
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
