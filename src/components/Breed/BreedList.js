import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BreedButton from "./BreedButton";
import { getAllBreeds } from "../../store/breed-actions";
import { getBreedImages } from "../../store/breed-image-actions";

const BreedList = () => {
  const dispatch = useDispatch();

  const breeds = useSelector((state) => state.breed.breeds);
  const loading = useSelector((state) => state.breed.loading);
  const errors = useSelector((state) => state.breed);

  const [activeBtn, setActiveBtn] = useState("");
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    dispatch(getAllBreeds());
  }, [dispatch]);

  useEffect(() => {
    setBreedList(breeds);
  }, [breeds, dispatch]);

  const breedClickHandler = (event) => {
    setActiveBtn(event.target.value);
    dispatch(getBreedImages(event.target.value));
  };

  if (errors.isError) {
    return <p>No record found</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  if (breedList.length !== 0) {
    return breedList.map((data, index) => (
      <BreedButton
        key={data}
        onClick={breedClickHandler}
        value={data}
        primary={data === activeBtn ? true : false}
      >
        {data}
      </BreedButton>
    ));
  }
  if (breedList.length === 0) {
    return <p>No breed matches found!</p>;
  }
};

export default BreedList;
