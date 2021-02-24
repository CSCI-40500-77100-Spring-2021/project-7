import React from "react";
import "./SearchBar.css";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      name="SearchBar"
      id="SearchBar"
      placeholder="Enter stock ticker here"
    />
  );
};

export default SearchBar;