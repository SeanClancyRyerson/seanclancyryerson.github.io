import React from "react";
import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-title">
        <h2>cocktails.js</h2>
        <h2>cocktails.js</h2>
      </div>
      <div>
        <Search />
      </div>
      <img className="logo-icon" src="./logo512.png" />
    </div>
  );
};

export default Header;
