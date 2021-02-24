import React from "react";
import "./SearchBar.css";

const SearchBar = ({ keyword }) => {
  return (
    <input
      type="text"
      name="SearchBar"
      id="SearchBar"
      placeholder="Enter stock ticker here"
      value={keyword}
    />
  );
};

export default SearchBar;