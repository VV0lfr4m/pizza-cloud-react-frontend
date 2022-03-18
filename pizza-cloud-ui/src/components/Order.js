import React from "react";

function Order() {
    return (
        <div>
            <form method="POST" action="@{/orders}">
                <h1>Order your taco creations!</h1>
                <img src="@{/images/PizzaCloud.png}" width="400" height="300"/>
                <a href="@{/design}" id="another">Design another taco</a><br/>
                <div>
                    <span className="validationError">
                        Please correct the problems below and resubmit.
                    </span>
                </div>
                <h3>Deliver my taco masterpieces to...</h3>
                <div className="field">
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value="*{deliveryName}"/>
                    <span className="validationError">Name Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="street">Street address: </label>
                    <input id="street" type="text" value="*{deliveryStreet}"/>
                    <span className="validationError">Street Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="city">City: </label>
                    <input id="city" type="text" value="*{deliveryCity}"/>
                    <span className="validationError">City Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="state">State: </label>
                    <input id="state" type="text" value="*{deliveryState}"/>
                    <span className="validationError">State Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="zip">Zip code: </label>
                    <input id="zip" type="text" value="*{deliveryZip}"/>
                    <span className="validationError">Zip Error</span>
                    <br/>
                </div>
                <h3>Here's how I'll pay...</h3>
                <div className="field">
                    <label htmlFor="ccNumber">Credit Card #: </label>
                    <input id="ccNumber" type="text" value="*{ccNumber}"/>
                    <span className="validationError">CC Num Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="ccExpiration">Expiration: </label>
                    <input id="ccExpiration" type="text" value="*{ccExpiration}"/>
                    <span className="validationError">Expiration Error</span>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="ccCVV">CVV: </label>
                    <input id="ccCVV" type="text" value="*{ccCVV}"/>
                    <span className="validationError">CVV Error</span>
                    <br/>
                </div>

                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>


                <input type="submit" value="Submit order"/>
            </form>
            <Logout/>
        </div>
    )
}

export default Order;