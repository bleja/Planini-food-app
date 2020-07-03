import React, { useState } from "react";
import "./AddMeal.scss";

const AddMeal = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([
    { ingredient: "", quantity: "" },
    { ingredient: "", quantity: "" },
    { ingredient: "", quantity: "" },
    { ingredient: "", quantity: "" },
    { ingredient: "", quantity: "" },
  ]);
  const [recipe, setRecipe] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      name: name,
      ingredients: ingredients,
      recipe: recipe,
      link: link,
    };

    console.log(newMeal);

    fetch("http://localhost:3000/meals", {
      method: "POST",
      body: JSON.stringify(newMeal),
      headers: {
        "content-type": "Application/JSON",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        onAdd(data);
      });
  };

  const saveIngredientName = (index, name) => {
    const copyIngredients = [...ingredients];
    copyIngredients[index].ingredient = name;
    setIngredients(copyIngredients);
  };

  const saveIngredientQuantity = (index, quantity) => {
    const copyIngredients = [...ingredients];
    copyIngredients[index].quantity = quantity;
    setIngredients(copyIngredients);
  };

  const AddIngredientField = (ingredient) => {
    //   e.preventDefault(); jak to dopisuje to mi wywala bledy, cos tu nie gra
    setIngredients([
      ...ingredients,
      ingredient,
    ]); /* dodaje mi nowe pole, ale nie ma ono takiej funkcjonalnosci co poprzednie input fields, po zapisie dodaje Class zamiast obiektu - czemu? */
  };

  return (
    <div className="AddMeal">
      <form className="Header" onSubmit={handleSubmit}>
        <h2>Dodawanie przepisu</h2>
        <label>
          <input
            className="Form-Width"
            type="text"
            name="name"
            placeholder="Nazwa przepisu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="ingredients-list">
          {ingredients.map((ingredient, index) => {
            return (
              <p key={index}>
                <input
                  className="Ingredient"
                  type="text"
                  name="ingredient"
                  placeholder="Składnik"
                  value={ingredient.name}
                  onChange={(e) => saveIngredientName(index, e.target.value)}
                />
                <input
                  className="Quantity"
                  type="text"
                  name="quantity"
                  placeholder="Ilość"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    saveIngredientQuantity(index, e.target.value)
                  }
                />
                gr
              </p>
            );
          })}
        </div>
        <button className="btn-small btn-plus" onClick={AddIngredientField}>
          +
        </button>
        <textarea
          className="Form-Width"
          type="text"
          placeholder="Treść przepisu"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <input
          className="Form-Width"
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {/* <span> */}
        {/* <button className="btn-small">Anuluj</button> */}
        {/* <button className="btn-small">Zapisz i zamknij</button> */}
        {/* </span> */}
        <input type="submit" className="btn-small" value="Zapisz" />
      </form>
    </div>
  );
};

export default AddMeal;
