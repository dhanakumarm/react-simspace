import React from "react";

import SearchField from "../UI/SearchField";
import { useDispatch } from "react-redux";
import classes from "./Header.module.css";

import { breedActions } from "../../store/breed-slice";

const Header = (props) => {
  const dispatch = useDispatch();

  const searchBreeds = (data) => {
    const input = data;
    dispatch(
      breedActions.searchBreeds({
        search: input,
      })
    );
  };

  const searchEventHandler = (event) => {
    searchBreeds(event.target.value);
  };

  return (
    <header>
      <h1>Dogs!</h1>
      <div className={classes.search}>
        <SearchField
          id="search"
          name="search"
          placeholder="Search"
          onSearch={searchEventHandler}
        />
      </div>
    </header>
  );
};

export default Header;
