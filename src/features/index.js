import { combineReducers } from 'redux';

import userSlice from './userSlice';
import projectSlice from './projectSlice';

const rootReducer = combineReducers({
    user: userSlice,
    project: projectSlice
});

export default rootReducer;