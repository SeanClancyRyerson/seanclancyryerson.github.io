import React, { useState } from "react";
import "./Cocktail.css";
import drinks from "../../data/cocktails.json";

const Cocktail = () => {
  //
  return (
    <div className="drink-section">
      {drinks.map((drink) => {
        return (
          <div key={drink.id} className="drink-container">
            <div>
              <img
                className="drink-image-container"
                src={drink.image}
                alt={drink.name}
              />
            </div>
            <div className="drink-information-section">
              <div className="drink-header">
                <div>{drink.name}</div>
                <div>{drink.glassware}</div>
              </div>
              <div>{drink.description}</div>
              <div className="drink-ingredients-steps">
                <ul>
                  {drink.ingredients.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>;
                  })}
                </ul>
                <ol>
                  {drink.directions.map((step) => {
                    return <li key={step}>{step}</li>;
                  })}
                </ol>
              </div>
              <div>{drink.notes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktail;
