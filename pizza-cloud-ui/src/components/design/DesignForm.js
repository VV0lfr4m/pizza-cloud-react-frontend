import React, {useEffect, useRef, useState} from "react";
import Ingredient from "./Ingredient";
import IngredientGroup from "./IngredientGroup";
import '../../css/design/DesignForm.css';

function DesignForm(props) {
    //const [enteredTitle, setEnteredTitle] = useState('');
    const inputTitle = useRef();
    const [enteredIngredients, setEnteredIngredients] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        //setEnteredIngredients(savedIngredients);
        //setEnteredTitle(enteredTitle);

        //console.log(enteredTitle)
        console.log(inputTitle.current.value)
        console.log(enteredIngredients)
        if (enteredIngredients !== [] && inputTitle.current.value.trim().length > 3) {
            const newDesign = {
                id: (Math.floor(Math.random() * 10)),
                name: inputTitle.current.value,//enteredTitle,
                ingredients: enteredIngredients
            };
            props.onSaveDesign(newDesign);
            inputTitle.current.value = '';
            alert("submitted");
        } else {
            alert("error");
        }
    };

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

    const ingredientTypes = () => {
        let types = [];
        props.data.map((item) => {
            if (!types.includes(item.type)) {
                types.push(item.type);
            }
        });
        return types;
    };

    return (
        <div className='designForm'>
            <form method="POST" onSubmit={submitHandler}>
                <div className='groups'>
                    {ingredientTypes().map((type, index) => {
                        return (<IngredientGroup
                            key={index}
                            className={type}
                            ingredients={props.data.filter(item => item.type === type)}
                            onSaveIngredients={saveIngredientsHandler}
                            onDeleteIngredients={deleteIngredientsHandler}
                        />)
                    })
                    }
                </div>
                <div className='inputTitle'>
                    <h3>Name your pizza creation:</h3>
                    <input ref={inputTitle} type="text"/>
                </div>
                <div className='designButtons'>
                    <button type='submit'>Submit your pizza</button>
                    <button type='button'>Create another one</button>
                </div>

                {/*<input type="hidden" sec:authorize="isFullyAuthenticated()" th:if="${_csrf}"
                       th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>*/
                }
            </form>
        </div>
    )
}

export default DesignForm;