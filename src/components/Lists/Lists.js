import React from "react";
import "./Lists.scss";

function Lists({ shoppingList }) {
  // console.log(shoppingList);

  const finalList = Object.values(shoppingList.reduce((acc, {quantity, ...r}) => {
    const key = JSON.stringify(r); //key to moj ingredient
    acc[key] = (acc[key]  || {...r, quantity: 0});
    return (acc[key].quantity += parseInt(quantity), acc);
  }, {}));
  console.log(finalList);
  
  return (
    <div className="shopping-list">
      <h1>Lista zakupów:</h1>
      {finalList.map((ingredient, i) => {
        return (
          <div key={i}>
            {ingredient.ingredient}: {ingredient.quantity} gr
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
