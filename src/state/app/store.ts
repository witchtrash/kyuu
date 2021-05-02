import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imageReducer from 'state/image';

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
