import React from "react";
import DesignItem from "./DesignItem";
import '../../css/design/UserDesigns.css';

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
        <React.Fragment>
            <div>
                <h2>Latest designs</h2>
                <div className='designs'>
                    {showDesignList()}
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserDesigns;