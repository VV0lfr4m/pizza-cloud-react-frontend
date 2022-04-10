import React from "react";
import Ingredient from "./Ingredient";
import '../../css/design/DesignHeader.css';
import logo from '../../data/images/PizzaCloud.png';

function DesignHeader(props) {

    return (
        <div>
            <h1>Design your pizza!</h1>
            <img src={logo}/>
            <h3>Hi, <span text="username">User</span> </h3>
        </div>
    )
}

export default DesignHeader;