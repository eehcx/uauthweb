import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    token: '',
    dbName: '',
    plan: 'Plan Auth'
}

export const projectSlice = createSlice({
    name: 'project',
    initialState, 
    reducers: {
        registerProject: (state, action) => {
            const { name, token, dbName } = action.payload;
            state.name = name;
            state.token = token;
            state.dbName = dbName;
        },
        clear: state => {
            Object.assign(state, initialState);
        },
    },
});

export const { 
    registerProject, 
    clear 
} = projectSlice.actions;
export default projectSlice.reducer;