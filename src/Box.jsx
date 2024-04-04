import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";

/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */
function Box({ remove, id, backgroundColor = "red", width = 40, height = 40 }) {
    /** Remove a box. */
    function handleRemove() {
        remove(id);
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
            <button className="Box-remove-btn" onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;