import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button></button>
    </div>
  );
};

export default Search;
