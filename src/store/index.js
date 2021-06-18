import { configureStore } from "@reduxjs/toolkit";

import breedSlice from "./breed-slice";
import breedImgSlice from "./breed-image-slice";

export default configureStore({
  reducer: {
    breed: breedSlice.reducer,
    breedImg: breedImgSlice.reducer,
  },
});
