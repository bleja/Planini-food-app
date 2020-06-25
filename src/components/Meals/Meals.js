import React from 'react';
import AddMeal from './AddMeal.js';
import ViewMeals from './ViewMeals';
import './Meals.scss';



function Meals() {
  return (
      <>
      <div className="MealsComponent">
      <h1>Twoje Posiłki</h1>
      <ViewMeals />
      <AddMeal />
    </div>
    </>
  );
}

export default Meals;
