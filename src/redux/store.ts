import { configureStore } from '@reduxjs/toolkit';
import { boardStateReducer } from './boardState'
import { turnReducer } from './turn'

export const store = configureStore({
  reducer: {
    boardState: boardStateReducer,
    turn: turnReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
