import React from "react";
import classes from '../css/Navigation.module.css';
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <ul>
                <li><NavLink to='/home'>{props.home}</NavLink></li>
                <li><NavLink to='/design'>{props.design}</NavLink></li>
                <li><NavLink to='/recent'>recent</NavLink></li>
                <li><NavLink to='/cart'>{props.cart}</NavLink></li>
                <li><NavLink to='/login'>{props.login}</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;