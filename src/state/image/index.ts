import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/app/store';

interface ImageState {
  [key: string]: {
    original: string;
    crop?: string;
  };
}

interface Image {
  key: string;
  image: string;
}

const initialState: ImageState = {};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<Image>) => {
      state[action.payload.key] = {
        original: action.payload.image,
      };
    },
    removeImage: (state, action: PayloadAction<Image>) => {
      delete state[action.payload.key];
    },
    setCrop: (state, action: PayloadAction<Image>) => {
      state[action.payload.key].crop = action.payload.image;
    },
  },
});

const imageSelector = (state: RootState) => state.image;

export const imageKeySelector = createSelector(imageSelector, images =>
  Object.keys(images).sort()
);

export const { setImage, removeImage, setCrop } = imageSlice.actions;

export default imageSlice.reducer;
