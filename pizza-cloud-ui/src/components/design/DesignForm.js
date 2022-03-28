import React, {useEffect, useState} from "react";
import Ingredient from "./Ingredient";
import IngredientGroup from "./IngredientGroup";

function DesignForm(props) {
    //const [changebale, setChangebale] = useState(props.changebale);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredIngredients, setEnteredIngredients] = useState([]);

    /*const [userInput, setUserInput] = useState({
        title: '',
        someOtherInput: '',
        ingredients: []
    })*/


    const submitHandler = (event) => {
        event.preventDefault();
        setEnteredIngredients(savedIngredients);
        setEnteredTitle(enteredTitle);
        /*setUserInput(state => {
            const newState = {
                ...state,
                ingredients: savedIngredients
            };
            return newState;
        }
        );*/
        /*setUserInput(state => {
            console.log("userInput");
            console.log(state);
            props.onSaveDesign(state);
            return state;
        })*/

        console.log(enteredTitle)
        console.log(enteredIngredients)

        const newDesign = {
            id: (Math.random() * 10),
            name: enteredTitle,
            ingredients: enteredIngredients
        };
        props.onSaveDesign(newDesign);
        alert("submitted");

    }

    /*const clearDesignHandler = (event) => {
        event.preventDefault();
        setUserInput((prevState => {
            return {
                ...prevState,
                title: '',
                ingredients: []
            }
        }));
        console.log(userInput);
        alert("cleared");
    }*/

    //const [enteredName, setEnteredName] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    }

    const savedIngredients = [];
    const saveIngredientsHandler = (ingredient) => {
        console.log("enteredIngredients")
        enteredIngredients.push(ingredient);
        console.log(enteredIngredients)
    };
    const deleteIngredientsHandler = (ingredient) => {
        console.log("deleteIngredients")
        const index = enteredIngredients.indexOf(ingredient);
        if (index > -1) {
            enteredIngredients.splice(index, 1);
        }
        console.log(enteredIngredients)
    };

    const testH = (ingredients) => {
        console.log("Ingredients")

        console.log(ingredients)
    };

    return (
        <div>
            <form method="POST" onSubmit={submitHandler}>
                {props.data.map((item, index) =>
                    <IngredientGroup
                        key={index}
                        className={item.name}
                        ingredients={item.ingredients}
                        onSaveIngredients={saveIngredientsHandler}
                        onDeleteIngredients={deleteIngredientsHandler}
                        //test = {testH}
                    />)
                }
                <div>
                    <h3>Name your pizza creation:</h3>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text"/>
                    <span className="validationError">Name Error</span>
                    <br/>
                    <button type='submit'>Submit your pizza</button>
                    <button type='button'>Create another one</button>
                </div>

                {/*<input type="hidden" sec:authorize="isFullyAuthenticated()" th:if="${_csrf}"
                       th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>*/}
            </form>
        </div>
    )
}

export default DesignForm;