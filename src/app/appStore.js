import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { postApi } from './appQuery';

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postApi.middleware),
});
