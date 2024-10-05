import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    name: '',
    plan: 'Plan Auth'
}

export const projectSlice = createSlice({
    name: 'project',
    initialState, 
    reducers: {
        registerProject: (state, action) => {
            const { id, name } = action.payload;
            state.id = id;
            state.name = name;
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