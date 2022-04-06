import React from "react";
import Ingredient from "./Ingredient";
import '../../css/design/IngredientGroup.css';

function IngredientGroup(props) {



    return (
        <div className={props.className + ' group'}>
            <h3>{"Designate your " + props.className + ":"}</h3>
            {props.ingredients.map((item, index) =>
                <Ingredient
                    key={index}
                    ingredientId = {props.className}
                    ingredientName = {item.name}
                    onSaveIngredient = {props.onSaveIngredients}
                    onDeleteIngredient = {props.onDeleteIngredients}
                />)
            }
        </div>
    )
}

export default IngredientGroup;