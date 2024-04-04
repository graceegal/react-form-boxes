import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";


/*
This component should display a div with a
background color, width, and height based on
the props passed to it.
*/
function Box({ deleteBtn, addBox, backgroundColor, width, height }) {
    // render box
    return (
        <div className="Box-container">
            <div className="Box-shape"
                style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: backgroundColor}}>
            </div>
            <button className="Box-delete-btn" onClick={deleteBtn}></button>
        </div>
    );
}

export default Box;