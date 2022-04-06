import React from "react";
import '../../css/design/DesignItem.css'

function UserDesigns(props) {

    return (
        <div className='designItem'>
            <h3 className='id'>{props.data.id}</h3>
            <h3 className='name'>{props.data.name}</h3>
            <ul className='ingredients'>Ingredients:
                {props.data.ingredients.map((i, index) => <li className='ingredient' key={index}>{i.name}</li>)}
            </ul>
        </div>
    )
}

export default UserDesigns;