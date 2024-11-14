import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    id: '',
    userNumber: 0,
    email: '',
    role: '',

    title: 'Ingresar',
    url: '/login',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.id = action.payload.id;
            state.userNumber = action.payload.userNumber;
            state.email = action.payload.email;
            state.role = action.payload.role;

            state.title = "Consola";
            state.url = "/console";
        },
        logout: state => {
            Object.assign(state, initialState);
        },
    },
});

export const {
    login,
    logout
} = userSlice.actions;
export default userSlice.reducer;
