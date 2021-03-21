import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setTicker, ticker }) => {
  const onChangeTicker =(e)=>{
   
    setTicker(e.target.value);
  }
  return (
    <div>
    <input
      type="text"
      name="SearchBar"
      id="SearchBar"
      placeholder="Enter stock ticker here"
      value={ticker}
     onBlur={onChangeTicker}
    />
    <input type='button' value='Update'  onClick={onChangeTicker}/>
    </div>
  );
};

export default SearchBar;
