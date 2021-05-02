import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  [key: string]: File;
}

interface Image {
  key: string;
  image: File;
}

const initialState: ImageState = {};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<Image>) => {
      state[action.payload.key] = action.payload.image;
    },
    removeImage: (state, action: PayloadAction<Image>) => {
      delete state[action.payload.key];
    },
  },
});

export const { setImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
