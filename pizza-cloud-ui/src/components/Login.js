import React, {useContext, useEffect, useReducer, useState} from "react";
import AuthContext from "./state/AuthContext";

function Login(props) {

    const ctx = useContext(AuthContext);

    const loginUser = (event) => {
        event.preventDefault();
        ctx.onLogin(enteredLogin, enteredPassword);
        //props.onLogin();
        alert('redirect');
    }

    const [enteredLogin, setEnteredLogin] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        //check validity of creds on server
        const  identifier = setTimeout(() => {
            console.log('Login checking');
            setIsFormValid(
                enteredLogin.trim().length > 5 && enteredPassword.trim().length > 5
            );
        }, 300);

        return () => {
            console.log('Cleanup');
            clearTimeout(identifier);
        }
    }, [enteredLogin, enteredPassword]);

    const handleLoginChange = (event) => {
        setEnteredLogin(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setEnteredPassword(event.target.value);
    }

    return (
        <div>
            <h1>(props.login)Login</h1>
            <div>
                Unable to login. Check your username and password.
                {props.error}
            </div>

            <p>{props.messageStart}New here? Click
                <a href="@{/register}">{props.link}here</a>{props.messageEnd} to register.</p>
            <form method="POST" action="@{/login}" id="loginForm" onSubmit={loginUser}>
                <label htmlFor="username">{props.username}Username: </label>
                <input type="text" name="username" id="username" value={enteredLogin} onChange={handleLoginChange}/><br/>

                <label htmlFor="password">{props.password}Password: </label>
                <input type="password" name="password" id="password" value={enteredPassword} onChange={handlePasswordChange}/><br/>


                <input type="submit" value={props.login} disabled={!isFormValid}/>
            </form>
        </div>
    )
}

export default Login;