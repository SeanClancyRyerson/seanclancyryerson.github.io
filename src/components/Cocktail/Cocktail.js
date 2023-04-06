import React, { useState } from "react";
import "./Cocktail.css";
import drinks from "../../data/cocktails.json";

const Cocktail = () => {
  const [cocktailList, setCocktailList] = useState(drinks);

  console.log(cocktailList);

  return (
    <div className="drink-section">
      {drinks.map((drink) => {
        return (
          <div key={drink.id} className="drink-container">
            <div>
              <img
                className="image-container"
                src={drink.image}
                alt={drink.name}
              />
            </div>
            <div>{drink.name}</div>
            <div>{drink.description}</div>
            <div>{drink.glassware}</div>
            <ul>
              {drink.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <ol>
              {drink.directions.map((step) => {
                return <li>{step}</li>;
              })}
            </ol>
            <div>{drink.notes}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktail;
