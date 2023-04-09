import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cocktail from "./components/cocktail/Cocktail";
import drinks from "./data/cocktails.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Cocktail drinks={drinks} />
    </div>
  );
}

export default App;
