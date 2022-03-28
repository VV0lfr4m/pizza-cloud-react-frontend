import React from "react";

function UserDesigns(props) {

    return (
        <div>
            <h3>{props.data.id}</h3>
            <h3>{props.data.name}</h3>
            <h3>Ingredients:
                {props.data.ingredients.map((i, index) => <p key={index}>{i.name}</p>)}
            </h3>
        </div>
    )
}

export default UserDesigns;