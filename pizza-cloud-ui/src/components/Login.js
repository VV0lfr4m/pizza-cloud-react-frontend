import React from "react";

function Login(props) {
    return (
        <div>
            <h1>(props.login)Login</h1>
            <div>
                Unable to login. Check your username and password.
                {props.error}
            </div>

            <p>{props.messageStart}New here? Click
                <a href="@{/register}">{props.link}here</a>{props.messageEnd} to register.</p>
            <form method="POST" action="@{/login}" id="loginForm">
                <label htmlFor="username">{props.username}Username: </label>
                <input type="text" name="username" id="username"/><br/>

                <label htmlFor="password">{props.password}Password: </label>
                <input type="password" name="password" id="password"/><br/>


                <input type="submit" value={props.login}/>
            </form>
        </div>
    )
}

export default Login;