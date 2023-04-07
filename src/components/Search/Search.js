import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
