import React from "react";
import Ingredient from "./Ingredient";

function IngredientGroup(props) {

    /*const ingredientsToSave = [];

    const ingredientIdHandler = (id) => {
        ingredientsToSave.push(id);
        props.test(ingredientsToSave);
    };*/


    return (
        <div className={props.className}>
            {props.ingredients.map((item, index) =>
                <Ingredient
                    key={index}
                    ingredientId = {item.id}
                    ingredientName = {item.name}
                    onSaveIngredient = {props.onSaveIngredients}
                    onDeleteIngredient = {props.onDeleteIngredients}
                    //test = {ingredientIdHandler}
                />)
            }
        </div>
    )
}

export default IngredientGroup;