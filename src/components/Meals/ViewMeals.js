import React, { useState } from "react";
import "./ViewMeals.scss";

const ViewMeals = ({ meal }) => {
  console.log(meal[0].name);

  return (
    <>
      <span className="ShowTiles">
        Tu będzie karuzela z proponowanymi posiłkami
      </span>
      <div className="ViewMeals">
        {meal.map((element, i) => (
          <div key={i}>
            <h3>{element.name}</h3>
            <p>{element.recipe}</p>
            <p>{element.link}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewMeals;
