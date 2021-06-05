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

  let content = <p>No Records found</p>;

  if (!loading && errors.isError) {
    content = <p>{errors.errors}</p>;
  }

  if (loading && !errors.isError) {
    content = <p>Loading</p>;
  }

  if (!loading && !errors.isError && breedList.length !== 0) {
    content = breedList.map((data, index) => (
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
  if (!loading && !errors.isError && breedList.length === 0) {
    content = <p>No breed matches found!</p>;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default BreedList;
