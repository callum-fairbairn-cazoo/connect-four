import { configureStore } from '@reduxjs/toolkit';
import { boardStateReducer } from './boardState'

export const store = configureStore({
  reducer: {
    boardState: boardStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
