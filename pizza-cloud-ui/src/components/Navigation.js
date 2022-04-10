import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "./state/AuthContext";
import '../css/Navigation.css';

function Navigation(props) {
    const ctx = useContext(AuthContext);

    return (
        <div>
            <ul>
                <li><NavLink to='/home'>{props.home}</NavLink></li>
                <li><NavLink to='/design'>{props.design}</NavLink></li>
                <li><NavLink to='/recent'>recent</NavLink></li>
                <li><NavLink to='/cart'>{props.cart}</NavLink></li>
                {ctx.isLoggedIn && <li><NavLink onClick={ctx.onLogout} to='/login'>{props.logout}</NavLink></li>}
                {!ctx.isLoggedIn && <li><NavLink to='/login'>{props.login}</NavLink></li>}
            </ul>
        </div>
    )
}

export default Navigation;