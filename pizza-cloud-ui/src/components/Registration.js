import React from "react";

function Registration() {
    return (
        <div>
            <h1>Register</h1>

            <form method="POST" action="@{/register}">

                <div>
                    <span className="validationError">
                        Please correct the problems below and resubmit.
                    </span>
                </div>

                <label htmlFor="username">Username: </label>
                <input id="username" type="text" value="*{username}"/>
                <span className="validationError">Name Error</span><br/>

                <label htmlFor="password">Password: </label>
                <input id="password" type="password" value="*{password}"/>
                <span className="validationError">Password Error</span><br/>

                <label htmlFor="confirm">Confirm password: </label>
                <input id="confirm" type="password" value="*{confirmPass}"/>
                <span className="validationError">Confirm Error</span><br/>

                <label htmlFor="fullName">Full name: </label>
                <input id="fullName" type="text" value="*{fullName}"/>
                <span className="validationError">Full name Error</span><br/>

                <label htmlFor="street">Street: </label>
                <input id="street" type="text" value="*{street}"/>
                <span className="validationError">Street Error</span><br/>

                <label htmlFor="city">City: </label>
                <input id="city" type="text" value="*{city}"/>
                <span className="validationError">City Error</span><br/>

                <label htmlFor="state">State: </label>
                <input id="state" type="text" value="*{state}"/>
                <span className="validationError">State Error</span><br/>

                <label htmlFor="zip">Zip: </label>
                <input id="zip" type="text" value="*{zip}"/>
                <span className="validationError">Zip Error</span><br/>

                <label htmlFor="phone">Phone: </label>
                <input id="phone" type="text" value="*{phone}"/>
                <span className="validationError">Phone Error</span><br/>


                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Registration;