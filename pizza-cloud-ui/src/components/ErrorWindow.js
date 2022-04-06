import React from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const Overlay = props => {
    return <div>
        <button>Okay</button>
    </div>
}

function ErrorWindow(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorWindow;