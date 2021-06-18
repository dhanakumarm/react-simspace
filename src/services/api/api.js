import { API_SERVER_URL } from "../../constants";

export const fetchAllBreeds = async () => {
  const response = await fetch(`${API_SERVER_URL}/breeds/list/all`);
  return response;
};

export const fetchBreedImages = async (id) => {
  const response = await fetch(`${API_SERVER_URL}/breed/${id}/images`);
  return response;
};
