import React from "react";

function Design() {
    return (
        <div>
            <h1>Design your pizza!</h1>
            <img src="#"/>
            <h3>Hi, <span text="username">User</span> </h3>
            <form method="POST">
                <div className="grid">
                    <div className="ingredient-group" id="dough">
                        <h3>Designate your dough:</h3>
                        <input name="ingredients" type="checkbox" value="${ingredient.id}"
                        />
                        <span text="${ingredient.name}">INGREDIENT</span><br/>
                    </div>
                    <div className="ingredient-group" id="proteins">
                        <h3>Pick your protein:</h3>
                        <input name="ingredients" type="checkbox" value="${ingredient.id}"
                        />
                        <span text="${ingredient.name}">INGREDIENT</span><br/>
                    </div>
                    <div className="ingredient-group" id="cheeses">
                        <h3>Choose your cheese:</h3>
                        <input name="ingredients" type="checkbox" value="${ingredient.id}"
                        />
                        <span text="${ingredient.name}">INGREDIENT</span><br/>
                    </div>
                    <div className="ingredient-group" id="veggies">
                        <h3>Determine your veggies:</h3>
                        <input name="ingredients" type="checkbox" value="${ingredient.id}"
                        />
                        <span text="${ingredient.name}">INGREDIENT</span><br/>
                    </div>
                    <div className="ingredient-group" id="sauces">
                        <h3>Select your sauce:</h3>
                        <input name="ingredients" type="checkbox" value="${ingredient.id}"
                        />
                        <span text="${ingredient.name}">INGREDIENT</span><br/>
                    </div>
                </div>
                <div>
                    <h3>Name your pizza creation:</h3>
                    <input type="text" value="*{name}"/>
                    <span className="validationError">Name Error</span>
                    <br/>
                    <button>Submit your pizza</button>
                </div>

                {/*<input type="hidden" sec:authorize="isFullyAuthenticated()" th:if="${_csrf}"
                       th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>*/}

            </form>
            <Logout/>
        </div>
    )
}

export default Design;