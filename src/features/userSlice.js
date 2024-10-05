import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,

    id: '',
    createdAt: '',
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

            state.id = action.payload;
            state.createdAt = action.payload;
            state.email = action.payload;
            state.role = action.payload;

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