import React from "react";

const SearchField = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onSearch}
    />
  );
};

export default SearchField;
