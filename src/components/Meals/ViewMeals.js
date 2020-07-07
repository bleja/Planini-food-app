import React, { useState } from "react";
import "./ViewMeals.scss";

const ViewMeals = () => {
  return (
    <>
      <div className="ViewMeals">
        Tu kiedyś będą wyswietalne posiłki (z serwera)
        {/* {meal.map((element, i) => (
          <div key={i} className="meal-tile" onHover={ShowRecipe}>
            <h3>{element.name}</h3>
            <p>{element.recipe}</p>
            <p>{element.link}</p>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default ViewMeals;
