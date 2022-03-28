import React, {useState} from "react";
import Card from "../ui/Card";
import '../ui/Card.css';

function Ingredient(props) {
    //const [ingredient, setIngredient] = useState("");

    const handleIngredientChange = (event) => {
        console.log(event.target.checked)
        if (event.target.checked === true) {
            event.target.value = props.ingredientName;
            const ingredient = {
                id: props.ingredientId,
                name: props.ingredientName
            }
            props.onSaveIngredient(ingredient);
            //props.onSaveIngredient(event.target.value);
            //props.test(event.target.value);
            console.log("save ingredient");
        }
        else {
            const ingredient = {
                id: props.ingredientId,
                name: props.ingredientName
            }
            console.log('delete ingredient');
            //props.onDeleteIngredient(event.target.value);
            props.onDeleteIngredient(ingredient);
        }
    };

    return (
        <Card className="grid">
            <h3>{"Designate your " + props.ingredientName + ":"}</h3>
            <input onChange={handleIngredientChange} name="ingredient" type="checkbox"/>
            <span>{props.ingredientName}</span>
            <br/>
        </Card>
    )
}

export default Ingredient;