import { combineReducers } from '@reduxjs/toolkit';
import { postApi } from './appQuery';

export const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});
