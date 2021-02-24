import React from "react";
import "./SearchBar.css";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      name="searchBar"
      id="searchBar"
      placeholder="search for a company"
    />
  );
};

export default SearchBar;