import { fetchBreedImages } from "../services/api/api";
import { breedImgActions } from "./breed-image-slice";

export const getBreedImages = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchBreedImages(id);

      if (!response.ok) {
        throw new Error("Could not fetch breed images data!");
      }

      const apiData = await response.json();
      const result = apiData.message;

      dispatch(
        breedImgActions.getImagesByBreed({
          images: result,
        })
      );
    } catch (error) {
      dispatch(
        breedImgActions.hasError({
          errors: error.message,
          images: [],
        })
      );
    }
  };
};
