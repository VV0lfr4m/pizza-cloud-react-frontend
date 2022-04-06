import React from "react";
import Logout from "../Logout";
import Ingredient from "./Ingredient";
import IngredientGroup from "./IngredientGroup";
import DesignHeader from "./DesignHeader";
import DesignForm from "./DesignForm";
import '../../css/design/Design.css';

function Design(props) {
    const data = [
        {
            id: "dough",
            ingredients: [
                {
                    id: "DOUG",
                    name: "Some dough"
                },
                {
                    id: "DOUG",
                    name: "Some dough2"
                },
            ]
        },
        {
            id: "protein",
            ingredients: [
                {
                    id: "PRTN",
                    name: "Some protein"
                }
            ]
        }
    ];

    return (
        <div className='design'>
            <DesignHeader className='header' data = {data}/>
            <DesignForm data = {data} changebale = 'Change text' onSaveDesign={props.onSaveDesign}/>
        </div>
    )
}

export default Design;