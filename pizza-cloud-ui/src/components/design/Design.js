import React from "react";
import Logout from "../Logout";
import Ingredient from "./Ingredient";
import IngredientGroup from "./IngredientGroup";
import DesignHeader from "./DesignHeader";
import DesignForm from "./DesignForm";

function Design(props) {
    const data = [
        {
            name: "dough",
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
            name: "protein",
            ingredients: [
                {
                    id: "PRTN",
                    name: "Some protein"
                }
            ]
        }
    ];

    return (
        <div>
            <DesignHeader data = {data}/>
            <DesignForm data = {data} changebale = 'Change text' onSaveDesign={props.onSaveDesign}/>
            <Logout/>
        </div>
    )
}

export default Design;