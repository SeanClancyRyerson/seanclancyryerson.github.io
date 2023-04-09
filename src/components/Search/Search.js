import React, { useState, Component } from "react";
import "./Search.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button>
        <Icon path={mdiMagnify} size={0.7} />
      </button>
    </div>
  );
};

export default Search;
