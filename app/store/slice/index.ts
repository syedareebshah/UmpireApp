/*
 * combines all th existing reducers
 */

import userSlice from './userSlice';
import {combineReducers} from '@reduxjs/toolkit';
import appSlice from './appSlice';

const reducers = {
  user: userSlice,
  app: appSlice,
};

// Exports

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
