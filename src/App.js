import React, { useState, Component } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./App.css";
import "./styles/Header.css";
import "./styles/Search.css";
import Cocktail from "./components/cocktail/Cocktail";

import drinks from "./data/cocktails.json";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="App">
      <div className="header-section">
        <div className="header-title">
          <h2>cocktails.js</h2>
          <h2>cocktails.js</h2>
        </div>
        <div>
          <div className="search-container">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
            />
            <button>
              <Icon path={mdiMagnify} size={0.7} />
            </button>
          </div>
        </div>
        <img className="logo-icon" src="./logo512.png" />
      </div>
      <Cocktail drinks={filteredDrinks} />
    </div>
  );
}

export default App;
