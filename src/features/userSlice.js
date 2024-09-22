import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uid: '',
    createdAt: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        addUser: (state, action) => {
            const { uid, createdAt, email } = action.payload;
            state.uid = uid;
            state.createdAt = createdAt;
            state.email = email;
        },
        logout: state => {
            Object.assign(state, initialState);
        },
    },
});

export const { addUser, logout } = userSlice.actions;
export default userSlice.reducer;