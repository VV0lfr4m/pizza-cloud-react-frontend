import React, {useEffect, useState} from "react";
import DesignHeader from "./DesignHeader";
import DesignForm from "./DesignForm";
import '../../css/design/Design.css';
import loadingGif from "../../data/images/LoadingIcon.gif";

function Design(props) {
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:9090/rest/ingredients');
            if (!response.ok) {
                throw new Error('Some error occurred:\n ' + response.status);
            }
            const data = await response.json();
            setIngredients(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }
    useEffect(fetchData, []);

    /*const dataMock = [
        {
            id: "YD2",
            name: "Yeast Dough2",
            type: "DOUGH"
        },
        {
            id: "YD",
            name: "Yeast Dough",
            type: "DOUGH"
        },
        {
            id: "YFD",
            name: "Yeast-free Dough",
            type: "DOUGH"
        },
        {
            id: "BCN",
            name: "Bacon",
            type: "PROTEIN"
        },
        {
            id: "SSGE",
            name: "Sausage",
            type: "PROTEIN"
        },
        {
            id: "TMTO",
            name: "Diced Tomatoes",
            type: "VEGGIES"
        },
        {
            id: "ONI",
            name: "Onion",
            type: "VEGGIES"
        },
        {
            id: "CHED",
            name: "Cheddar",
            type: "CHEESE"
        },
        {
            id: "JACK",
            name: "Monterrey Jack",
            type: "CHEESE"
        },
        {
            id: "KTCH",
            name: "Ketchup",
            type: "SAUCE"
        },
        {
            id: "MAYO",
            name: "Mayonnaise",
            type: "SAUCE"
        }
    ];*/

    let content = <DesignForm data = {ingredients} changebale = 'Change text' onSaveDesign={props.onSaveDesign}/>;
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <img src={loadingGif} alt='loading'/>;
    }

    return (
        <div className='design'>
            <DesignHeader className='header' data = {ingredients}/>
            {content}
        </div>
    )
}

export default Design;