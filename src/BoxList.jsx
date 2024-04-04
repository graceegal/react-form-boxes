import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/**Place your state that contains all of the boxes here.
 * This component should render all of the Box components
 * along with the NewBoxForm component. */

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function renderBoxes() {
        return (
            <div>
                { boxes.map(b => (<Box deleteBtn={deleteBtn} addBox={addBox(b)} />)) }
            </div>
        );
    }

    /** Add new Box object to boxes list. */
    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }
    // end

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;