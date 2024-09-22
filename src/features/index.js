import { combineReducers } from 'redux';

import userSlice from './userSlice';
import authSlice from './authSlice';
import projectSlice from './projectSlice';

const rootReducer = combineReducers({
    user: userSlice,
    auth: authSlice,
    project: projectSlice
});

export default rootReducer;