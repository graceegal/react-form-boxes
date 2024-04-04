import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";


/*
This component should display a div with a
background color, width, and height based on
the props passed to it.
*/
function Box({ remove, id, backgroundColor, width, height }) {
    /** Remove a box. */
    function handleRemove() {
        remove (id);
    }

    // render box
    return (
        <div className="Box-container">
            <div className="Box-box"
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor: backgroundColor
                }}>
            </div>
            <button className="Box-remove-btn" onClick={handleRemove}></button>
        </div>
    );
}

export default Box;