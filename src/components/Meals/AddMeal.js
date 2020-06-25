import React from 'react';
import './AddMeal.scss';


const AddMeal = () => {
  
    const AddIngredientField = () => {
        console.log("klikniete");

        const append = document.getElementById("ingredientsList");
        

        const newIngredient = () => {
          return (
            <label>
                <input 
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"
                    tooltip="hej"                
                /> 
                gr
            </label>
          )
        }
        append.appendChild(newIngredient);
    
    }

    return (
    <div className="AddMeal">
        <form className="Header">
            <h2>Dodawanie przepisu</h2>
            <label>
                <input
                className="Form-Width"
                type="text"
                placeholder="Nazwa przepisu"                
                />            
            </label>
            
            <span id="ingredientsList">
            <label>
                <input 
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                    />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"
                    tooltip="hej"                
                    /> 
                gr
            </label>
            <label>
                <input 
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                    />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"                
                    /> 
                gr
            </label>
            <label>
                <input 
                    
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"                
                /> 
                gr
            </label>
            <label>
                <input 
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"                
                /> 
                gr
            </label>
            <label>
                <input 
                    className="Ingredient"
                    type="text"
                    placeholder="Składnik"                
                />
                <input 
                    className="Quantity"
                    type="text"
                    placeholder="Ilość"                
                /> 
                gr
            </label>
            </span>

            <button className="btn-small btn-plus" onClick={AddIngredientField}>+</button>
         
            <textarea
                className="Form-Width"
                type="text"
                placeholder="Treść przepisu"                
            />

            <input
                className="Form-Width"
                type="text"
                placeholder="Link"                
            />

            <span>
                {/* <button className="btn-small">Anuluj</button> */}
                <button className="btn-small">Zapisz i zamknij</button>
            </span>

        </form>
    </div>
  );
}

export default AddMeal;
