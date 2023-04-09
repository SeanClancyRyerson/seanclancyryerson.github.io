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
  const [spiritBrandy, setSpiritBrandy] = useState(true);
  const [spiritGin, setSpiritGin] = useState(true);
  const [spiritMezcal, setSpiritMezcal] = useState(true);
  const [spiritRum, setSpiritRum] = useState(true);
  const [spiritTequila, setSpiritTequila] = useState(true);
  const [spiritVodka, setSpiritVodka] = useState(true);
  const [spiritWhiskey, setSpiritWhiskey] = useState(true);
  const [spiritWine, setSpiritWine] = useState(true);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleBrandy = (e) => {
    setSpiritBrandy(!spiritBrandy);
  };

  const toggleGin = (e) => {
    setSpiritGin(!spiritGin);
  };

  const toggleMezcal = (e) => {
    setSpiritMezcal(!spiritMezcal);
  };

  const toggleRum = (e) => {
    setSpiritRum(!spiritRum);
  };

  const toggleTequila = (e) => {
    setSpiritTequila(!spiritTequila);
  };

  const toggleVodka = (e) => {
    setSpiritVodka(!spiritVodka);
  };

  const toggleWhiskey = (e) => {
    setSpiritWhiskey(!spiritWhiskey);
  };

  const toggleWine = (e) => {
    setSpiritWine(!spiritWine);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return (
      drink.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      ((spiritBrandy && drink.spirit == "brandy") ||
        (spiritGin && drink.spirit == "gin") ||
        (spiritMezcal && drink.spirit == "mezcal") ||
        (spiritRum && drink.spirit == "rum") ||
        (spiritTequila && drink.spirit == "tequila") ||
        (spiritVodka && drink.spirit == "vodka") ||
        (spiritWhiskey && drink.spirit == "whiskey") ||
        (spiritWine && drink.spirit == "wine"))
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
          <input
            id="brandy"
            type="checkbox"
            checked={spiritBrandy}
            onChange={toggleBrandy}
          ></input>
          <label htmlFor="brandy">Brandy</label>
        </div>
        <div className="input-container">
          <input
            id="gin"
            type="checkbox"
            checked={spiritGin}
            onChange={toggleGin}
          ></input>
          <label htmlFor="gin">Gin</label>
        </div>
        <div className="input-container">
          <input
            id="mezcal"
            type="checkbox"
            checked={spiritMezcal}
            onChange={toggleMezcal}
          ></input>
          <label htmlFor="mezcal">Mezcal</label>
        </div>
        <div className="input-container">
          <input
            id="rum"
            type="checkbox"
            checked={spiritRum}
            onChange={toggleRum}
          ></input>
          <label htmlFor="rum">Rum</label>
        </div>
        <div className="input-container">
          <input
            id="tequila"
            type="checkbox"
            checked={spiritTequila}
            onChange={toggleTequila}
          ></input>
          <label htmlFor="tequila">Tequila</label>
        </div>
        <div className="input-container">
          <input
            id="vodka"
            type="checkbox"
            checked={spiritVodka}
            onChange={toggleVodka}
          ></input>
          <label htmlFor="vodka">Vodka</label>
        </div>
        <div className="input-container">
          <input
            id="whiskey"
            type="checkbox"
            checked={spiritWhiskey}
            onChange={toggleWhiskey}
          ></input>
          <label htmlFor="whiskey">Whiskey</label>
        </div>
        <div className="input-container">
          <input
            id="wine"
            type="checkbox"
            checked={spiritWine}
            onChange={toggleWine}
          ></input>
          <label htmlFor="wine">Wine</label>
        </div>
      </div>
      <Cocktail drinks={filteredDrinks} />
    </div>
  );
}

export default App;
