import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setTicker, ticker }) => {
  const onChangeTicker = (e) => {
    setTicker(searchTicker);
    // console.log("change ticker to:", e.target.value);
    // console.log("ticker state", ticker);
  };

  const [searchTicker, setSearchTicker] = useState("");

  return (
    <div className="form-control">
      <label htmlFor="SearchBar">Enter Stock Ticker</label>
      <input
        type="text"
        name="SearchBar"
        id="SearchBar"
        placeholder="Enter stock ticker here"
        value={searchTicker}
        onChange={(e) => setSearchTicker(e.target.value)}
      />
      <input type="submit" aria-label="submit" onClick={onChangeTicker} />
    </div>
  );
};

export default SearchBar;
