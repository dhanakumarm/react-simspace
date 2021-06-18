import React from "react";

const SearchField = ({ id, name, placeholder, onSearch }) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};

export default SearchField;
