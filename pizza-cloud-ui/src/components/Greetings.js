import React, {useContext, useState} from "react";
import AuthContext from "./state/AuthContext";
import Login from "./Login";

function Greetings(props) {
    let ctx = useContext(AuthContext);

    let content = (
        <div>
            <h3>'Not logged in'</h3>
            <button onClick={ctx.onLogin}>Login</button>
        </div>);

    if (ctx.isLoggedIn) {
        content = (
            <div>
                <h2>{props.message}</h2>
                <h1>{props.name}</h1>
                <img src="#" width="400" height="300" alt="LOGO img"/>
                <button onClick={ctx.onLogout}>Logout</button>
            </div>
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Greetings;