import React from "react";

function Greetings(props) {
    return (
        <div>
            <h2>{props.message}</h2>
            <h1>{props.name}</h1>
            <img src="#" width="400" height="300" alt="LOGO img"/>
        </div>
    )
}

export default Greetings;