import { createSlice } from "@reduxjs/toolkit";

const breedImgSlice = createSlice({
  name: "breed-images",
  initialState: {
    imgloading: false,
    images: [],
    isError: false,
    errors: [],
  },
  reducers: {
    getImagesByBreed(state, action) {
      state.images = action.payload.images;
      state.imgloading = true;
    },

    hasError: (state, action) => {
      state.errors = action.payload.errors;
      state.imgloading = false;
      state.isError = true;
    },
  },
});

export const breedImgActions = breedImgSlice.actions;

export default breedImgSlice;
