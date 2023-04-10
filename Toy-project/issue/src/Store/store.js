import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../Reducer/index';

export const store = configureStore({
  reducer: rootReducer,
});
