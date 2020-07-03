import React, { useState, useEffect } from "react";
import AddMeal from "./AddMeal.js";
import ViewMeals from "./ViewMeals";
import Plans from "./../Plans/Plans";
import test from "./../Plans/test";
import "./MealsManager.scss";

const MealsManager = ({ onAdd }) => {
  const [meals, setMeals] = useState([]);

  const handleAdd = (meal) => {
    setMeals([...meals, meal]);
  };

  const getDataFromApi = () => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
        console.log("JSON hula");
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <div className="MealsComponent">
        <AddMeal onAdd={handleAdd} />
        <ViewMeals meal={test} />
      </div>
    </>
  );
};

export default MealsManager;
