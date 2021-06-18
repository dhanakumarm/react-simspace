import { breedActions } from "./breed-slice";
import { fetchAllBreeds } from "../services/api/api";
import { formartArray } from "../utils/commonFunctions";
export const getAllBreeds = () => {
  return async (dispatch) => {
    try {
      const response = await fetchAllBreeds();

      if (!response.ok) {
        throw new Error("Could not fetch breed data!");
      }

      const apiData = await response.json();
      const result = apiData.message;
      const breedsData = formartArray(result);
      breedsData.sort();

      dispatch(
        breedActions.allBreeds({
          breeds: breedsData,
        })
      );
    } catch (error) {
      dispatch(
        breedActions.hasError({
          errors: error.message,
          images: [],
        })
      );
    }
  };
};
