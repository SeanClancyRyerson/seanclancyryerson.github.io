import React, { useState, Component } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./App.css";
import "./styles/Header.css";
import "./styles/Search.css";
import "./styles/Filter.css";
import Cocktail from "./components/cocktail/Cocktail";

import drinks from "./data/cocktails.json";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [spiritValue, setSpiritValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const changeSpirit = (event) => {
    setSpiritValue(event.target.value);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return (
      drink.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      drink.spirit.includes(spiritValue)
    );
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
      <div className="filter-section">
        <div className="input-container">
          <select id="spirit" onChange={changeSpirit} className="dropdown">
            <option value="">Any Spirit</option>
            <option value="brandy">Brandy</option>
            <option value="gin">Gin</option>
            <option value="mezcal">Mezcal</option>
            <option value="rum">Rum</option>
            <option value="tequila">Tequila</option>
            <option value="vodka">Vodka</option>
            <option value="whiskey">Whiskey</option>
            <option value="wine">Wine</option>
          </select>
        </div>
      </div>
      <Cocktail drinks={filteredDrinks} />
    </div>
  );
}

export default App;
