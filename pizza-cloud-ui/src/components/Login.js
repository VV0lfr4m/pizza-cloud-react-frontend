import React from "react";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div>
                Unable to login. Check your username and password.
            </div>

            <p>New here? Click
                <a href="@{/register}">here</a> to register.</p>
            <form method="POST" action="@{/login}" id="loginForm">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username"/><br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"/><br/>


                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;