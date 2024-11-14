import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    projectNumber: 0,
    token: '',
    dbName: '',
    plan: 'Plan Auth'
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        registerProject: (state, action) => {
            const { name, projectNumber, token, dbName } = action.payload;
            state.name = name;
            state.projectNumber = projectNumber;
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
