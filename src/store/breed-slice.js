import { createSlice } from "@reduxjs/toolkit";

import { getTopDefaultData, getFilteredBreeds } from "../utils/commonFunctions";

const breedSlice = createSlice({
  name: "breed",
  initialState: {
    defaultAllBreeds: [],
    breeds: [],
    loading: true,
    isError: false,
    errors: [],
  },
  reducers: {
    allBreeds(state, action) {
      state.breeds = getTopDefaultData(action.payload.breeds);
      state.defaultAllBreeds = action.payload.breeds;
      state.loading = false;
    },

    searchBreeds(state, action) {
      const exists = state.defaultAllBreeds;
      if (action.payload.search) {
        const filtered = getFilteredBreeds(exists, action.payload.search);
        state.breeds = getTopDefaultData(filtered);
      } else {
        state.breeds = getTopDefaultData(exists);
      }

      state.loading = false;
    },

    hasError: (state, action) => {
      state.errors = action.payload.errors;
      state.loading = false;
      state.isError = true;
    },
  },
});

export const breedActions = breedSlice.actions;

export default breedSlice;
