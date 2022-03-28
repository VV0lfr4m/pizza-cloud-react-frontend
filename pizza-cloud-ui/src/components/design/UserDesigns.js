import React from "react";
import DesignItem from "./DesignItem";

function UserDesigns(props) {

    const showDesignList = () => {
        let designList = <p>'No designs yet :('</p>;
        if (props.designs.length >  0) {
            designList = props.designs.map((design,idx) =>
                <DesignItem key={idx} data={design}/>
            );
        }
        return designList;
    }

    return (
        <div>
            <h2>Latest designs</h2>
            {showDesignList()}
        </div>
    );
}

export default UserDesigns;